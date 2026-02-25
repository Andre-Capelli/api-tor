"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedSystemConfig = seedSystemConfig;
const SystemConfig_1 = __importDefault(require("@main/config/SystemConfig"));
async function seedSystemConfig() {
    const existing = await SystemConfig_1.default.findOne();
    if (!existing) {
        await SystemConfig_1.default.create({
            siteName: { "en-US": "API TOR", "pt-BR": "API TOR" },
            siteDescription: { "en-US": "Monitoring Platform", "pt-BR": "Plataforma de Monitoramento" },
            logo: "",
            logoDark: "",
            favicon: "",
            footerText: { "en-US": "All rights reserved", "pt-BR": "Todos os direitos reservados" },
            theme: {},
            metadata: {},
        });
        console.log("Seeded default system config");
    }
}
