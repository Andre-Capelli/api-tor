"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const core_1 = require("../../core");
const LabelSchema = new mongoose_1.Schema({
    key: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    translations: {
        type: mongoose_1.Schema.Types.Mixed,
        required: true,
        default: {},
    },
    ...core_1.ModificationSchema,
}, { timestamps: true });
const LabelDB = (0, mongoose_1.model)("Label", LabelSchema);
exports.default = LabelDB;
