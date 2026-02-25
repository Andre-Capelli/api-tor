"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const core_1 = require("../../core");
const LanguageSchema = new mongoose_1.Schema({
    code: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    nativeName: {
        type: String,
        required: true,
        trim: true,
    },
    isAvailable: {
        type: Boolean,
        default: false,
    },
    isDefault: {
        type: Boolean,
        default: false,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    ...core_1.ModificationSchema,
}, { timestamps: true });
const LanguageDB = (0, mongoose_1.model)("Language", LanguageSchema);
exports.default = LanguageDB;
