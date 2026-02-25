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
exports.StorageInformationController = void 0;
const tsoa_1 = require("tsoa");
const StorageInformationService_1 = require("../services/StorageInformationService");
let StorageInformationController = class StorageInformationController extends tsoa_1.Controller {
    async getStorageInformationByMachineId(machineId, limit) {
        try {
            this.setStatus(200);
            return await new StorageInformationService_1.StorageInformationService().getStorageInformationByMachineId(machineId, limit || 100);
        }
        catch (error) {
            this.setStatus(500);
            throw error;
        }
    }
    async getStorageInformation(id) {
        try {
            const data = await new StorageInformationService_1.StorageInformationService().getStorageInformation(id);
            if (!data) {
                this.setStatus(404);
                throw new Error("Storage information not found");
            }
            this.setStatus(200);
            return data;
        }
        catch (error) {
            if (error.message === "Storage information not found") {
                throw error;
            }
            this.setStatus(500);
            throw error;
        }
    }
    async getLatestStorageInformation(machineId) {
        try {
            const data = await new StorageInformationService_1.StorageInformationService().getLatestStorageInformation(machineId);
            if (!data) {
                this.setStatus(404);
                throw new Error("No storage information found for this machine");
            }
            this.setStatus(200);
            return data;
        }
        catch (error) {
            if (error.message.includes("No storage information found")) {
                throw error;
            }
            this.setStatus(500);
            throw error;
        }
    }
    async createStorageInformation(machineId, body) {
        try {
            this.setStatus(201);
            const created = await new StorageInformationService_1.StorageInformationService().createStorageInformation(machineId, body);
            return { id: String(created._id) };
        }
        catch (error) {
            this.setStatus(500);
            throw error;
        }
    }
    async createStorageInformationBatch(machineId, body) {
        try {
            this.setStatus(201);
            const created = await new StorageInformationService_1.StorageInformationService().createStorageInformationBatch(machineId, body);
            return { count: created.length };
        }
        catch (error) {
            this.setStatus(500);
            throw error;
        }
    }
    async getStorageInformationByDateRange(machineId, startDate, endDate) {
        try {
            this.setStatus(200);
            return await new StorageInformationService_1.StorageInformationService().getStorageInformationByDateRange(machineId, new Date(startDate), new Date(endDate));
        }
        catch (error) {
            this.setStatus(500);
            throw error;
        }
    }
    async deleteStorageInformation(id) {
        try {
            this.setStatus(200);
            await new StorageInformationService_1.StorageInformationService().deleteStorageInformation(id);
            return;
        }
        catch (error) {
            this.setStatus(500);
            throw error;
        }
    }
    async deleteStorageInformationByMachineId(machineId) {
        try {
            this.setStatus(200);
            const count = await new StorageInformationService_1.StorageInformationService().deleteStorageInformationByMachineId(machineId);
            return { deletedCount: count };
        }
        catch (error) {
            this.setStatus(500);
            throw error;
        }
    }
};
exports.StorageInformationController = StorageInformationController;
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "List"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Get)("machine/{machineId}"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], StorageInformationController.prototype, "getStorageInformationByMachineId", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "Storage Information"),
    (0, tsoa_1.Response)("404", "Not Found"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Get)("{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StorageInformationController.prototype, "getStorageInformation", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "Latest Storage Information"),
    (0, tsoa_1.Response)("404", "Not Found"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Get)("machine/{machineId}/latest"),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StorageInformationController.prototype, "getLatestStorageInformation", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("201", "Created"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Post)("machine/{machineId}"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], StorageInformationController.prototype, "createStorageInformation", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("201", "Created"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Post)("machine/{machineId}/batch"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array]),
    __metadata("design:returntype", Promise)
], StorageInformationController.prototype, "createStorageInformationBatch", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "Storage Information"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Get)("machine/{machineId}/range"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Query)()),
    __param(2, (0, tsoa_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], StorageInformationController.prototype, "getStorageInformationByDateRange", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "Deleted"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Delete)("{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StorageInformationController.prototype, "deleteStorageInformation", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "Deleted"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Delete)("machine/{machineId}"),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StorageInformationController.prototype, "deleteStorageInformationByMachineId", null);
exports.StorageInformationController = StorageInformationController = __decorate([
    (0, tsoa_1.Route)("monitoring/storage-information"),
    (0, tsoa_1.Tags)("Monitoring - Storage"),
    (0, tsoa_1.Security)("jwt")
], StorageInformationController);
