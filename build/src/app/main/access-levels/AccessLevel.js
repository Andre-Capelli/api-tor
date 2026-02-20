"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const core_1 = require("../../core");
const AccessLevelSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    level: {
        type: Number,
        required: true,
        unique: true,
    },
    scope: {
        type: String,
        required: true,
        enum: ["platform", "company"],
    },
    description: {
        type: String,
    },
    isSystem: {
        type: Boolean,
        default: false,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    ...core_1.ModificationSchema,
}, { timestamps: true });
const AccessLevelDB = (0, mongoose_1.model)("AccessLevel", AccessLevelSchema);
exports.default = AccessLevelDB;
