"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedUsers = seedUsers;
const User_1 = __importDefault(require("@main/users/User"));
const AccessLevel_1 = __importDefault(require("@main/access-levels/AccessLevel"));
const DEFAULT_USERS = [
    {
        name: "Andre",
        email: "andre.capelli@codemaker.pt",
    },
    {
        name: "Nuno",
        email: "nuno.machado@codemaker.pt",
    },
    {
        name: "Miguel",
        email: "miguel@codemaker.pt",
    },
];
async function seedUsers() {
    const masterLevel = await AccessLevel_1.default.findOne({ key: "master" });
    if (!masterLevel) {
        console.warn("Master access level not found — skipping user seeds");
        return;
    }
    for (const userData of DEFAULT_USERS) {
        const existing = await User_1.default.findOne({ email: userData.email });
        if (!existing) {
            await User_1.default.create({
                ...userData,
                password: "Codemaker2025!",
                isActive: true,
                accessLevelId: String(masterLevel._id),
            });
            console.log(`Seeded user: ${userData.name} (${userData.email})`);
        }
    }
}
