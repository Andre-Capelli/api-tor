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
exports.UserController = void 0;
const tsoa_1 = require("tsoa");
const UserService_1 = require("../services/UserService");
const scopeUtils_1 = require("@core/utils/scopeUtils");
let UserController = class UserController extends tsoa_1.Controller {
    async getUsers(req) {
        try {
            this.setStatus(200);
            const scopeFilter = await (0, scopeUtils_1.buildOrgScopeFilter)(req.user);
            return await new UserService_1.UserService().getUsers(scopeFilter);
        }
        catch (error) {
            this.setStatus(500);
            throw error;
        }
    }
    async getUser(id) {
        try {
            const user = await new UserService_1.UserService().getUser(id);
            if (!user) {
                this.setStatus(404);
                throw new Error("User not found");
            }
            this.setStatus(200);
            return user;
        }
        catch (error) {
            if (error.message === "User not found") {
                throw error;
            }
            this.setStatus(500);
            throw error;
        }
    }
    async createUser(body) {
        try {
            this.setStatus(201);
            const created = await new UserService_1.UserService().createUser(body);
            return { id: String(created._id) };
        }
        catch (error) {
            if (error.code === 11000) {
                this.setStatus(400);
                throw new Error("User with this email already exists");
            }
            this.setStatus(500);
            throw error;
        }
    }
    async upsertUser(id, body) {
        try {
            this.setStatus(200);
            await new UserService_1.UserService().upsertUser(id, body);
            return;
        }
        catch (error) {
            this.setStatus(500);
            throw error;
        }
    }
    async deleteUser(id) {
        try {
            this.setStatus(200);
            await new UserService_1.UserService().deleteUser(id);
            return;
        }
        catch (error) {
            this.setStatus(500);
            throw error;
        }
    }
};
exports.UserController = UserController;
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "List"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Get)(""),
    __param(0, (0, tsoa_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUsers", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "User"),
    (0, tsoa_1.Response)("404", "Not Found"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Get)("{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUser", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("201", "Created"),
    (0, tsoa_1.Response)("400", "Bad Request"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Post)(""),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "Updated"),
    (0, tsoa_1.Response)("400", "Bad Request"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Put)("{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "upsertUser", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "Deleted"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Delete)("{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUser", null);
exports.UserController = UserController = __decorate([
    (0, tsoa_1.Route)("users"),
    (0, tsoa_1.Tags)("User"),
    (0, tsoa_1.Security)("jwt", ["admin"])
], UserController);
