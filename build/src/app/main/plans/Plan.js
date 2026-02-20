"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const core_1 = require("../../core");
const PlanSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    description: {
        type: String,
    },
    maxMachines: {
        type: Number,
        required: true,
        min: 1,
    },
    allowedModules: {
        type: [String],
        required: true,
        enum: ["cpu", "memory", "storage", "network", "antivirus"],
    },
    billingPeriod: {
        type: String,
        required: true,
        enum: ["monthly", "yearly"],
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    ...core_1.ModificationSchema,
}, { timestamps: true });
const PlanDB = (0, mongoose_1.model)("Plan", PlanSchema);
exports.default = PlanDB;
