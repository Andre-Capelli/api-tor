"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MachineSnapshotService = void 0;
const MachineSnapshot_1 = __importDefault(require("../models/MachineSnapshot"));
class MachineSnapshotService {
    async getSnapshotsByMachineId(machineId, limit = 100) {
        return await MachineSnapshot_1.default.find({ machineId })
            .sort({ timestamp: -1 })
            .limit(limit);
    }
    async getSnapshot(id) {
        return await MachineSnapshot_1.default.findById(id);
    }
    async getLatestSnapshot(machineId) {
        return await MachineSnapshot_1.default.findOne({ machineId }).sort({ timestamp: -1 });
    }
    async createSnapshot(machineId, data) {
        return await MachineSnapshot_1.default.create({
            machineId,
            ...data,
        });
    }
    async createSnapshotBatch(machineId, dataArray) {
        const records = dataArray.map((data) => ({
            machineId,
            ...data,
        }));
        return await MachineSnapshot_1.default.insertMany(records);
    }
    async getSnapshotsByDateRange(machineId, startDate, endDate) {
        return await MachineSnapshot_1.default.find({
            machineId,
            timestamp: { $gte: startDate, $lte: endDate },
        }).sort({ timestamp: -1 });
    }
    async deleteSnapshot(id) {
        await MachineSnapshot_1.default.deleteOne({ _id: id });
    }
    async deleteSnapshotsByMachineId(machineId) {
        const result = await MachineSnapshot_1.default.deleteMany({ machineId });
        return result.deletedCount || 0;
    }
}
exports.MachineSnapshotService = MachineSnapshotService;
