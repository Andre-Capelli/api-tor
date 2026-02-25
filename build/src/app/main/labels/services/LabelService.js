"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelService = void 0;
const Label_1 = __importDefault(require("../Label"));
class LabelService {
    async getAll() {
        return await Label_1.default.find();
    }
    async getById(id) {
        return await Label_1.default.findById(id);
    }
    async getByKey(key) {
        return await Label_1.default.findOne({ key });
    }
    async create(data) {
        return await Label_1.default.create(data);
    }
    async createBatch(items) {
        return await Label_1.default.insertMany(items);
    }
    async update(id, data) {
        await Label_1.default.updateOne({ _id: id }, data);
    }
    async upsertBatch(items) {
        const ops = items.map((item) => ({
            updateOne: {
                filter: { key: item.key },
                update: { $set: { translations: item.translations } },
                upsert: true,
            },
        }));
        const result = await Label_1.default.bulkWrite(ops);
        return result.modifiedCount + result.upsertedCount;
    }
    async delete(id) {
        await Label_1.default.deleteOne({ _id: id });
    }
}
exports.LabelService = LabelService;
