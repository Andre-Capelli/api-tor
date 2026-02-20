"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const core_1 = require("../../core");
const SubscriptionSchema = new mongoose_1.Schema({
    organizationId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Organization",
        required: true,
        index: true,
    },
    planId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Plan",
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ["active", "inactive", "suspended", "expired"],
        default: "active",
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    autoRenew: {
        type: Boolean,
        default: false,
    },
    ...core_1.ModificationSchema,
}, { timestamps: true });
SubscriptionSchema.index({ organizationId: 1, status: 1 });
const SubscriptionDB = (0, mongoose_1.model)("Subscription", SubscriptionSchema);
exports.default = SubscriptionDB;
