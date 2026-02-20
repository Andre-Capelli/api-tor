"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const core_1 = require("../../core");
const CustomFieldValueSchema = new mongoose_1.Schema({
    customFieldId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "CustomField",
        required: true,
        index: true,
    },
    targetCollection: {
        type: String,
        required: true,
    },
    targetDocumentId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
    },
    fieldName: {
        type: String,
        required: true,
    },
    value: {
        type: mongoose_1.Schema.Types.Mixed,
        required: true,
    },
    ...core_1.ModificationSchema,
}, { timestamps: true });
CustomFieldValueSchema.index({ targetDocumentId: 1, customFieldId: 1 }, { unique: true });
CustomFieldValueSchema.index({ targetCollection: 1, targetDocumentId: 1 });
const CustomFieldValueDB = (0, mongoose_1.model)("CustomFieldValue", CustomFieldValueSchema);
exports.default = CustomFieldValueDB;
