"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const config_1 = require("../../../app/configs/mongodb/config");
const core_1 = require("../../../app/core");
// MachineSnapshot Schema
const MachineSnapshotSchema = new mongoose_1.Schema({
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
    operatingSystem: {
        type: String,
        required: true,
    },
    operatingSystemVersion: {
        type: String,
        required: true,
    },
    operatingSystemArchitecture: {
        type: String,
        required: true,
    },
    operatingSystemDescription: {
        type: String,
        required: true,
    },
    computerName: {
        type: String,
        required: true,
    },
    domainName: {
        type: String,
    },
    workgroup: {
        type: String,
    },
    updatesPending: {
        type: Boolean,
        required: true,
    },
    uptimeSeconds: {
        type: Number,
        required: true,
    },
    loggedInUser: {
        type: String,
        required: true,
    },
}, { timestamps: true });
// Add modification tracking
MachineSnapshotSchema.add(core_1.ModificationSchema);
// Compound index for efficient queries
MachineSnapshotSchema.index({ machineId: 1, timestamp: -1 });
const MachineSnapshotDB = config_1.modConnection.model("MachineSnapshot", MachineSnapshotSchema);
exports.default = MachineSnapshotDB;
