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
exports.SubscriptionController = void 0;
const tsoa_1 = require("tsoa");
const SubscriptionService_1 = require("../services/SubscriptionService");
let SubscriptionController = class SubscriptionController extends tsoa_1.Controller {
    async getAll() {
        try {
            this.setStatus(200);
            return await new SubscriptionService_1.SubscriptionService().getAll();
        }
        catch (error) {
            this.setStatus(500);
            throw error;
        }
    }
    async getByOrganization(organizationId) {
        try {
            this.setStatus(200);
            return await new SubscriptionService_1.SubscriptionService().getByOrganization(organizationId);
        }
        catch (error) {
            this.setStatus(500);
            throw error;
        }
    }
    async getById(id) {
        try {
            const sub = await new SubscriptionService_1.SubscriptionService().getById(id);
            if (!sub) {
                this.setStatus(404);
                throw new Error("Subscription not found");
            }
            this.setStatus(200);
            return sub;
        }
        catch (error) {
            if (error.message === "Subscription not found") {
                throw error;
            }
            this.setStatus(500);
            throw error;
        }
    }
    async create(body) {
        try {
            this.setStatus(201);
            const created = await new SubscriptionService_1.SubscriptionService().create(body);
            return { id: String(created._id) };
        }
        catch (error) {
            this.setStatus(500);
            throw error;
        }
    }
    async update(id, body) {
        try {
            this.setStatus(200);
            await new SubscriptionService_1.SubscriptionService().update(id, body);
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
            await new SubscriptionService_1.SubscriptionService().delete(id);
            return;
        }
        catch (error) {
            this.setStatus(500);
            throw error;
        }
    }
    async validateSubscription(organizationId, module) {
        try {
            this.setStatus(200);
            const result = await new SubscriptionService_1.SubscriptionService().validateSubscription(organizationId, module);
            return { valid: result.valid, reason: result.reason };
        }
        catch (error) {
            this.setStatus(500);
            throw error;
        }
    }
};
exports.SubscriptionController = SubscriptionController;
__decorate([
    (0, tsoa_1.Security)("jwt", ["master"]),
    (0, tsoa_1.SuccessResponse)("200", "List"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Get)(""),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "getAll", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "Subscriptions"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Get)("organization/{organizationId}"),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "getByOrganization", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "Subscription"),
    (0, tsoa_1.Response)("404", "Not Found"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Get)("{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "getById", null);
__decorate([
    (0, tsoa_1.Security)("jwt", ["admin"]),
    (0, tsoa_1.SuccessResponse)("201", "Created"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Post)(""),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "create", null);
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
], SubscriptionController.prototype, "update", null);
__decorate([
    (0, tsoa_1.Security)("jwt", ["master"]),
    (0, tsoa_1.SuccessResponse)("200", "Deleted"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Delete)("{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "delete", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "Validation Result"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Get)("validate/{organizationId}/{module}"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "validateSubscription", null);
exports.SubscriptionController = SubscriptionController = __decorate([
    (0, tsoa_1.Route)("subscriptions"),
    (0, tsoa_1.Tags)("Subscription"),
    (0, tsoa_1.Security)("jwt")
], SubscriptionController);
