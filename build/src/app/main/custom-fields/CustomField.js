"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const core_1 = require("../../core");
const CustomFieldSchema = new mongoose_1.Schema({
    targetCollection: {
        type: String,
        required: true,
        index: true,
    },
    fieldName: {
        type: String,
        required: true,
        trim: true,
    },
    fieldType: {
        type: String,
        required: true,
        enum: ["string", "number", "boolean", "date", "select"],
    },
    required: {
        type: Boolean,
        default: false,
    },
    defaultValue: {
        type: mongoose_1.Schema.Types.Mixed,
    },
    options: {
        type: [String],
    },
    description: {
        type: String,
    },
    organizationId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Organization",
        default: null,
        index: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    ...core_1.ModificationSchema,
}, { timestamps: true });
CustomFieldSchema.index({ targetCollection: 1, fieldName: 1, organizationId: 1 }, { unique: true });
const CustomFieldDB = (0, mongoose_1.model)("CustomField", CustomFieldSchema);
exports.default = CustomFieldDB;
