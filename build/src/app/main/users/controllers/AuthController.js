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
const jwtUtils_1 = require("../../../core/utils/jwtUtils");
let AuthController = class AuthController extends tsoa_1.Controller {
    /**
     * User login - Generate JWT tokens
     */
    async login(body) {
        try {
            const { email, password } = body;
            // Find user and include password field
            const user = await User_1.default.findOne({ email }).select("+password");
            if (!user) {
                this.setStatus(401);
                throw new Error("Invalid email or password");
            }
            // Check if user is active
            if (!user.isActive) {
                this.setStatus(401);
                throw new Error("Account is inactive");
            }
            // Verify password
            const isPasswordValid = await user.comparePassword(password);
            if (!isPasswordValid) {
                this.setStatus(401);
                throw new Error("Invalid email or password");
            }
            // Generate JWT tokens
            const tokens = (0, jwtUtils_1.generateTokenPair)({
                id: user._id.toString(),
                email: user.email,
                name: user.name,
                role: user.role || "user",
            });
            this.setStatus(200);
            return {
                ...tokens,
                user: {
                    id: user._id.toString(),
                    name: user.name,
                    email: user.email,
                    role: user.role || "user",
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
            const { name, email, password, role } = body;
            // Check if user already exists
            const existingUser = await User_1.default.findOne({ email });
            if (existingUser) {
                this.setStatus(400);
                throw new Error("User with this email already exists");
            }
            // Create new user (password will be hashed automatically by pre-save hook)
            const user = await User_1.default.create({
                name,
                email,
                password,
                role: role || "user",
                isActive: true,
            });
            // Generate JWT tokens
            const tokens = (0, jwtUtils_1.generateTokenPair)({
                id: user._id.toString(),
                email: user.email,
                name: user.name,
                role: user.role || "user",
            });
            this.setStatus(201);
            return {
                ...tokens,
                user: {
                    id: user._id.toString(),
                    name: user.name,
                    email: user.email,
                    role: user.role || "user",
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
            const { refreshToken } = body;
            if (!refreshToken) {
                this.setStatus(401);
                throw new Error("Refresh token is required");
            }
            // Verify refresh token
            const decoded = (0, jwtUtils_1.verifyRefreshToken)(refreshToken);
            // Verify user still exists and is active
            const user = await User_1.default.findById(decoded.id);
            if (!user) {
                this.setStatus(401);
                throw new Error("User not found");
            }
            if (!user.isActive) {
                this.setStatus(401);
                throw new Error("Account is inactive");
            }
            // Generate new token pair
            const tokens = (0, jwtUtils_1.generateTokenPair)({
                id: user._id.toString(),
                email: user.email,
                name: user.name,
                role: user.role || "user",
            });
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
    (0, tsoa_1.Tags)("Authentication")
], AuthController);
