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
exports.SystemConfigController = void 0;
const tsoa_1 = require("tsoa");
const SystemConfigService_1 = require("../services/SystemConfigService");
let SystemConfigController = class SystemConfigController extends tsoa_1.Controller {
    async get() {
        try {
            this.setStatus(200);
            return await new SystemConfigService_1.SystemConfigService().get();
        }
        catch (error) {
            this.setStatus(500);
            throw error;
        }
    }
    async upsert(body) {
        try {
            this.setStatus(200);
            return await new SystemConfigService_1.SystemConfigService().upsert(body);
        }
        catch (error) {
            this.setStatus(500);
            throw error;
        }
    }
};
exports.SystemConfigController = SystemConfigController;
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "Config"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Get)(""),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SystemConfigController.prototype, "get", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "Updated"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Put)(""),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SystemConfigController.prototype, "upsert", null);
exports.SystemConfigController = SystemConfigController = __decorate([
    (0, tsoa_1.Route)("config"),
    (0, tsoa_1.Tags)("System - Config"),
    (0, tsoa_1.Security)("jwt", ["master"])
], SystemConfigController);
