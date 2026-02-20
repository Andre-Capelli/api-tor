"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModificationSchema = void 0;
exports.ModificationSchema = {
    createdBy: { type: String, required: false, default: "system" },
    createdByName: { type: String, required: false, default: "system" },
    updatedBy: { type: String, required: false, default: "system" },
    updatedByName: { type: String, required: false, default: "system" },
};
