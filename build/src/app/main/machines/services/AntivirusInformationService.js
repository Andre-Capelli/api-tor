"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AntivirusInformationService = void 0;
const AntivirusInformation_1 = __importDefault(require("../AntivirusInformation"));
class AntivirusInformationService {
    async getAntivirusInformationByMachineId(machineId, limit = 100) {
        return await AntivirusInformation_1.default.find({ machineId })
            .sort({ timestamp: -1 })
            .limit(limit);
    }
    async getAntivirusInformation(id) {
        return await AntivirusInformation_1.default.findById(id);
    }
    async getLatestAntivirusInformation(machineId) {
        return await AntivirusInformation_1.default.findOne({ machineId }).sort({ timestamp: -1 });
    }
    async createAntivirusInformation(machineId, data) {
        return await AntivirusInformation_1.default.create({
            machineId,
            ...data,
        });
    }
    async createAntivirusInformationBatch(machineId, dataArray) {
        const records = dataArray.map((data) => ({
            machineId,
            ...data,
        }));
        return await AntivirusInformation_1.default.insertMany(records);
    }
    async getAntivirusInformationByDateRange(machineId, startDate, endDate) {
        return await AntivirusInformation_1.default.find({
            machineId,
            timestamp: { $gte: startDate, $lte: endDate },
        }).sort({ timestamp: -1 });
    }
    async deleteAntivirusInformation(id) {
        await AntivirusInformation_1.default.deleteOne({ _id: id });
    }
    async deleteAntivirusInformationByMachineId(machineId) {
        const result = await AntivirusInformation_1.default.deleteMany({ machineId });
        return result.deletedCount || 0;
    }
}
exports.AntivirusInformationService = AntivirusInformationService;
