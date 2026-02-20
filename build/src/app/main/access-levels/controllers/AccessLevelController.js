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
exports.AccessLevelController = void 0;
const tsoa_1 = require("tsoa");
const AccessLevelService_1 = require("../services/AccessLevelService");
let AccessLevelController = class AccessLevelController extends tsoa_1.Controller {
    async getAll() {
        try {
            this.setStatus(200);
            return await new AccessLevelService_1.AccessLevelService().getAll();
        }
        catch (error) {
            this.setStatus(500);
            throw error;
        }
    }
    async getById(id) {
        try {
            const accessLevel = await new AccessLevelService_1.AccessLevelService().getById(id);
            if (!accessLevel) {
                this.setStatus(404);
                throw new Error("Access level not found");
            }
            this.setStatus(200);
            return accessLevel;
        }
        catch (error) {
            if (error.message === "Access level not found") {
                throw error;
            }
            this.setStatus(500);
            throw error;
        }
    }
    async create(body) {
        try {
            this.setStatus(201);
            const created = await new AccessLevelService_1.AccessLevelService().create(body);
            return { id: String(created._id) };
        }
        catch (error) {
            if (error.code === 11000) {
                this.setStatus(400);
                throw new Error("Access level with this name or level already exists");
            }
            this.setStatus(500);
            throw error;
        }
    }
    async update(id, body) {
        try {
            this.setStatus(200);
            await new AccessLevelService_1.AccessLevelService().update(id, body);
            return;
        }
        catch (error) {
            this.setStatus(500);
            throw error;
        }
    }
    async delete(id) {
        try {
            this.setStatus(200);
            await new AccessLevelService_1.AccessLevelService().delete(id);
            return;
        }
        catch (error) {
            if (error.message === "Cannot delete system access level") {
                this.setStatus(400);
                throw error;
            }
            this.setStatus(500);
            throw error;
        }
    }
};
exports.AccessLevelController = AccessLevelController;
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "List"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Get)(""),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AccessLevelController.prototype, "getAll", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "Access Level"),
    (0, tsoa_1.Response)("404", "Not Found"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Get)("{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AccessLevelController.prototype, "getById", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("201", "Created"),
    (0, tsoa_1.Response)("400", "Bad Request"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Post)(""),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AccessLevelController.prototype, "create", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "Updated"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Put)("{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AccessLevelController.prototype, "update", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "Deleted"),
    (0, tsoa_1.Response)("400", "Bad Request"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Delete)("{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AccessLevelController.prototype, "delete", null);
exports.AccessLevelController = AccessLevelController = __decorate([
    (0, tsoa_1.Route)("access-levels"),
    (0, tsoa_1.Tags)("Access Level"),
    (0, tsoa_1.Security)("jwt", ["master"])
], AccessLevelController);
