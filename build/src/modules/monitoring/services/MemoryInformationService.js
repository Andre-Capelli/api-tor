"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryInformationService = void 0;
const MemoryInformation_1 = __importDefault(require("../models/MemoryInformation"));
class MemoryInformationService {
    async getMemoryInformationByMachineId(machineId, limit = 100) {
        return await MemoryInformation_1.default.find({ machineId })
            .sort({ timestamp: -1 })
            .limit(limit);
    }
    async getMemoryInformation(id) {
        return await MemoryInformation_1.default.findById(id);
    }
    async getLatestMemoryInformation(machineId) {
        return await MemoryInformation_1.default.findOne({ machineId }).sort({ timestamp: -1 });
    }
    async createMemoryInformation(machineId, data) {
        return await MemoryInformation_1.default.create({
            machineId,
            ...data,
        });
    }
    async createMemoryInformationBatch(machineId, dataArray) {
        const records = dataArray.map((data) => ({
            machineId,
            ...data,
        }));
        return await MemoryInformation_1.default.insertMany(records);
    }
    async getMemoryInformationByDateRange(machineId, startDate, endDate) {
        return await MemoryInformation_1.default.find({
            machineId,
            timestamp: { $gte: startDate, $lte: endDate },
        }).sort({ timestamp: -1 });
    }
    async deleteMemoryInformation(id) {
        await MemoryInformation_1.default.deleteOne({ _id: id });
    }
    async deleteMemoryInformationByMachineId(machineId) {
        const result = await MemoryInformation_1.default.deleteMany({ machineId });
        return result.deletedCount || 0;
    }
}
exports.MemoryInformationService = MemoryInformationService;
