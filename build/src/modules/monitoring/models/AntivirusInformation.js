"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const core_1 = require("../../../app/core");
// Antivirus Information Schema
const AntivirusInformationSchema = new mongoose_1.Schema({
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
    enabled: {
        type: Boolean,
        required: true,
    },
    lastQuickScan: {
        type: Date,
        default: null,
    },
    lastFullScan: {
        type: Date,
        default: null,
    },
    hasThreats: {
        type: Boolean,
        default: null,
    },
}, { timestamps: true });
// Add modification tracking
AntivirusInformationSchema.add(core_1.ModificationSchema);
// Compound index for efficient queries
AntivirusInformationSchema.index({ machineId: 1, timestamp: -1 });
const AntivirusInformationDB = (0, mongoose_1.model)("AntivirusInformation", AntivirusInformationSchema);
exports.default = AntivirusInformationDB;
