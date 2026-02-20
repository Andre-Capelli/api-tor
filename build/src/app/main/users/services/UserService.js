"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const User_1 = __importDefault(require("../User"));
class UserService {
    async getUsers(filter) {
        return await User_1.default.find(filter || {});
    }
    async getUser(id) {
        return await User_1.default.findById(id);
    }
    async createUser(data) {
        return await User_1.default.create(data);
    }
    async upsertUser(id, data) {
        await User_1.default.updateOne({ _id: id }, data, { upsert: true });
    }
    async deleteUser(id) {
        await User_1.default.deleteOne({ _id: id });
    }
}
exports.UserService = UserService;
