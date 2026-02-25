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
exports.CustomFieldController = void 0;
const tsoa_1 = require("tsoa");
const CustomFieldService_1 = require("../services/CustomFieldService");
let CustomFieldController = class CustomFieldController extends tsoa_1.Controller {
    async getAll(organizationId) {
        try {
            this.setStatus(200);
            return await new CustomFieldService_1.CustomFieldService().getAll(organizationId);
        }
        catch (error) {
            this.setStatus(500);
            throw error;
        }
    }
    async getById(id) {
        try {
            const field = await new CustomFieldService_1.CustomFieldService().getById(id);
            if (!field) {
                this.setStatus(404);
                throw new Error("Custom field not found");
            }
            this.setStatus(200);
            return field;
        }
        catch (error) {
            if (error.message === "Custom field not found") {
                throw error;
            }
            this.setStatus(500);
            throw error;
        }
    }
    async getByTarget(targetCollection, organizationId) {
        try {
            this.setStatus(200);
            return await new CustomFieldService_1.CustomFieldService().getByTarget(targetCollection, organizationId);
        }
        catch (error) {
            this.setStatus(500);
            throw error;
        }
    }
    async create(body) {
        try {
            this.setStatus(201);
            const created = await new CustomFieldService_1.CustomFieldService().create(body);
            return { id: String(created._id) };
        }
        catch (error) {
            if (error.code === 11000) {
                this.setStatus(400);
                throw new Error("Custom field with this name already exists for this collection");
            }
            this.setStatus(500);
            throw error;
        }
    }
    async update(id, body) {
        try {
            this.setStatus(200);
            await new CustomFieldService_1.CustomFieldService().update(id, body);
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
            await new CustomFieldService_1.CustomFieldService().delete(id);
            return;
        }
        catch (error) {
            this.setStatus(500);
            throw error;
        }
    }
    // --- Field Values ---
    async getValues(targetCollection, targetDocumentId) {
        try {
            this.setStatus(200);
            return await new CustomFieldService_1.CustomFieldService().getValues(targetCollection, targetDocumentId);
        }
        catch (error) {
            this.setStatus(500);
            throw error;
        }
    }
    async setValue(body) {
        try {
            this.setStatus(201);
            const result = await new CustomFieldService_1.CustomFieldService().setValue(body);
            return { id: String(result._id) };
        }
        catch (error) {
            this.setStatus(500);
            throw error;
        }
    }
    async setValues(body) {
        try {
            this.setStatus(201);
            const results = await new CustomFieldService_1.CustomFieldService().setValues(body);
            return { count: results.length };
        }
        catch (error) {
            this.setStatus(500);
            throw error;
        }
    }
    async deleteValue(id) {
        try {
            this.setStatus(200);
            await new CustomFieldService_1.CustomFieldService().deleteValue(id);
            return;
        }
        catch (error) {
            this.setStatus(500);
            throw error;
        }
    }
};
exports.CustomFieldController = CustomFieldController;
__decorate([
    (0, tsoa_1.Security)("jwt", ["admin"]),
    (0, tsoa_1.SuccessResponse)("200", "List"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Get)(""),
    __param(0, (0, tsoa_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CustomFieldController.prototype, "getAll", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "Custom Field"),
    (0, tsoa_1.Response)("404", "Not Found"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Get)("{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CustomFieldController.prototype, "getById", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "Fields for collection"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Get)("target/{targetCollection}"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], CustomFieldController.prototype, "getByTarget", null);
__decorate([
    (0, tsoa_1.Security)("jwt", ["admin"]),
    (0, tsoa_1.SuccessResponse)("201", "Created"),
    (0, tsoa_1.Response)("400", "Bad Request"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Post)(""),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CustomFieldController.prototype, "create", null);
__decorate([
    (0, tsoa_1.Security)("jwt", ["admin"]),
    (0, tsoa_1.SuccessResponse)("200", "Updated"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Put)("{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CustomFieldController.prototype, "update", null);
__decorate([
    (0, tsoa_1.Security)("jwt", ["admin"]),
    (0, tsoa_1.SuccessResponse)("200", "Deleted"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Delete)("{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CustomFieldController.prototype, "delete", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "Values"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Get)("values/{targetCollection}/{targetDocumentId}"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], CustomFieldController.prototype, "getValues", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("201", "Value Set"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Post)("values"),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CustomFieldController.prototype, "setValue", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("201", "Values Set"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Post)("values/batch"),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], CustomFieldController.prototype, "setValues", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "Deleted"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Delete)("values/{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CustomFieldController.prototype, "deleteValue", null);
exports.CustomFieldController = CustomFieldController = __decorate([
    (0, tsoa_1.Route)("custom-fields"),
    (0, tsoa_1.Tags)("Admin - Custom Fields"),
    (0, tsoa_1.Security)("jwt")
], CustomFieldController);
