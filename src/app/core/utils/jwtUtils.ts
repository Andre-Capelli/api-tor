import jwt, { SignOptions } from "jsonwebtoken";
import { Request } from "express";

// JWT Secret - should be in environment variables
const JWT_SECRET = process.env.JWT_SECRET || "your-super-secret-jwt-key-change-this-in-production";
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || "your-refresh-secret-key-change-this-in-production";

// Token expiration times
const ACCESS_TOKEN_EXPIRY: string | number = process.env.ACCESS_TOKEN_EXPIRY || "15m"; // 15 minutes
const REFRESH_TOKEN_EXPIRY: string | number = process.env.REFRESH_TOKEN_EXPIRY || "7d"; // 7 days

export interface JwtPayload {
  id: string;
  email: string;
  name: string;
  role?: string;
  iat?: number;
  exp?: number;
}

/**
 * Generate access token (short-lived)
 */
export const generateAccessToken = (payload: Omit<JwtPayload, "iat" | "exp">): string => {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: ACCESS_TOKEN_EXPIRY,
    issuer: "api-tor",
    audience: "api-tor-users",
  } as SignOptions);
};

/**
 * Generate refresh token (long-lived)
 */
export const generateRefreshToken = (payload: Omit<JwtPayload, "iat" | "exp">): string => {
  return jwt.sign(payload, JWT_REFRESH_SECRET, {
    expiresIn: REFRESH_TOKEN_EXPIRY,
    issuer: "api-tor",
    audience: "api-tor-users",
  } as SignOptions);
};

/**
 * Generate both access and refresh tokens
 */
export const generateTokenPair = (
  payload: Omit<JwtPayload, "iat" | "exp">
): { accessToken: string; refreshToken: string } => {
  return {
    accessToken: generateAccessToken(payload),
    refreshToken: generateRefreshToken(payload),
  };
};

/**
 * Verify access token
 */
export const verifyAccessToken = (token: string): JwtPayload => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET, {
      issuer: "api-tor",
      audience: "api-tor-users",
    }) as JwtPayload;
    return decoded;
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      throw new Error("Token has expired");
    }
    if (error instanceof jwt.JsonWebTokenError) {
      throw new Error("Invalid token");
    }
    throw new Error("Token verification failed");
  }
};

/**
 * Verify refresh token
 */
export const verifyRefreshToken = (token: string): JwtPayload => {
  try {
    const decoded = jwt.verify(token, JWT_REFRESH_SECRET, {
      issuer: "api-tor",
      audience: "api-tor-users",
    }) as JwtPayload;
    return decoded;
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      throw new Error("Refresh token has expired");
    }
    if (error instanceof jwt.JsonWebTokenError) {
      throw new Error("Invalid refresh token");
    }
    throw new Error("Refresh token verification failed");
  }
};

/**
 * Extract token from request header
 * Supports: "Bearer <token>" or just "<token>"
 */
export const extractTokenFromHeader = (req: Request): string | null => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return null;
  }

  // Check if it's in "Bearer <token>" format
  if (authHeader.startsWith("Bearer ")) {
    return authHeader.substring(7);
  }

  // Otherwise, assume the entire header is the token
  return authHeader;
};

/**
 * Decode token without verification (useful for debugging)
 */
export const decodeToken = (token: string): JwtPayload | null => {
  try {
    return jwt.decode(token) as JwtPayload;
  } catch (error) {
    return null;
  }
};

/**
 * Check if token is expired without throwing error
 */
export const isTokenExpired = (token: string): boolean => {
  try {
    const decoded = jwt.decode(token) as JwtPayload;
    if (!decoded || !decoded.exp) {
      return true;
    }
    return decoded.exp * 1000 < Date.now();
  } catch (error) {
    return true;
  }
};
