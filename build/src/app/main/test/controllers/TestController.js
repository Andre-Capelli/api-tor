"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestController = void 0;
const tsoa_1 = require("tsoa");
let TestController = class TestController extends tsoa_1.Controller {
    /**
     * Public endpoint - No authentication required
     * Use this to test if the API is working
     */
    async publicEndpoint() {
        this.setStatus(200);
        return {
            success: true,
            message: "Public endpoint - No authentication required",
            timestamp: new Date().toISOString(),
        };
    }
    /**
     * Protected endpoint - Requires valid JWT token
     * Send token in Authorization header: "Bearer <your-token>"
     *
     * @example Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
     */
    async protectedEndpoint(req) {
        this.setStatus(200);
        return {
            success: true,
            message: "Protected endpoint - Authentication successful",
            user: req.user ? {
                id: req.user.id,
                email: req.user.email,
                name: req.user.name,
                role: req.user.role,
            } : undefined,
            timestamp: new Date().toISOString(),
        };
    }
    /**
     * Admin only endpoint - Requires valid JWT token with admin role
     * Send token in Authorization header: "Bearer <your-token>"
     * User must have role: "admin"
     */
    async adminEndpoint(req) {
        this.setStatus(200);
        return {
            success: true,
            message: "Admin endpoint - You have admin access",
            user: req.user ? {
                id: req.user.id,
                email: req.user.email,
                name: req.user.name,
                role: req.user.role,
            } : undefined,
            timestamp: new Date().toISOString(),
        };
    }
    /**
     * Moderator or Admin endpoint - Requires valid JWT token with moderator or admin role
     * Send token in Authorization header: "Bearer <your-token>"
     * User must have role: "moderator" or "admin"
     */
    async moderatorEndpoint(req) {
        this.setStatus(200);
        return {
            success: true,
            message: "Moderator endpoint - You have moderator or admin access",
            user: req.user ? {
                id: req.user.id,
                email: req.user.email,
                name: req.user.name,
                role: req.user.role,
            } : undefined,
            timestamp: new Date().toISOString(),
        };
    }
    /**
     * Validate token endpoint - Returns token information if valid
     * Send token in Authorization header: "Bearer <your-token>"
     */
    async validateToken(req) {
        this.setStatus(200);
        return {
            success: true,
            message: "Token is valid",
            tokenInfo: {
                userId: req.user.id,
                email: req.user.email,
                name: req.user.name,
                role: req.user.role,
                issuedAt: req.user.iat,
                expiresAt: req.user.exp,
                issuer: "api-tor",
                audience: "api-tor-users",
            },
        };
    }
};
exports.TestController = TestController;
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "Success"),
    (0, tsoa_1.Get)("public"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TestController.prototype, "publicEndpoint", null);
__decorate([
    (0, tsoa_1.Security)("jwt"),
    (0, tsoa_1.SuccessResponse)("200", "Authenticated successfully"),
    (0, tsoa_1.Response)("401", "Unauthorized - Invalid or missing token"),
    (0, tsoa_1.Get)("protected"),
    __param(0, (0, tsoa_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TestController.prototype, "protectedEndpoint", null);
__decorate([
    (0, tsoa_1.Security)("jwt", ["admin"]),
    (0, tsoa_1.SuccessResponse)("200", "Admin access granted"),
    (0, tsoa_1.Response)("401", "Unauthorized - Invalid or missing token"),
    (0, tsoa_1.Response)("403", "Forbidden - Insufficient permissions"),
    (0, tsoa_1.Get)("admin"),
    __param(0, (0, tsoa_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TestController.prototype, "adminEndpoint", null);
__decorate([
    (0, tsoa_1.Security)("jwt", ["moderator", "admin"]),
    (0, tsoa_1.SuccessResponse)("200", "Moderator access granted"),
    (0, tsoa_1.Response)("401", "Unauthorized - Invalid or missing token"),
    (0, tsoa_1.Response)("403", "Forbidden - Insufficient permissions"),
    (0, tsoa_1.Get)("moderator"),
    __param(0, (0, tsoa_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TestController.prototype, "moderatorEndpoint", null);
__decorate([
    (0, tsoa_1.Security)("jwt"),
    (0, tsoa_1.SuccessResponse)("200", "Token is valid"),
    (0, tsoa_1.Response)("401", "Unauthorized - Invalid or expired token"),
    (0, tsoa_1.Get)("validate-token"),
    __param(0, (0, tsoa_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TestController.prototype, "validateToken", null);
exports.TestController = TestController = __decorate([
    (0, tsoa_1.Route)("test"),
    (0, tsoa_1.Tags)("Test Endpoints")
], TestController);
