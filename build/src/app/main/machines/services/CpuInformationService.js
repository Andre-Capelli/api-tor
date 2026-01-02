"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CpuInformationService = void 0;
const CpuInformation_1 = __importDefault(require("../CpuInformation"));
class CpuInformationService {
    /**
     * Get all CPU information records for a specific machine
     */
    async getCpuInformationByMachineId(machineId, limit = 100) {
        return await CpuInformation_1.default.find({ machineId })
            .sort({ timestamp: -1 })
            .limit(limit);
    }
    /**
     * Get CPU information by record ID
     */
    async getCpuInformation(id) {
        return await CpuInformation_1.default.findById(id);
    }
    /**
     * Get latest CPU information for a machine
     */
    async getLatestCpuInformation(machineId) {
        return await CpuInformation_1.default.findOne({ machineId }).sort({ timestamp: -1 });
    }
    /**
     * Create single CPU information record
     */
    async createCpuInformation(machineId, data) {
        const created = await CpuInformation_1.default.create({
            machineId,
            ...data,
        });
        return created;
    }
    /**
     * Create multiple CPU information records (batch)
     */
    async createCpuInformationBatch(machineId, dataArray) {
        const records = dataArray.map((data) => ({
            machineId,
            ...data,
        }));
        return await CpuInformation_1.default.insertMany(records);
    }
    /**
     * Get CPU information within date range
     */
    async getCpuInformationByDateRange(machineId, startDate, endDate) {
        return await CpuInformation_1.default.find({
            machineId,
            timestamp: { $gte: startDate, $lte: endDate },
        }).sort({ timestamp: -1 });
    }
    /**
     * Delete CPU information by ID
     */
    async deleteCpuInformation(id) {
        await CpuInformation_1.default.deleteOne({ _id: id });
    }
    /**
     * Delete all CPU information for a machine
     */
    async deleteCpuInformationByMachineId(machineId) {
        const result = await CpuInformation_1.default.deleteMany({ machineId });
        return result.deletedCount || 0;
    }
}
exports.CpuInformationService = CpuInformationService;
