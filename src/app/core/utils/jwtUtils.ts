import jwt, { SignOptions } from "jsonwebtoken";
import crypto from "crypto";
import { Request } from "express";
import BlacklistedTokenDB from "../models/BlacklistedToken";

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
  organizationId?: string;
  organizationType?: string;
  accessLevelName?: string;
  accessLevel?: number;
  accessLevelScope?: string;
  jti?: string;
  iat?: number;
  exp?: number;
}

/**
 * Generate access token (short-lived)
 */
export const generateAccessToken = (payload: Omit<JwtPayload, "iat" | "exp" | "jti">): string => {
  const jti = crypto.randomUUID();
  return jwt.sign({ ...payload, jti }, JWT_SECRET, {
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
 * Extract token from X-Token request header
 */
export const extractTokenFromHeader = (req: Request): string | null => {
  return (req.headers["x-token"] as string) || null;
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
/**
 * Check if a token's jti has been blacklisted
 */
export const isTokenBlacklisted = async (jti: string): Promise<boolean> => {
  const entry = await BlacklistedTokenDB.findOne({ jti });
  return !!entry;
};

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
