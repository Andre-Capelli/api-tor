"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optionalAuth = exports.authorize = exports.authenticate = void 0;
exports.expressAuthentication = expressAuthentication;
const jwtUtils_1 = require("../utils/jwtUtils");
// Known access level names mapped to their numeric levels.
// Used for scope checks when the JWT contains accessLevel info.
const ACCESS_LEVELS = {
    master: 100,
    admin: 50,
    user: 40,
};
/**
 * Authentication middleware
 * Validates JWT token from X-Token header and extracts user information
 */
const authenticate = async (req, res, next) => {
    try {
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
        const decoded = (0, jwtUtils_1.verifyAccessToken)(token);
        if (decoded.jti && await (0, jwtUtils_1.isTokenBlacklisted)(decoded.jti)) {
            res.status(401).json({
                error: { message: "Token has been revoked", status: 401 },
            });
            return;
        }
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
 * Authorization middleware using numeric access levels.
 * Checks if the authenticated user's access level is high enough.
 *
 * @param requiredLevelNames - Access level names that are allowed (e.g., "admin", "master")
 *   The minimum numeric level from these names is used as the threshold.
 *   Higher levels always pass (master passes admin checks).
 */
const authorize = (...requiredLevelNames) => {
    return (req, res, next) => {
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
            const requiredLevel = Math.min(...requiredLevelNames.map((n) => ACCESS_LEVELS[n] ?? 0));
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
 */
const optionalAuth = async (req, _res, next) => {
    try {
        const token = (0, jwtUtils_1.extractTokenFromHeader)(req);
        if (token) {
            const decoded = (0, jwtUtils_1.verifyAccessToken)(token);
            req.user = decoded;
        }
        next();
    }
    catch (error) {
        next();
    }
};
exports.optionalAuth = optionalAuth;
/**
 * TSOA Authentication handler
 * Called by TSOA for routes marked with @Security decorator.
 *
 * Scopes represent access level names (e.g., ["admin"], ["master"]).
 * The check uses numeric comparison: user's accessLevel must be >= the minimum
 * level derived from the scope names. This means higher levels always pass
 * (master at 100 passes any admin check at 50).
 */
async function expressAuthentication(request, securityName, scopes) {
    if (securityName === "jwt") {
        const token = (0, jwtUtils_1.extractTokenFromHeader)(request);
        if (!token) {
            return Promise.reject(new Error("No authentication token provided"));
        }
        try {
            const decoded = (0, jwtUtils_1.verifyAccessToken)(token);
            if (decoded.jti && await (0, jwtUtils_1.isTokenBlacklisted)(decoded.jti)) {
                return Promise.reject(new Error("Token has been revoked"));
            }
            if (scopes && scopes.length > 0) {
                // Find the minimum level required from the scope names
                const requiredLevel = Math.min(...scopes.map((s) => ACCESS_LEVELS[s] ?? 0));
                const userLevel = decoded.accessLevel ?? 0;
                if (userLevel < requiredLevel) {
                    return Promise.reject(new Error(`Insufficient permissions. Required minimum level: ${requiredLevel}`));
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
