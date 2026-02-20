"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageInformationService = void 0;
const StorageInformation_1 = __importDefault(require("../StorageInformation"));
class StorageInformationService {
    async getStorageInformationByMachineId(machineId, limit = 100) {
        return await StorageInformation_1.default.find({ machineId })
            .sort({ timestamp: -1 })
            .limit(limit);
    }
    async getStorageInformation(id) {
        return await StorageInformation_1.default.findById(id);
    }
    async getLatestStorageInformation(machineId) {
        return await StorageInformation_1.default.findOne({ machineId }).sort({ timestamp: -1 });
    }
    async createStorageInformation(machineId, data) {
        return await StorageInformation_1.default.create({
            machineId,
            ...data,
        });
    }
    async createStorageInformationBatch(machineId, dataArray) {
        const records = dataArray.map((data) => ({
            machineId,
            ...data,
        }));
        return await StorageInformation_1.default.insertMany(records);
    }
    async getStorageInformationByDateRange(machineId, startDate, endDate) {
        return await StorageInformation_1.default.find({
            machineId,
            timestamp: { $gte: startDate, $lte: endDate },
        }).sort({ timestamp: -1 });
    }
    async deleteStorageInformation(id) {
        await StorageInformation_1.default.deleteOne({ _id: id });
    }
    async deleteStorageInformationByMachineId(machineId) {
        const result = await StorageInformation_1.default.deleteMany({ machineId });
        return result.deletedCount || 0;
    }
}
exports.StorageInformationService = StorageInformationService;
