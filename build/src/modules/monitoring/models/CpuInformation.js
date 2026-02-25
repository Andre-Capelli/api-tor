"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const config_1 = require("../../../app/configs/mongodb/config");
const core_1 = require("../../../app/core");
// CPU Core Schema
const CpuCoreSchema = new mongoose_1.Schema({
    coreId: {
        type: Number,
        required: true,
    },
    temperature: {
        type: Number,
        required: true,
    },
    load: {
        type: Number,
        required: true,
    },
}, { _id: false });
// CPU Information Schema
const CpuInformationSchema = new mongoose_1.Schema({
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
    temperature: {
        type: Number,
        required: true,
    },
    load: {
        type: Number,
        required: true,
    },
    power: {
        type: Number,
        required: true,
    },
    cores: {
        type: [CpuCoreSchema],
        required: true,
    },
}, { timestamps: true });
// Add modification tracking
CpuInformationSchema.add(core_1.ModificationSchema);
// Compound index for efficient queries
CpuInformationSchema.index({ machineId: 1, timestamp: -1 });
const CpuInformationDB = config_1.modConnection.model("CpuInformation", CpuInformationSchema);
exports.default = CpuInformationDB;
