"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const connectDB = async () => {
    try {
        const MONGO_USERNAME = process.env.MONGO_USERNAME;
        const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
        const MONGO_HOSTNAME = process.env.MONGO_HOSTNAME;
        const MONGO_PORT = process.env.MONGO_PORT || "27017";
        const MONGO_DBNAME = process.env.MONGO_DBNAME || "morditor_sys";
        if (!MONGO_HOSTNAME) {
            throw new Error("MONGO_HOSTNAME environment variable is required");
        }
        let authPart = "";
        if (MONGO_USERNAME && MONGO_PASSWORD) {
            authPart = `${encodeURIComponent(MONGO_USERNAME)}:${encodeURIComponent(MONGO_PASSWORD)}@`;
        }
        const url = `mongodb://${authPart}${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DBNAME}?authSource=admin`;
        const conn = await mongoose_1.default.connect(url);
        console.log(`MongoDB connected: ${conn.connection.host} (db: ${MONGO_DBNAME})`);
    }
    catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};
exports.default = connectDB;
