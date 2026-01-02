"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AntivirusInformationService = void 0;
const AntivirusInformation_1 = __importDefault(require("../AntivirusInformation"));
class AntivirusInformationService {
    /**
     * Get all antivirus information records for a specific machine
     */
    async getAntivirusInformationByMachineId(machineId, limit = 100) {
        return await AntivirusInformation_1.default.find({ machineId })
            .sort({ timestamp: -1 })
            .limit(limit);
    }
    /**
     * Get antivirus information by record ID
     */
    async getAntivirusInformation(id) {
        return await AntivirusInformation_1.default.findById(id);
    }
    /**
     * Get latest antivirus information for a machine
     */
    async getLatestAntivirusInformation(machineId) {
        return await AntivirusInformation_1.default.findOne({ machineId }).sort({ timestamp: -1 });
    }
    /**
     * Create single antivirus information record
     */
    async createAntivirusInformation(machineId, data) {
        const created = await AntivirusInformation_1.default.create({
            machineId,
            ...data,
        });
        return created;
    }
    /**
     * Create multiple antivirus information records (batch)
     */
    async createAntivirusInformationBatch(machineId, dataArray) {
        const records = dataArray.map((data) => ({
            machineId,
            ...data,
        }));
        return await AntivirusInformation_1.default.insertMany(records);
    }
    /**
     * Get antivirus information within date range
     */
    async getAntivirusInformationByDateRange(machineId, startDate, endDate) {
        return await AntivirusInformation_1.default.find({
            machineId,
            timestamp: { $gte: startDate, $lte: endDate },
        }).sort({ timestamp: -1 });
    }
    /**
     * Delete antivirus information by ID
     */
    async deleteAntivirusInformation(id) {
        await AntivirusInformation_1.default.deleteOne({ _id: id });
    }
    /**
     * Delete all antivirus information for a machine
     */
    async deleteAntivirusInformationByMachineId(machineId) {
        const result = await AntivirusInformation_1.default.deleteMany({ machineId });
        return result.deletedCount || 0;
    }
}
exports.AntivirusInformationService = AntivirusInformationService;
