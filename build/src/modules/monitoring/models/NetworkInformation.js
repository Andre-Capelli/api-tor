"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const core_1 = require("../../../app/core");
// Network Information Schema
const NetworkInformationSchema = new mongoose_1.Schema({
    machineId: {
        type: String,
        required: true,
        index: true,
    },
    timestamp: {
        type: Date,
        required: true,
        default: Date.now,
        index: true,
    },
    name: {
        type: String,
        required: true,
    },
    bytesSent: {
        type: Number,
        required: true,
    },
    bytesReceived: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    speed: {
        type: String,
        required: true,
    },
    ipAddress: {
        type: String,
        required: true,
    },
}, { timestamps: true });
// Add modification tracking
NetworkInformationSchema.add(core_1.ModificationSchema);
// Compound index for efficient queries
NetworkInformationSchema.index({ machineId: 1, timestamp: -1 });
const NetworkInformationDB = (0, mongoose_1.model)("NetworkInformation", NetworkInformationSchema);
exports.default = NetworkInformationDB;
