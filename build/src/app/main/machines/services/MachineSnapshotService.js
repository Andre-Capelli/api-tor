"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MachineSnapshotService = void 0;
const MachineSnapshot_1 = __importDefault(require("../MachineSnapshot"));
class MachineSnapshotService {
    /**
     * Get all snapshots for a specific machine
     */
    async getSnapshotsByMachineId(machineId, limit = 100) {
        return await MachineSnapshot_1.default.find({ machineId })
            .sort({ timestamp: -1 })
            .limit(limit);
    }
    /**
     * Get snapshot by record ID
     */
    async getSnapshot(id) {
        return await MachineSnapshot_1.default.findById(id);
    }
    /**
     * Get latest snapshot for a machine
     */
    async getLatestSnapshot(machineId) {
        return await MachineSnapshot_1.default.findOne({ machineId }).sort({ timestamp: -1 });
    }
    /**
     * Create single snapshot
     */
    async createSnapshot(machineId, data) {
        const created = await MachineSnapshot_1.default.create({
            machineId,
            ...data,
        });
        return created;
    }
    /**
     * Create multiple snapshots (batch)
     */
    async createSnapshotBatch(machineId, dataArray) {
        const records = dataArray.map((data) => ({
            machineId,
            ...data,
        }));
        return await MachineSnapshot_1.default.insertMany(records);
    }
    /**
     * Get snapshots within date range
     */
    async getSnapshotsByDateRange(machineId, startDate, endDate) {
        return await MachineSnapshot_1.default.find({
            machineId,
            timestamp: { $gte: startDate, $lte: endDate },
        }).sort({ timestamp: -1 });
    }
    /**
     * Delete snapshot by ID
     */
    async deleteSnapshot(id) {
        await MachineSnapshot_1.default.deleteOne({ _id: id });
    }
    /**
     * Delete all snapshots for a machine
     */
    async deleteSnapshotsByMachineId(machineId) {
        const result = await MachineSnapshot_1.default.deleteMany({ machineId });
        return result.deletedCount || 0;
    }
}
exports.MachineSnapshotService = MachineSnapshotService;
