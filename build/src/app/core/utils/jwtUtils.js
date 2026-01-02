"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTokenExpired = exports.decodeToken = exports.extractTokenFromHeader = exports.verifyRefreshToken = exports.verifyAccessToken = exports.generateTokenPair = exports.generateRefreshToken = exports.generateAccessToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// JWT Secret - should be in environment variables
const JWT_SECRET = process.env.JWT_SECRET || "your-super-secret-jwt-key-change-this-in-production";
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || "your-refresh-secret-key-change-this-in-production";
// Token expiration times
const ACCESS_TOKEN_EXPIRY = process.env.ACCESS_TOKEN_EXPIRY || "15m"; // 15 minutes
const REFRESH_TOKEN_EXPIRY = process.env.REFRESH_TOKEN_EXPIRY || "7d"; // 7 days
/**
 * Generate access token (short-lived)
 */
const generateAccessToken = (payload) => {
    return jsonwebtoken_1.default.sign(payload, JWT_SECRET, {
        expiresIn: ACCESS_TOKEN_EXPIRY,
        issuer: "api-tor",
        audience: "api-tor-users",
    });
};
exports.generateAccessToken = generateAccessToken;
/**
 * Generate refresh token (long-lived)
 */
const generateRefreshToken = (payload) => {
    return jsonwebtoken_1.default.sign(payload, JWT_REFRESH_SECRET, {
        expiresIn: REFRESH_TOKEN_EXPIRY,
        issuer: "api-tor",
        audience: "api-tor-users",
    });
};
exports.generateRefreshToken = generateRefreshToken;
/**
 * Generate both access and refresh tokens
 */
const generateTokenPair = (payload) => {
    return {
        accessToken: (0, exports.generateAccessToken)(payload),
        refreshToken: (0, exports.generateRefreshToken)(payload),
    };
};
exports.generateTokenPair = generateTokenPair;
/**
 * Verify access token
 */
const verifyAccessToken = (token) => {
    try {
        const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET, {
            issuer: "api-tor",
            audience: "api-tor-users",
        });
        return decoded;
    }
    catch (error) {
        if (error instanceof jsonwebtoken_1.default.TokenExpiredError) {
            throw new Error("Token has expired");
        }
        if (error instanceof jsonwebtoken_1.default.JsonWebTokenError) {
            throw new Error("Invalid token");
        }
        throw new Error("Token verification failed");
    }
};
exports.verifyAccessToken = verifyAccessToken;
/**
 * Verify refresh token
 */
const verifyRefreshToken = (token) => {
    try {
        const decoded = jsonwebtoken_1.default.verify(token, JWT_REFRESH_SECRET, {
            issuer: "api-tor",
            audience: "api-tor-users",
        });
        return decoded;
    }
    catch (error) {
        if (error instanceof jsonwebtoken_1.default.TokenExpiredError) {
            throw new Error("Refresh token has expired");
        }
        if (error instanceof jsonwebtoken_1.default.JsonWebTokenError) {
            throw new Error("Invalid refresh token");
        }
        throw new Error("Refresh token verification failed");
    }
};
exports.verifyRefreshToken = verifyRefreshToken;
/**
 * Extract token from request header
 * Supports: "Bearer <token>" or just "<token>"
 */
const extractTokenFromHeader = (req) => {
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
exports.extractTokenFromHeader = extractTokenFromHeader;
/**
 * Decode token without verification (useful for debugging)
 */
const decodeToken = (token) => {
    try {
        return jsonwebtoken_1.default.decode(token);
    }
    catch (error) {
        return null;
    }
};
exports.decodeToken = decodeToken;
/**
 * Check if token is expired without throwing error
 */
const isTokenExpired = (token) => {
    try {
        const decoded = jsonwebtoken_1.default.decode(token);
        if (!decoded || !decoded.exp) {
            return true;
        }
        return decoded.exp * 1000 < Date.now();
    }
    catch (error) {
        return true;
    }
};
exports.isTokenExpired = isTokenExpired;
