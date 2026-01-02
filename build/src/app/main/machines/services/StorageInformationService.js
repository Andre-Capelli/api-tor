"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageInformationService = void 0;
const StorageInformation_1 = __importDefault(require("../StorageInformation"));
class StorageInformationService {
    /**
     * Get all storage information records for a specific machine
     */
    async getStorageInformationByMachineId(machineId, limit = 100) {
        return await StorageInformation_1.default.find({ machineId })
            .sort({ timestamp: -1 })
            .limit(limit);
    }
    /**
     * Get storage information by record ID
     */
    async getStorageInformation(id) {
        return await StorageInformation_1.default.findById(id);
    }
    /**
     * Get latest storage information for a machine
     */
    async getLatestStorageInformation(machineId) {
        return await StorageInformation_1.default.findOne({ machineId }).sort({ timestamp: -1 });
    }
    /**
     * Create single storage information record
     */
    async createStorageInformation(machineId, data) {
        const created = await StorageInformation_1.default.create({
            machineId,
            ...data,
        });
        return created;
    }
    /**
     * Create multiple storage information records (batch)
     */
    async createStorageInformationBatch(machineId, dataArray) {
        const records = dataArray.map((data) => ({
            machineId,
            ...data,
        }));
        return await StorageInformation_1.default.insertMany(records);
    }
    /**
     * Get storage information within date range
     */
    async getStorageInformationByDateRange(machineId, startDate, endDate) {
        return await StorageInformation_1.default.find({
            machineId,
            timestamp: { $gte: startDate, $lte: endDate },
        }).sort({ timestamp: -1 });
    }
    /**
     * Delete storage information by ID
     */
    async deleteStorageInformation(id) {
        await StorageInformation_1.default.deleteOne({ _id: id });
    }
    /**
     * Delete all storage information for a machine
     */
    async deleteStorageInformationByMachineId(machineId) {
        const result = await StorageInformation_1.default.deleteMany({ machineId });
        return result.deletedCount || 0;
    }
}
exports.StorageInformationService = StorageInformationService;
