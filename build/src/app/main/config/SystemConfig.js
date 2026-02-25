"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const core_1 = require("../../core");
const SystemConfigSchema = new mongoose_1.Schema({
    siteName: { type: mongoose_1.Schema.Types.Mixed, default: {} },
    siteDescription: { type: mongoose_1.Schema.Types.Mixed, default: {} },
    logo: { type: String, default: "" },
    logoDark: { type: String, default: "" },
    favicon: { type: String, default: "" },
    footerText: { type: mongoose_1.Schema.Types.Mixed, default: {} },
    theme: { type: mongoose_1.Schema.Types.Mixed, default: {} },
    metadata: { type: mongoose_1.Schema.Types.Mixed, default: {} },
    ...core_1.ModificationSchema,
}, { timestamps: true });
const SystemConfigDB = (0, mongoose_1.model)("SystemConfig", SystemConfigSchema);
exports.default = SystemConfigDB;
