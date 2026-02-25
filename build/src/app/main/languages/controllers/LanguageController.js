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
exports.LanguageController = void 0;
const tsoa_1 = require("tsoa");
const LanguageService_1 = require("../services/LanguageService");
let LanguageController = class LanguageController extends tsoa_1.Controller {
    async getAll() {
        try {
            this.setStatus(200);
            return await new LanguageService_1.LanguageService().getAll();
        }
        catch (error) {
            this.setStatus(500);
            throw error;
        }
    }
    async getById(id) {
        try {
            const language = await new LanguageService_1.LanguageService().getById(id);
            if (!language) {
                this.setStatus(404);
                throw new Error("Language not found");
            }
            this.setStatus(200);
            return language;
        }
        catch (error) {
            if (error.message === "Language not found")
                throw error;
            this.setStatus(500);
            throw error;
        }
    }
    async create(body) {
        try {
            this.setStatus(201);
            const created = await new LanguageService_1.LanguageService().create(body);
            return { id: String(created._id) };
        }
        catch (error) {
            if (error.code === 11000) {
                this.setStatus(400);
                throw new Error("Language with this code already exists");
            }
            this.setStatus(500);
            throw error;
        }
    }
    async update(id, body) {
        try {
            this.setStatus(200);
            await new LanguageService_1.LanguageService().update(id, body);
        }
        catch (error) {
            this.setStatus(500);
            throw error;
        }
    }
    async delete(id) {
        try {
            this.setStatus(200);
            await new LanguageService_1.LanguageService().delete(id);
        }
        catch (error) {
            this.setStatus(500);
            throw error;
        }
    }
};
exports.LanguageController = LanguageController;
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "List"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Get)(""),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LanguageController.prototype, "getAll", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "Language"),
    (0, tsoa_1.Response)("404", "Not Found"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Get)("{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LanguageController.prototype, "getById", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("201", "Created"),
    (0, tsoa_1.Response)("400", "Bad Request"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Post)(""),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LanguageController.prototype, "create", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "Updated"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Put)("{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], LanguageController.prototype, "update", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "Deleted"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Delete)("{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LanguageController.prototype, "delete", null);
exports.LanguageController = LanguageController = __decorate([
    (0, tsoa_1.Route)("languages"),
    (0, tsoa_1.Tags)("System - Languages"),
    (0, tsoa_1.Security)("jwt", ["master"])
], LanguageController);
