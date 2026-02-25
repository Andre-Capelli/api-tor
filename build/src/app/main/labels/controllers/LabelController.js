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
exports.LabelController = void 0;
const tsoa_1 = require("tsoa");
const LabelService_1 = require("../services/LabelService");
let LabelController = class LabelController extends tsoa_1.Controller {
    async getAll() {
        try {
            this.setStatus(200);
            return await new LabelService_1.LabelService().getAll();
        }
        catch (error) {
            this.setStatus(500);
            throw error;
        }
    }
    async getById(id) {
        try {
            const label = await new LabelService_1.LabelService().getById(id);
            if (!label) {
                this.setStatus(404);
                throw new Error("Label not found");
            }
            this.setStatus(200);
            return label;
        }
        catch (error) {
            if (error.message === "Label not found")
                throw error;
            this.setStatus(500);
            throw error;
        }
    }
    async create(body) {
        try {
            this.setStatus(201);
            const created = await new LabelService_1.LabelService().create(body);
            return { id: String(created._id) };
        }
        catch (error) {
            if (error.code === 11000) {
                this.setStatus(400);
                throw new Error("Label with this key already exists");
            }
            this.setStatus(500);
            throw error;
        }
    }
    async createBatch(body) {
        try {
            this.setStatus(201);
            const created = await new LabelService_1.LabelService().createBatch(body.items);
            return { count: created.length };
        }
        catch (error) {
            this.setStatus(500);
            throw error;
        }
    }
    async update(id, body) {
        try {
            this.setStatus(200);
            await new LabelService_1.LabelService().update(id, body);
        }
        catch (error) {
            this.setStatus(500);
            throw error;
        }
    }
    async upsertBatch(body) {
        try {
            this.setStatus(200);
            const count = await new LabelService_1.LabelService().upsertBatch(body.items);
            return { count };
        }
        catch (error) {
            this.setStatus(500);
            throw error;
        }
    }
    async delete(id) {
        try {
            this.setStatus(200);
            await new LabelService_1.LabelService().delete(id);
        }
        catch (error) {
            this.setStatus(500);
            throw error;
        }
    }
};
exports.LabelController = LabelController;
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "List"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Get)(""),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LabelController.prototype, "getAll", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "Label"),
    (0, tsoa_1.Response)("404", "Not Found"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Get)("{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LabelController.prototype, "getById", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("201", "Created"),
    (0, tsoa_1.Response)("400", "Bad Request"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Post)(""),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LabelController.prototype, "create", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("201", "Batch Created"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Post)("batch"),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LabelController.prototype, "createBatch", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "Updated"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Put)("{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], LabelController.prototype, "update", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "Batch Upserted"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Put)("batch"),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LabelController.prototype, "upsertBatch", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "Deleted"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Delete)("{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LabelController.prototype, "delete", null);
exports.LabelController = LabelController = __decorate([
    (0, tsoa_1.Route)("labels"),
    (0, tsoa_1.Tags)("System - Labels"),
    (0, tsoa_1.Security)("jwt", ["master"])
], LabelController);
