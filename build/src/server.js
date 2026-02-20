"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/server.ts
const app_1 = require("./app");
const config_1 = __importDefault(require("./app/configs/mongodb/config"));
const seeds_1 = require("./app/core/seeds");
const port = process.env.NODE_PORT || 7500;
(async () => {
    try {
        await (0, config_1.default)();
        await (0, seeds_1.seedAccessLevels)();
        app_1.app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
    }
    catch (err) {
        console.error("Failed to start server:", err);
        process.exit(1);
    }
})();
