"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedAccessLevels = seedAccessLevels;
const AccessLevel_1 = __importDefault(require("@main/access-levels/AccessLevel"));
const DEFAULT_ACCESS_LEVELS = [
    {
        name: "master",
        level: 100,
        scope: "platform",
        description: "Platform developer - full access to all organizations and data",
        isSystem: true,
        isActive: true,
    },
    {
        name: "admin",
        level: 50,
        scope: "company",
        description: "Organization administrator - manages their company and customers",
        isSystem: true,
        isActive: true,
    },
    {
        name: "user",
        level: 40,
        scope: "company",
        description: "Standard user - view and limited edit within their organization",
        isSystem: true,
        isActive: true,
    },
];
async function seedAccessLevels() {
    for (const level of DEFAULT_ACCESS_LEVELS) {
        const existing = await AccessLevel_1.default.findOne({ name: level.name });
        if (!existing) {
            await AccessLevel_1.default.create(level);
            console.log(`Seeded access level: ${level.name} (level: ${level.level})`);
        }
    }
}
