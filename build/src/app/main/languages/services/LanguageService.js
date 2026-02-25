"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageService = void 0;
const Language_1 = __importDefault(require("../Language"));
class LanguageService {
    async getAll() {
        return await Language_1.default.find();
    }
    async getById(id) {
        return await Language_1.default.findById(id);
    }
    async getByCode(code) {
        return await Language_1.default.findOne({ code });
    }
    async getActive() {
        return await Language_1.default.find({ isActive: true });
    }
    async create(data) {
        return await Language_1.default.create(data);
    }
    async update(id, data) {
        await Language_1.default.updateOne({ _id: id }, data);
    }
    async delete(id) {
        await Language_1.default.deleteOne({ _id: id });
    }
}
exports.LanguageService = LanguageService;
