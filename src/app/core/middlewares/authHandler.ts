import { Request, Response, NextFunction } from "express";
import {
  verifyAccessToken,
  extractTokenFromHeader,
  JwtPayload,
} from "../utils/jwtUtils";

export interface AuthenticatedRequest extends Request {
  user?: JwtPayload;
}

/**
 * Authentication middleware
 * Validates JWT token from Authorization header and extracts user information
 *
 * Usage: Add this middleware to routes that require authentication
 * Example: app.get('/protected', authenticate, handler)
 */
export const authenticate = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    // Extract token from Authorization header
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

    // Verify and decode the token
    const decoded = verifyAccessToken(token);

    // Attach user information to request
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
 * Authorization middleware
 * Checks if the authenticated user has the required role(s)
 *
 * @param roles - Array of roles allowed to access the resource
 *
 * Usage: authorize('admin', 'moderator')
 */
export const authorize = (...roles: string[]) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
    try {
      // Check if user is authenticated
      if (!req.user) {
        res.status(401).json({
          error: {
            message: "Unauthorized - No user information found",
            status: 401,
          },
        });
        return;
      }

      // If no roles specified, just check if user is authenticated
      if (roles.length === 0) {
        next();
        return;
      }

      // Check if user has one of the required roles
      if (!req.user.role || !roles.includes(req.user.role)) {
        res.status(403).json({
          error: {
            message: "Forbidden - Insufficient permissions",
            status: 403,
            requiredRoles: roles,
            userRole: req.user.role || "none",
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
 *
 * Usage: For routes that work with or without authentication
 */
export const optionalAuth = async (
  req: AuthenticatedRequest,
  _res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const token = extractTokenFromHeader(req);

    if (token) {
      // Try to verify token if present
      const decoded = verifyAccessToken(token);
      req.user = decoded;
    }

    // Continue regardless of token validity
    next();
  } catch (error) {
    // If token is invalid or expired, just continue without user
    next();
  }
};

/**
 * TSOA Authentication handler
 * This function is called by TSOA for routes marked with @Security decorator
 */
export function expressAuthentication(
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

      // If scopes (roles) are required, check them
      if (scopes && scopes.length > 0) {
        if (!decoded.role || !scopes.includes(decoded.role)) {
          return Promise.reject(
            new Error(`Insufficient permissions. Required roles: ${scopes.join(", ")}`)
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
