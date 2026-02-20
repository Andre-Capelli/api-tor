"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const core_1 = require("../../core");
// Machine Schema
const MachineSchema = new mongoose_1.Schema({
    machineId: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    computerName: {
        type: String,
        required: true,
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
    domainName: {
        type: String,
    },
    workgroup: {
        type: String,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    lastSeen: {
        type: Date,
        default: Date.now,
    },
    description: {
        type: String,
    },
    location: {
        type: String,
    },
    owner: {
        type: String,
    },
    organizationId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Organization",
        default: null,
        index: true,
    },
}, { timestamps: true });
// Add modification tracking
MachineSchema.add(core_1.ModificationSchema);
const MachineDB = (0, mongoose_1.model)("Machine", MachineSchema);
exports.default = MachineDB;
