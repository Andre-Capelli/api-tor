"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkInformationService = void 0;
const NetworkInformation_1 = __importDefault(require("../NetworkInformation"));
class NetworkInformationService {
    /**
     * Get all network information records for a specific machine
     */
    async getNetworkInformationByMachineId(machineId, limit = 100) {
        return await NetworkInformation_1.default.find({ machineId })
            .sort({ timestamp: -1 })
            .limit(limit);
    }
    /**
     * Get network information by record ID
     */
    async getNetworkInformation(id) {
        return await NetworkInformation_1.default.findById(id);
    }
    /**
     * Get latest network information for a machine
     */
    async getLatestNetworkInformation(machineId) {
        return await NetworkInformation_1.default.findOne({ machineId }).sort({ timestamp: -1 });
    }
    /**
     * Create single network information record
     */
    async createNetworkInformation(machineId, data) {
        const created = await NetworkInformation_1.default.create({
            machineId,
            ...data,
        });
        return created;
    }
    /**
     * Create multiple network information records (batch)
     */
    async createNetworkInformationBatch(machineId, dataArray) {
        const records = dataArray.map((data) => ({
            machineId,
            ...data,
        }));
        return await NetworkInformation_1.default.insertMany(records);
    }
    /**
     * Get network information within date range
     */
    async getNetworkInformationByDateRange(machineId, startDate, endDate) {
        return await NetworkInformation_1.default.find({
            machineId,
            timestamp: { $gte: startDate, $lte: endDate },
        }).sort({ timestamp: -1 });
    }
    /**
     * Delete network information by ID
     */
    async deleteNetworkInformation(id) {
        await NetworkInformation_1.default.deleteOne({ _id: id });
    }
    /**
     * Delete all network information for a machine
     */
    async deleteNetworkInformationByMachineId(machineId) {
        const result = await NetworkInformation_1.default.deleteMany({ machineId });
        return result.deletedCount || 0;
    }
}
exports.NetworkInformationService = NetworkInformationService;
