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
exports.NetworkInformationController = void 0;
const tsoa_1 = require("tsoa");
const NetworkInformationService_1 = require("../services/NetworkInformationService");
let NetworkInformationController = class NetworkInformationController extends tsoa_1.Controller {
    async getNetworkInformationByMachineId(machineId, limit) {
        try {
            this.setStatus(200);
            return await new NetworkInformationService_1.NetworkInformationService().getNetworkInformationByMachineId(machineId, limit || 100);
        }
        catch (error) {
            this.setStatus(500);
            throw error;
        }
    }
    async getLatestNetworkInformation(machineId) {
        try {
            const data = await new NetworkInformationService_1.NetworkInformationService().getLatestNetworkInformation(machineId);
            if (!data) {
                this.setStatus(404);
                throw new Error("No network information found for this machine");
            }
            this.setStatus(200);
            return data;
        }
        catch (error) {
            if (error.message.includes("No network information found")) {
                throw error;
            }
            this.setStatus(500);
            throw error;
        }
    }
    async createNetworkInformation(machineId, body) {
        try {
            this.setStatus(201);
            const created = await new NetworkInformationService_1.NetworkInformationService().createNetworkInformation(machineId, body);
            return { id: String(created._id) };
        }
        catch (error) {
            this.setStatus(500);
            throw error;
        }
    }
    async createNetworkInformationBatch(machineId, body) {
        try {
            this.setStatus(201);
            const created = await new NetworkInformationService_1.NetworkInformationService().createNetworkInformationBatch(machineId, body);
            return { count: created.length };
        }
        catch (error) {
            this.setStatus(500);
            throw error;
        }
    }
    async deleteNetworkInformation(id) {
        try {
            this.setStatus(200);
            await new NetworkInformationService_1.NetworkInformationService().deleteNetworkInformation(id);
            return;
        }
        catch (error) {
            this.setStatus(500);
            throw error;
        }
    }
};
exports.NetworkInformationController = NetworkInformationController;
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "List"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Get)("machine/{machineId}"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], NetworkInformationController.prototype, "getNetworkInformationByMachineId", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "Latest Network Information"),
    (0, tsoa_1.Response)("404", "Not Found"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Get)("machine/{machineId}/latest"),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NetworkInformationController.prototype, "getLatestNetworkInformation", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("201", "Created"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Post)("machine/{machineId}"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], NetworkInformationController.prototype, "createNetworkInformation", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("201", "Created"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Post)("machine/{machineId}/batch"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array]),
    __metadata("design:returntype", Promise)
], NetworkInformationController.prototype, "createNetworkInformationBatch", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "Deleted"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Delete)("{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NetworkInformationController.prototype, "deleteNetworkInformation", null);
exports.NetworkInformationController = NetworkInformationController = __decorate([
    (0, tsoa_1.Route)("network-information"),
    (0, tsoa_1.Tags)("Network Information"),
    (0, tsoa_1.Security)("jwt")
], NetworkInformationController);
