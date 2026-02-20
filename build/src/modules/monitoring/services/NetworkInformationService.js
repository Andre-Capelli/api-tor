"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkInformationService = void 0;
const NetworkInformation_1 = __importDefault(require("../models/NetworkInformation"));
class NetworkInformationService {
    async getNetworkInformationByMachineId(machineId, limit = 100) {
        return await NetworkInformation_1.default.find({ machineId })
            .sort({ timestamp: -1 })
            .limit(limit);
    }
    async getNetworkInformation(id) {
        return await NetworkInformation_1.default.findById(id);
    }
    async getLatestNetworkInformation(machineId) {
        return await NetworkInformation_1.default.findOne({ machineId }).sort({ timestamp: -1 });
    }
    async createNetworkInformation(machineId, data) {
        return await NetworkInformation_1.default.create({
            machineId,
            ...data,
        });
    }
    async createNetworkInformationBatch(machineId, dataArray) {
        const records = dataArray.map((data) => ({
            machineId,
            ...data,
        }));
        return await NetworkInformation_1.default.insertMany(records);
    }
    async getNetworkInformationByDateRange(machineId, startDate, endDate) {
        return await NetworkInformation_1.default.find({
            machineId,
            timestamp: { $gte: startDate, $lte: endDate },
        }).sort({ timestamp: -1 });
    }
    async deleteNetworkInformation(id) {
        await NetworkInformation_1.default.deleteOne({ _id: id });
    }
    async deleteNetworkInformationByMachineId(machineId) {
        const result = await NetworkInformation_1.default.deleteMany({ machineId });
        return result.deletedCount || 0;
    }
}
exports.NetworkInformationService = NetworkInformationService;
