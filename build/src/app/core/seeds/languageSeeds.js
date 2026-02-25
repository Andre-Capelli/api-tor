"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedLanguages = seedLanguages;
const Language_1 = __importDefault(require("@main/languages/Language"));
const DEFAULT_LANGUAGES = [
    {
        code: "en-US",
        name: "English",
        nativeName: "English",
        isAvailable: true,
        isDefault: true,
        isActive: true,
    },
    {
        code: "pt-BR",
        name: "Portuguese (Brazil)",
        nativeName: "Português (Brasil)",
        isAvailable: true,
        isDefault: false,
        isActive: true,
    },
];
async function seedLanguages() {
    for (const lang of DEFAULT_LANGUAGES) {
        const existing = await Language_1.default.findOne({ code: lang.code });
        if (!existing) {
            await Language_1.default.create(lang);
            console.log(`Seeded language: ${lang.name} (${lang.code})`);
        }
    }
}
