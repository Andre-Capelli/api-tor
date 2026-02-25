"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const BlacklistedTokenSchema = new mongoose_1.Schema({
    jti: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    expiresAt: {
        type: Date,
        required: true,
        index: { expires: 0 },
    },
});
const BlacklistedTokenDB = (0, mongoose_1.model)("BlacklistedToken", BlacklistedTokenSchema);
exports.default = BlacklistedTokenDB;
