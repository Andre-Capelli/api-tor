"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemConfigService = void 0;
const SystemConfig_1 = __importDefault(require("../SystemConfig"));
class SystemConfigService {
    async get() {
        return await SystemConfig_1.default.findOne();
    }
    async upsert(data) {
        return await SystemConfig_1.default.findOneAndUpdate({}, { $set: data }, { upsert: true, new: true });
    }
}
exports.SystemConfigService = SystemConfigService;
