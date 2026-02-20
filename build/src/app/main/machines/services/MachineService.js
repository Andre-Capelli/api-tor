"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MachineService = void 0;
const Machine_1 = __importDefault(require("../Machine"));
class MachineService {
    async getMachines(filter) {
        return await Machine_1.default.find(filter || {});
    }
    async getMachine(id) {
        return await Machine_1.default.findById(id);
    }
    async getMachineByMachineId(machineId) {
        return await Machine_1.default.findOne({ machineId });
    }
    async createMachine(data) {
        return await Machine_1.default.create(data);
    }
    async upsertMachine(id, data) {
        await Machine_1.default.updateOne({ _id: id }, data, { upsert: true });
    }
    async deleteMachine(id) {
        await Machine_1.default.deleteOne({ _id: id });
    }
}
exports.MachineService = MachineService;
