"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const config_1 = require("../../../app/configs/mongodb/config");
const core_1 = require("../../../app/core");
// Memory Information Schema
const MemoryInformationSchema = new mongoose_1.Schema({
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
    usedMemoryGB: {
        type: Number,
        required: true,
    },
    availableMemoryGB: {
        type: Number,
        required: true,
    },
    totalMemoryGB: {
        type: Number,
        required: true,
    },
    usagePercentage: {
        type: Number,
        required: true,
    },
}, { timestamps: true });
// Add modification tracking
MemoryInformationSchema.add(core_1.ModificationSchema);
// Compound index for efficient queries
MemoryInformationSchema.index({ machineId: 1, timestamp: -1 });
const MemoryInformationDB = config_1.modConnection.model("MemoryInformation", MemoryInformationSchema);
exports.default = MemoryInformationDB;
