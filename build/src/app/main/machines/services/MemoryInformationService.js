"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryInformationService = void 0;
const MemoryInformation_1 = __importDefault(require("../MemoryInformation"));
class MemoryInformationService {
    /**
     * Get all memory information records for a specific machine
     */
    async getMemoryInformationByMachineId(machineId, limit = 100) {
        return await MemoryInformation_1.default.find({ machineId })
            .sort({ timestamp: -1 })
            .limit(limit);
    }
    /**
     * Get memory information by record ID
     */
    async getMemoryInformation(id) {
        return await MemoryInformation_1.default.findById(id);
    }
    /**
     * Get latest memory information for a machine
     */
    async getLatestMemoryInformation(machineId) {
        return await MemoryInformation_1.default.findOne({ machineId }).sort({ timestamp: -1 });
    }
    /**
     * Create single memory information record
     */
    async createMemoryInformation(machineId, data) {
        const created = await MemoryInformation_1.default.create({
            machineId,
            ...data,
        });
        return created;
    }
    /**
     * Create multiple memory information records (batch)
     */
    async createMemoryInformationBatch(machineId, dataArray) {
        const records = dataArray.map((data) => ({
            machineId,
            ...data,
        }));
        return await MemoryInformation_1.default.insertMany(records);
    }
    /**
     * Get memory information within date range
     */
    async getMemoryInformationByDateRange(machineId, startDate, endDate) {
        return await MemoryInformation_1.default.find({
            machineId,
            timestamp: { $gte: startDate, $lte: endDate },
        }).sort({ timestamp: -1 });
    }
    /**
     * Delete memory information by ID
     */
    async deleteMemoryInformation(id) {
        await MemoryInformation_1.default.deleteOne({ _id: id });
    }
    /**
     * Delete all memory information for a machine
     */
    async deleteMemoryInformationByMachineId(machineId) {
        const result = await MemoryInformation_1.default.deleteMany({ machineId });
        return result.deletedCount || 0;
    }
}
exports.MemoryInformationService = MemoryInformationService;
