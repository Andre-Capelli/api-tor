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
exports.MachineController = void 0;
const tsoa_1 = require("tsoa");
const MachineService_1 = require("../services/MachineService");
const scopeUtils_1 = require("@core/utils/scopeUtils");
let MachineController = class MachineController extends tsoa_1.Controller {
    /**
     * Get all registered machines (scoped to user's organization)
     */
    async getMachines(req) {
        try {
            this.setStatus(200);
            const scopeFilter = await (0, scopeUtils_1.buildOrgScopeFilter)(req.user);
            return await new MachineService_1.MachineService().getMachines(scopeFilter);
        }
        catch (error) {
            this.setStatus(500);
            throw error;
        }
    }
    /**
     * Get a specific machine by database ID
     */
    async getMachine(id) {
        try {
            const machine = await new MachineService_1.MachineService().getMachine(id);
            if (!machine) {
                this.setStatus(404);
                throw new Error("Machine not found");
            }
            this.setStatus(200);
            return machine;
        }
        catch (error) {
            if (error.message === "Machine not found") {
                throw error;
            }
            this.setStatus(500);
            throw error;
        }
    }
    /**
     * Get a machine by machineId (client-generated ID)
     */
    async getMachineByMachineId(machineId) {
        try {
            const machine = await new MachineService_1.MachineService().getMachineByMachineId(machineId);
            if (!machine) {
                this.setStatus(404);
                throw new Error("Machine not found");
            }
            this.setStatus(200);
            return machine;
        }
        catch (error) {
            if (error.message === "Machine not found") {
                throw error;
            }
            this.setStatus(500);
            throw error;
        }
    }
    /**
     * Register a new machine
     */
    async createMachine(body) {
        try {
            this.setStatus(201);
            const created = await new MachineService_1.MachineService().createMachine(body);
            return { id: String(created._id) };
        }
        catch (error) {
            if (error.code === 11000) {
                this.setStatus(400);
                throw new Error("Machine with this machineId already exists");
            }
            this.setStatus(500);
            throw error;
        }
    }
    /**
     * Update a machine
     */
    async upsertMachine(id, body) {
        try {
            this.setStatus(200);
            await new MachineService_1.MachineService().upsertMachine(id, body);
            return;
        }
        catch (error) {
            this.setStatus(500);
            throw error;
        }
    }
    /**
     * Delete a machine
     */
    async deleteMachine(id) {
        try {
            this.setStatus(200);
            await new MachineService_1.MachineService().deleteMachine(id);
            return;
        }
        catch (error) {
            this.setStatus(500);
            throw error;
        }
    }
};
exports.MachineController = MachineController;
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "List"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Get)(""),
    __param(0, (0, tsoa_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MachineController.prototype, "getMachines", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "Machine"),
    (0, tsoa_1.Response)("404", "Not Found"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Get)("{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MachineController.prototype, "getMachine", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "Machine"),
    (0, tsoa_1.Response)("404", "Not Found"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Get)("by-machine-id/{machineId}"),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MachineController.prototype, "getMachineByMachineId", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("201", "Created"),
    (0, tsoa_1.Response)("400", "Bad Request"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Post)(""),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MachineController.prototype, "createMachine", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "Updated"),
    (0, tsoa_1.Response)("400", "Bad Request"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Put)("{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], MachineController.prototype, "upsertMachine", null);
__decorate([
    (0, tsoa_1.SuccessResponse)("200", "Deleted"),
    (0, tsoa_1.Response)("500", "Internal Server Error"),
    (0, tsoa_1.Delete)("{id}"),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MachineController.prototype, "deleteMachine", null);
exports.MachineController = MachineController = __decorate([
    (0, tsoa_1.Route)("machines"),
    (0, tsoa_1.Tags)("Machines"),
    (0, tsoa_1.Security)("jwt")
], MachineController);
