"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const core_1 = require("../../core");
const OrganizationSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    type: {
        type: String,
        required: true,
        enum: ["company", "customer"],
    },
    parentId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Organization",
        default: null,
        index: true,
    },
    document: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
    },
    phone: {
        type: String,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    ...core_1.ModificationSchema,
}, { timestamps: true });
OrganizationSchema.index({ type: 1 });
const OrganizationDB = (0, mongoose_1.model)("Organization", OrganizationSchema);
exports.default = OrganizationDB;
