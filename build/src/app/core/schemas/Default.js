"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModificationSchema = void 0;
exports.ModificationSchema = {
    createdAt: { type: Date, default: Date.now },
    createdBy: { type: String, required: false, default: "system" },
    createdByName: { type: String, required: false, default: "system" },
    updatedAt: { type: Date, default: null },
    updatedBy: { type: String, required: false, default: "system" },
    updatedByName: { type: String, required: false, default: "system" },
};
