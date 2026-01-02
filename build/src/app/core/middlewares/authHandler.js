"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optionalAuth = exports.authorize = exports.authenticate = void 0;
exports.expressAuthentication = expressAuthentication;
const jwtUtils_1 = require("../utils/jwtUtils");
/**
 * Authentication middleware
 * Validates JWT token from Authorization header and extracts user information
 *
 * Usage: Add this middleware to routes that require authentication
 * Example: app.get('/protected', authenticate, handler)
 */
const authenticate = async (req, res, next) => {
    try {
        // Extract token from Authorization header
        const token = (0, jwtUtils_1.extractTokenFromHeader)(req);
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
        const decoded = (0, jwtUtils_1.verifyAccessToken)(token);
        // Attach user information to request
        req.user = decoded;
        next();
    }
    catch (error) {
        const errorMessage = error.message || "Unauthorized";
        res.status(401).json({
            error: {
                message: errorMessage,
                status: 401,
            },
        });
    }
};
exports.authenticate = authenticate;
/**
 * Authorization middleware
 * Checks if the authenticated user has the required role(s)
 *
 * @param roles - Array of roles allowed to access the resource
 *
 * Usage: authorize('admin', 'moderator')
 */
const authorize = (...roles) => {
    return (req, res, next) => {
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
        }
        catch (error) {
            res.status(403).json({
                error: {
                    message: "Forbidden",
                    status: 403,
                },
            });
        }
    };
};
exports.authorize = authorize;
/**
 * Optional authentication middleware
 * Extracts user information if token is available, but doesn't require it
 *
 * Usage: For routes that work with or without authentication
 */
const optionalAuth = async (req, _res, next) => {
    try {
        const token = (0, jwtUtils_1.extractTokenFromHeader)(req);
        if (token) {
            // Try to verify token if present
            const decoded = (0, jwtUtils_1.verifyAccessToken)(token);
            req.user = decoded;
        }
        // Continue regardless of token validity
        next();
    }
    catch (error) {
        // If token is invalid or expired, just continue without user
        next();
    }
};
exports.optionalAuth = optionalAuth;
/**
 * TSOA Authentication handler
 * This function is called by TSOA for routes marked with @Security decorator
 */
function expressAuthentication(request, securityName, scopes) {
    if (securityName === "jwt") {
        const token = (0, jwtUtils_1.extractTokenFromHeader)(request);
        if (!token) {
            return Promise.reject(new Error("No authentication token provided"));
        }
        try {
            const decoded = (0, jwtUtils_1.verifyAccessToken)(token);
            // If scopes (roles) are required, check them
            if (scopes && scopes.length > 0) {
                if (!decoded.role || !scopes.includes(decoded.role)) {
                    return Promise.reject(new Error(`Insufficient permissions. Required roles: ${scopes.join(", ")}`));
                }
            }
            return Promise.resolve(decoded);
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    return Promise.reject(new Error("Unknown security scheme"));
}
