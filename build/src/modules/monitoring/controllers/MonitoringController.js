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
exports.MonitoringController = void 0;
const tsoa_1 = require("tsoa");
const MonitoringService_1 = require("../services/MonitoringService");
let MonitoringController = class MonitoringController extends tsoa_1.Controller {
    /**
     * Receive full machine data snapshot (main endpoint for client apps).
     * Validates subscription, allowed modules, and machine limits.
     */
    async receiveSnapshot(body, req) {
        try {
            this.setStatus(201);
            const organizationId = req.user?.organizationId;
            const result = await new MonitoringService_1.MonitoringService().processFullMachineData(body, organizationId);
            return {
                success: result.success,
                machineId: body.machineId,
                recordsCreated: result.recordsCreated,
            };
        }
        catch (error) {
            if (error.message.includes("Snapshot rejected")) {
                this.setStatus(403);
                throw error;
            }
            this.setStatus(500);
            throw error;
        }
    }
    /**
     * Get latest snapshot for a machine
     */
    async getLatestSnapshot(machineId) {
        try {
            const snapshot = await new MonitoringService_1.MonitoringService().getLatestSnapshot(machineId);
            if (!snapshot) {
                this.setStatus(404);
                throw new Error("No snapshots found for this machine");
            }
            this.setStatus(200);
            return snapshot;
        }
        catch (error) {
            if (error.message.includes("No snapshots found")) {
                throw error;
            }
            this.setStatus(500);
            throw error;
        }
    }
    /**
     * Get machine history with optional date range filtering
     */
    async getMachineHistory(machineId, startDate, endDate) {
        try {
            const start = startDate ? new Date(startDate) : undefined;
            const end = endDate ? new Date(endDate) : undefined;
            this.setStatus(200);
            return await new MonitoringService_1.MonitoringService().getMachineHistory(machineId, start, end);
        }
        catch (error) {
            this.setStatus(500);
            throw error;
        }
    }
};
exports.MonitoringController = MonitoringController;
__decorate([
    (0, tsoa_1.SuccessResponse)("201", "Data Processed"),
    (0, tsoa_1.Response)("400", "Bad Request"),
    (0, tsoa_1.Response)("403", "Subscription or plan validation failed"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Post)("snapshot"),
    __param(0, (0, tsoa_1.Body)()),
    __param(1, (0, tsoa_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MonitoringController.prototype, "receiveSnapshot", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "Latest Snapshot"),
    (0, tsoa_1.Response)("404", "Not Found"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Get)("{machineId}/latest"),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MonitoringController.prototype, "getLatestSnapshot", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "Machine History"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Get)("{machineId}/history"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Query)()),
    __param(2, (0, tsoa_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], MonitoringController.prototype, "getMachineHistory", null);
exports.MonitoringController = MonitoringController = __decorate([
    (0, tsoa_1.Route)("monitoring"),
    (0, tsoa_1.Tags)("Monitoring"),
    (0, tsoa_1.Security)("jwt")
], MonitoringController);
