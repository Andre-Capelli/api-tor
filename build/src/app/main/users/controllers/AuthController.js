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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const tsoa_1 = require("tsoa");
const User_1 = __importDefault(require("../User"));
const AccessLevel_1 = __importDefault(require("@main/access-levels/AccessLevel"));
const Organization_1 = __importDefault(require("@main/organizations/Organization"));
const jwtUtils_1 = require("@core/utils/jwtUtils");
const BlacklistedToken_1 = __importDefault(require("@core/models/BlacklistedToken"));
/**
 * Builds the enriched JWT payload from user + access level + organization data.
 */
async function buildTokenPayload(user) {
    const payload = {
        id: String(user._id),
        email: user.email,
        name: user.name,
    };
    // Populate access level data
    if (user.accessLevelId) {
        const accessLevel = await AccessLevel_1.default.findById(user.accessLevelId);
        if (accessLevel) {
            payload.accessLevelName = accessLevel.key;
            payload.accessLevel = accessLevel.level;
            payload.accessLevelScope = accessLevel.scope;
        }
    }
    // Populate organization data
    if (user.organizationId) {
        const org = await Organization_1.default.findById(user.organizationId);
        if (org) {
            payload.organizationId = String(org._id);
            payload.organizationType = org.type;
        }
    }
    return payload;
}
let AuthController = class AuthController extends tsoa_1.Controller {
    /**
     * User login - Generate JWT tokens
     */
    async login(body) {
        try {
            const { email, password } = body;
            const user = await User_1.default.findOne({ email }).select("+password");
            if (!user) {
                this.setStatus(401);
                throw new Error("Invalid email or password");
            }
            if (!user.isActive) {
                this.setStatus(401);
                throw new Error("Account is inactive");
            }
            const isPasswordValid = await user.comparePassword(password);
            if (!isPasswordValid) {
                this.setStatus(401);
                throw new Error("Invalid email or password");
            }
            const tokenPayload = await buildTokenPayload(user);
            const tokens = (0, jwtUtils_1.generateTokenPair)(tokenPayload);
            this.setStatus(200);
            return {
                ...tokens,
                user: {
                    id: String(user._id),
                    name: user.name,
                    email: user.email,
                    accessLevelName: tokenPayload.accessLevelName,
                    accessLevel: tokenPayload.accessLevel,
                    organizationId: tokenPayload.organizationId,
                    organizationType: tokenPayload.organizationType,
                },
            };
        }
        catch (error) {
            console.error("Login error:", error);
            if (error.message.includes("Invalid") || error.message.includes("inactive")) {
                throw error;
            }
            this.setStatus(500);
            throw new Error("Login failed");
        }
    }
    /**
     * User registration - Create new user and generate tokens
     */
    async register(body) {
        try {
            const { name, email, password, organizationId } = body;
            const existingUser = await User_1.default.findOne({ email });
            if (existingUser) {
                this.setStatus(400);
                throw new Error("User with this email already exists");
            }
            // Default to "user" access level
            const defaultAccessLevel = await AccessLevel_1.default.findOne({ key: "user" });
            const user = await User_1.default.create({
                name,
                email,
                password,
                isActive: true,
                organizationId: organizationId || null,
                accessLevelId: defaultAccessLevel ? String(defaultAccessLevel._id) : null,
            });
            const tokenPayload = await buildTokenPayload(user);
            const tokens = (0, jwtUtils_1.generateTokenPair)(tokenPayload);
            this.setStatus(201);
            return {
                ...tokens,
                user: {
                    id: String(user._id),
                    name: user.name,
                    email: user.email,
                    accessLevelName: tokenPayload.accessLevelName,
                    accessLevel: tokenPayload.accessLevel,
                    organizationId: tokenPayload.organizationId,
                    organizationType: tokenPayload.organizationType,
                },
            };
        }
        catch (error) {
            console.error("Registration error:", error);
            if (error.code === 11000) {
                this.setStatus(400);
                throw new Error("User with this email already exists");
            }
            if (error.message.includes("already exists")) {
                throw error;
            }
            this.setStatus(500);
            throw new Error("Registration failed");
        }
    }
    /**
     * Refresh access token using refresh token
     */
    async refreshToken(body) {
        try {
            const { refreshToken, accessToken } = body;
            if (!refreshToken) {
                this.setStatus(401);
                throw new Error("Refresh token is required");
            }
            // Blacklist the old access token
            if (accessToken) {
                const oldTokenData = (0, jwtUtils_1.decodeToken)(accessToken);
                if (oldTokenData?.jti && oldTokenData?.exp) {
                    await BlacklistedToken_1.default.create({
                        jti: oldTokenData.jti,
                        expiresAt: new Date(oldTokenData.exp * 1000),
                    }).catch(() => { }); // Ignore duplicate jti errors
                }
            }
            const decoded = (0, jwtUtils_1.verifyRefreshToken)(refreshToken);
            const user = await User_1.default.findById(decoded.id);
            if (!user) {
                this.setStatus(401);
                throw new Error("User not found");
            }
            if (!user.isActive) {
                this.setStatus(401);
                throw new Error("Account is inactive");
            }
            // Re-populate enriched payload for new tokens
            const tokenPayload = await buildTokenPayload(user);
            const tokens = (0, jwtUtils_1.generateTokenPair)(tokenPayload);
            this.setStatus(200);
            return tokens;
        }
        catch (error) {
            console.error("Token refresh error:", error);
            const errorMessage = error.message || "Token refresh failed";
            this.setStatus(401);
            throw new Error(errorMessage);
        }
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "Login successful"),
    (0, tsoa_1.Response)("401", "Invalid credentials"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Post)("login"),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("201", "User registered successfully"),
    (0, tsoa_1.Response)("400", "Bad Request"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Post)("register"),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "Token refreshed successfully"),
    (0, tsoa_1.Response)("401", "Invalid or expired refresh token"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Post)("refresh"),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refreshToken", null);
exports.AuthController = AuthController = __decorate([
    (0, tsoa_1.Route)("auth"),
    (0, tsoa_1.Tags)("Auth")
], AuthController);
