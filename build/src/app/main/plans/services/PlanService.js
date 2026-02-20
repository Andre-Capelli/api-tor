"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanService = void 0;
const Plan_1 = __importDefault(require("../Plan"));
class PlanService {
    async getAll() {
        return await Plan_1.default.find();
    }
    async getById(id) {
        return await Plan_1.default.findById(id);
    }
    async create(data) {
        return await Plan_1.default.create(data);
    }
    async update(id, data) {
        await Plan_1.default.updateOne({ _id: id }, data);
    }
    async delete(id) {
        await Plan_1.default.deleteOne({ _id: id });
    }
}
exports.PlanService = PlanService;
