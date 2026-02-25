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
exports.OrganizationController = void 0;
const tsoa_1 = require("tsoa");
const OrganizationService_1 = require("../services/OrganizationService");
let OrganizationController = class OrganizationController extends tsoa_1.Controller {
    async getAll() {
        try {
            this.setStatus(200);
            return await new OrganizationService_1.OrganizationService().getAll();
        }
        catch (error) {
            this.setStatus(500);
            throw error;
        }
    }
    async getById(id) {
        try {
            const org = await new OrganizationService_1.OrganizationService().getById(id);
            if (!org) {
                this.setStatus(404);
                throw new Error("Organization not found");
            }
            this.setStatus(200);
            return org;
        }
        catch (error) {
            if (error.message === "Organization not found") {
                throw error;
            }
            this.setStatus(500);
            throw error;
        }
    }
    async getCustomersByCompany(companyId) {
        try {
            this.setStatus(200);
            return await new OrganizationService_1.OrganizationService().getCustomersByCompany(companyId);
        }
        catch (error) {
            this.setStatus(500);
            throw error;
        }
    }
    async create(body) {
        try {
            this.setStatus(201);
            const created = await new OrganizationService_1.OrganizationService().create(body);
            return { id: String(created._id) };
        }
        catch (error) {
            if (error.message.includes("must have a parentId")) {
                this.setStatus(400);
                throw error;
            }
            this.setStatus(500);
            throw error;
        }
    }
    async update(id, body) {
        try {
            this.setStatus(200);
            await new OrganizationService_1.OrganizationService().update(id, body);
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
            await new OrganizationService_1.OrganizationService().delete(id);
            return;
        }
        catch (error) {
            if (error.message.includes("Cannot delete")) {
                this.setStatus(400);
                throw error;
            }
            this.setStatus(500);
            throw error;
        }
    }
};
exports.OrganizationController = OrganizationController;
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "List"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Get)(""),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrganizationController.prototype, "getAll", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "Organization"),
    (0, tsoa_1.Response)("404", "Not Found"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Get)("{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrganizationController.prototype, "getById", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "Customers"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Get)("company/{companyId}/customers"),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrganizationController.prototype, "getCustomersByCompany", null);
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
], OrganizationController.prototype, "create", null);
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
], OrganizationController.prototype, "update", null);
__decorate([
    (0, tsoa_1.Security)("jwt", ["master"]),
    (0, tsoa_1.SuccessResponse)("200", "Deleted"),
    (0, tsoa_1.Response)("400", "Bad Request"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Delete)("{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrganizationController.prototype, "delete", null);
exports.OrganizationController = OrganizationController = __decorate([
    (0, tsoa_1.Route)("organizations"),
    (0, tsoa_1.Tags)("Admin - Organizations"),
    (0, tsoa_1.Security)("jwt")
], OrganizationController);
