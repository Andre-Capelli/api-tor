"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessLevelService = void 0;
const AccessLevel_1 = __importDefault(require("../AccessLevel"));
class AccessLevelService {
    async getAll() {
        return await AccessLevel_1.default.find();
    }
    async getById(id) {
        return await AccessLevel_1.default.findById(id);
    }
    async getByName(name) {
        return await AccessLevel_1.default.findOne({ name });
    }
    async getByLevel(level) {
        return await AccessLevel_1.default.findOne({ level });
    }
    async create(data) {
        return await AccessLevel_1.default.create(data);
    }
    async update(id, data) {
        await AccessLevel_1.default.updateOne({ _id: id }, data);
    }
    async delete(id) {
        const accessLevel = await AccessLevel_1.default.findById(id);
        if (accessLevel?.isSystem) {
            throw new Error("Cannot delete system access level");
        }
        await AccessLevel_1.default.deleteOne({ _id: id });
    }
}
exports.AccessLevelService = AccessLevelService;
