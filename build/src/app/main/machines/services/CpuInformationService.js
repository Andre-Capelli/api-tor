"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CpuInformationService = void 0;
const CpuInformation_1 = __importDefault(require("../CpuInformation"));
class CpuInformationService {
    async getCpuInformationByMachineId(machineId, limit = 100) {
        return await CpuInformation_1.default.find({ machineId })
            .sort({ timestamp: -1 })
            .limit(limit);
    }
    async getCpuInformation(id) {
        return await CpuInformation_1.default.findById(id);
    }
    async getLatestCpuInformation(machineId) {
        return await CpuInformation_1.default.findOne({ machineId }).sort({ timestamp: -1 });
    }
    async createCpuInformation(machineId, data) {
        return await CpuInformation_1.default.create({
            machineId,
            ...data,
        });
    }
    async createCpuInformationBatch(machineId, dataArray) {
        const records = dataArray.map((data) => ({
            machineId,
            ...data,
        }));
        return await CpuInformation_1.default.insertMany(records);
    }
    async getCpuInformationByDateRange(machineId, startDate, endDate) {
        return await CpuInformation_1.default.find({
            machineId,
            timestamp: { $gte: startDate, $lte: endDate },
        }).sort({ timestamp: -1 });
    }
    async deleteCpuInformation(id) {
        await CpuInformation_1.default.deleteOne({ _id: id });
    }
    async deleteCpuInformationByMachineId(machineId) {
        const result = await CpuInformation_1.default.deleteMany({ machineId });
        return result.deletedCount || 0;
    }
}
exports.CpuInformationService = CpuInformationService;
