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
exports.CpuInformationController = void 0;
const tsoa_1 = require("tsoa");
const CpuInformationService_1 = require("../services/CpuInformationService");
let CpuInformationController = class CpuInformationController extends tsoa_1.Controller {
    /**
     * Get all CPU information for a machine
     */
    async getCpuInformationByMachineId(machineId, limit) {
        try {
            this.setStatus(200);
            return await new CpuInformationService_1.CpuInformationService().getCpuInformationByMachineId(machineId, limit || 100);
        }
        catch (error) {
            this.setStatus(500);
            throw error;
        }
    }
    /**
     * Get CPU information by ID
     */
    async getCpuInformation(id) {
        try {
            const data = await new CpuInformationService_1.CpuInformationService().getCpuInformation(id);
            if (!data) {
                this.setStatus(404);
                throw new Error("CPU information not found");
            }
            this.setStatus(200);
            return data;
        }
        catch (error) {
            if (error.message === "CPU information not found") {
                throw error;
            }
            this.setStatus(500);
            throw error;
        }
    }
    /**
     * Get latest CPU information for a machine
     */
    async getLatestCpuInformation(machineId) {
        try {
            const data = await new CpuInformationService_1.CpuInformationService().getLatestCpuInformation(machineId);
            if (!data) {
                this.setStatus(404);
                throw new Error("No CPU information found for this machine");
            }
            this.setStatus(200);
            return data;
        }
        catch (error) {
            if (error.message.includes("No CPU information found")) {
                throw error;
            }
            this.setStatus(500);
            throw error;
        }
    }
    /**
     * Create single CPU information record
     */
    async createCpuInformation(machineId, body) {
        try {
            this.setStatus(201);
            const created = await new CpuInformationService_1.CpuInformationService().createCpuInformation(machineId, body);
            return { id: String(created._id) };
        }
        catch (error) {
            this.setStatus(500);
            throw error;
        }
    }
    /**
     * Create multiple CPU information records (batch)
     */
    async createCpuInformationBatch(machineId, body) {
        try {
            this.setStatus(201);
            const created = await new CpuInformationService_1.CpuInformationService().createCpuInformationBatch(machineId, body);
            return { count: created.length };
        }
        catch (error) {
            this.setStatus(500);
            throw error;
        }
    }
    /**
     * Get CPU information by date range
     */
    async getCpuInformationByDateRange(machineId, startDate, endDate) {
        try {
            this.setStatus(200);
            return await new CpuInformationService_1.CpuInformationService().getCpuInformationByDateRange(machineId, new Date(startDate), new Date(endDate));
        }
        catch (error) {
            this.setStatus(500);
            throw error;
        }
    }
    /**
     * Delete CPU information by ID
     */
    async deleteCpuInformation(id) {
        try {
            this.setStatus(200);
            await new CpuInformationService_1.CpuInformationService().deleteCpuInformation(id);
            return;
        }
        catch (error) {
            this.setStatus(500);
            throw error;
        }
    }
    /**
     * Delete all CPU information for a machine
     */
    async deleteCpuInformationByMachineId(machineId) {
        try {
            this.setStatus(200);
            const count = await new CpuInformationService_1.CpuInformationService().deleteCpuInformationByMachineId(machineId);
            return { deletedCount: count };
        }
        catch (error) {
            this.setStatus(500);
            throw error;
        }
    }
};
exports.CpuInformationController = CpuInformationController;
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "List"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Get)("machine/{machineId}"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], CpuInformationController.prototype, "getCpuInformationByMachineId", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "CPU Information"),
    (0, tsoa_1.Response)("404", "Not Found"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Get)("{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CpuInformationController.prototype, "getCpuInformation", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "Latest CPU Information"),
    (0, tsoa_1.Response)("404", "Not Found"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Get)("machine/{machineId}/latest"),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CpuInformationController.prototype, "getLatestCpuInformation", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("201", "Created"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Post)("machine/{machineId}"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CpuInformationController.prototype, "createCpuInformation", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("201", "Created"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Post)("machine/{machineId}/batch"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array]),
    __metadata("design:returntype", Promise)
], CpuInformationController.prototype, "createCpuInformationBatch", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "CPU Information"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Get)("machine/{machineId}/range"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Query)()),
    __param(2, (0, tsoa_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], CpuInformationController.prototype, "getCpuInformationByDateRange", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "Deleted"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Delete)("{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CpuInformationController.prototype, "deleteCpuInformation", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "Deleted"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Delete)("machine/{machineId}"),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CpuInformationController.prototype, "deleteCpuInformationByMachineId", null);
exports.CpuInformationController = CpuInformationController = __decorate([
    (0, tsoa_1.Route)("monitoring/cpu-information"),
    (0, tsoa_1.Tags)("Monitoring - CPU"),
    (0, tsoa_1.Security)("jwt")
], CpuInformationController);
