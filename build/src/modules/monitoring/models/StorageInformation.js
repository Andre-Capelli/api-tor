"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const core_1 = require("../../../app/core");
// Disk Schema
const DiskSchema = new mongoose_1.Schema({
    index: {
        type: Number,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    serialNumber: {
        type: String,
        required: true,
    },
    firmwareRevision: {
        type: String,
        required: true,
    },
    sizeBytes: {
        type: Number,
        required: true,
    },
    temperature: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    lastErrorCode: {
        type: String,
        default: null,
    },
    errorCleared: {
        type: String,
        default: null,
    },
    errorDescription: {
        type: String,
        default: null,
    },
    errorMethodology: {
        type: String,
        default: null,
    },
}, { _id: false });
// Partition Schema
const PartitionSchema = new mongoose_1.Schema({
    diskIndex: {
        type: Number,
        required: true,
    },
    index: {
        type: Number,
        required: true,
    },
    bootable: {
        type: Boolean,
        required: true,
    },
    primaryPartition: {
        type: Boolean,
        required: true,
    },
    volumeName: {
        type: String,
        required: true,
    },
    sizeBytes: {
        type: Number,
        required: true,
    },
    freeSpaceBytes: {
        type: Number,
        required: true,
    },
    usagePercentage: {
        type: Number,
        required: true,
    },
    volumeLetter: {
        type: String,
        default: null,
    },
    fileSystem: {
        type: String,
        default: null,
    },
}, { _id: false });
// Storage Information Schema
const StorageInformationSchema = new mongoose_1.Schema({
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
    disks: {
        type: [DiskSchema],
        required: true,
    },
    partitions: {
        type: [PartitionSchema],
        required: true,
    },
}, { timestamps: true });
// Add modification tracking
StorageInformationSchema.add(core_1.ModificationSchema);
// Compound index for efficient queries
StorageInformationSchema.index({ machineId: 1, timestamp: -1 });
const StorageInformationDB = (0, mongoose_1.model)("StorageInformation", StorageInformationSchema);
exports.default = StorageInformationDB;
