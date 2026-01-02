"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const User_1 = __importDefault(require("../User"));
class UserService {
    async getUsers() {
        return await User_1.default.find();
    }
    async getUser(id) {
        return await User_1.default.findById(id);
    }
    async createUser(data) {
        // optionally validate/massage data here
        const created = await User_1.default.create(data);
        return created;
    }
    async upsertUser(data) {
        const id = data.id || data._id;
        if (!id)
            throw new Error("id is required for upsert");
        await User_1.default.updateOne({ _id: id }, data, { upsert: true });
    }
    async deleteUser(id) {
        await User_1.default.deleteOne({ _id: id });
        return;
    }
}
exports.UserService = UserService;
