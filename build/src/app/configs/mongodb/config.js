"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modConnection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGO_USERNAME = process.env.MONGO_USERNAME;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_HOSTNAME = process.env.MONGO_HOSTNAME;
const MONGO_PORT = process.env.MONGO_PORT || "27017";
const MONGO_DBNAME = process.env.MONGO_DBNAME || "morditor_sys";
const MONGO_DBNAME_MOD = process.env.MONGO_DBNAME_MOD || "morditor_mod";
let authPart = "";
if (MONGO_USERNAME && MONGO_PASSWORD) {
    authPart = `${encodeURIComponent(MONGO_USERNAME)}:${encodeURIComponent(MONGO_PASSWORD)}@`;
}
const sysUrl = `mongodb://${authPart}${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DBNAME}?authSource=admin`;
const modUrl = `mongodb://${authPart}${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DBNAME_MOD}?authSource=admin`;
// Create module connection eagerly — models register on it at import time.
// Mongoose buffers all operations until the TCP connection is established.
exports.modConnection = mongoose_1.default.createConnection(modUrl);
const connectDB = async () => {
    try {
        if (!MONGO_HOSTNAME) {
            throw new Error("MONGO_HOSTNAME environment variable is required");
        }
        const conn = await mongoose_1.default.connect(sysUrl);
        console.log(`MongoDB connected: ${conn.connection.host} (db: ${MONGO_DBNAME})`);
        await exports.modConnection.asPromise();
        console.log(`MongoDB connected: ${exports.modConnection.host} (db: ${MONGO_DBNAME_MOD})`);
    }
    catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};
exports.default = connectDB;
