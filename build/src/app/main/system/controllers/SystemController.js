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
exports.SystemController = void 0;
const tsoa_1 = require("tsoa");
const SystemService_1 = require("../services/SystemService");
let SystemController = class SystemController extends tsoa_1.Controller {
    /**
     * Get system bundle - languages, labels, and config resolved to the requested language.
     * @param lang Language code (e.g., "en-US", "pt-BR"). Defaults to "en-US".
     */
    async getSystemBundle(lang) {
        try {
            this.setStatus(200);
            return await new SystemService_1.SystemService().getBundle(lang || "en-US");
        }
        catch (error) {
            this.setStatus(500);
            throw error;
        }
    }
};
exports.SystemController = SystemController;
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "System Bundle"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Get)(""),
    __param(0, (0, tsoa_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SystemController.prototype, "getSystemBundle", null);
exports.SystemController = SystemController = __decorate([
    (0, tsoa_1.Route)("system"),
    (0, tsoa_1.Tags)("System")
], SystemController);
