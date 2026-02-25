import { Request, Response, NextFunction } from "express";
import {
  verifyAccessToken,
  extractTokenFromHeader,
  isTokenBlacklisted,
  JwtPayload,
} from "../utils/jwtUtils";

// Known access level names mapped to their numeric levels.
// Used for scope checks when the JWT contains accessLevel info.
const ACCESS_LEVELS: Record<string, number> = {
  master: 100,
  admin: 50,
  user: 40,
};

export interface AuthenticatedRequest extends Request {
  user?: JwtPayload;
}

/**
 * Authentication middleware
 * Validates JWT token from X-Token header and extracts user information
 */
export const authenticate = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const token = extractTokenFromHeader(req);

    if (!token) {
      res.status(401).json({
        error: {
          message: "No authentication token provided",
          status: 401,
        },
      });
      return;
    }

    const decoded = verifyAccessToken(token);

    if (decoded.jti && await isTokenBlacklisted(decoded.jti)) {
      res.status(401).json({
        error: { message: "Token has been revoked", status: 401 },
      });
      return;
    }

    req.user = decoded;
    next();
  } catch (error) {
    const errorMessage = (error as Error).message || "Unauthorized";
    res.status(401).json({
      error: {
        message: errorMessage,
        status: 401,
      },
    });
  }
};

/**
 * Authorization middleware using numeric access levels.
 * Checks if the authenticated user's access level is high enough.
 *
 * @param requiredLevelNames - Access level names that are allowed (e.g., "admin", "master")
 *   The minimum numeric level from these names is used as the threshold.
 *   Higher levels always pass (master passes admin checks).
 */
export const authorize = (...requiredLevelNames: string[]) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
    try {
      if (!req.user) {
        res.status(401).json({
          error: {
            message: "Unauthorized - No user information found",
            status: 401,
          },
        });
        return;
      }

      if (requiredLevelNames.length === 0) {
        next();
        return;
      }

      // Find the minimum level required from the scope names
      const requiredLevel = Math.min(
        ...requiredLevelNames.map((n) => ACCESS_LEVELS[n] ?? 0)
      );

      const userLevel = req.user.accessLevel ?? 0;

      if (userLevel < requiredLevel) {
        res.status(403).json({
          error: {
            message: "Forbidden - Insufficient permissions",
            status: 403,
          },
        });
        return;
      }

      next();
    } catch (error) {
      res.status(403).json({
        error: {
          message: "Forbidden",
          status: 403,
        },
      });
    }
  };
};

/**
 * Optional authentication middleware
 * Extracts user information if token is available, but doesn't require it
 */
export const optionalAuth = async (
  req: AuthenticatedRequest,
  _res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const token = extractTokenFromHeader(req);

    if (token) {
      const decoded = verifyAccessToken(token);
      req.user = decoded;
    }

    next();
  } catch (error) {
    next();
  }
};

/**
 * TSOA Authentication handler
 * Called by TSOA for routes marked with @Security decorator.
 *
 * Scopes represent access level names (e.g., ["admin"], ["master"]).
 * The check uses numeric comparison: user's accessLevel must be >= the minimum
 * level derived from the scope names. This means higher levels always pass
 * (master at 100 passes any admin check at 50).
 */
export async function expressAuthentication(
  request: Request,
  securityName: string,
  scopes?: string[]
): Promise<JwtPayload> {
  if (securityName === "jwt") {
    const token = extractTokenFromHeader(request);

    if (!token) {
      return Promise.reject(new Error("No authentication token provided"));
    }

    try {
      const decoded = verifyAccessToken(token);

      if (decoded.jti && await isTokenBlacklisted(decoded.jti)) {
        return Promise.reject(new Error("Token has been revoked"));
      }

      if (scopes && scopes.length > 0) {
        // Find the minimum level required from the scope names
        const requiredLevel = Math.min(
          ...scopes.map((s) => ACCESS_LEVELS[s] ?? 0)
        );

        const userLevel = decoded.accessLevel ?? 0;

        if (userLevel < requiredLevel) {
          return Promise.reject(
            new Error(`Insufficient permissions. Required minimum level: ${requiredLevel}`)
          );
        }
      }

      return Promise.resolve(decoded);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  return Promise.reject(new Error("Unknown security scheme"));
}
