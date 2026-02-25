"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemService = void 0;
const Language_1 = __importDefault(require("@main/languages/Language"));
const Label_1 = __importDefault(require("@main/labels/Label"));
const SystemConfig_1 = __importDefault(require("@main/config/SystemConfig"));
class SystemService {
    async getBundle(lang) {
        const [languages, labels, config] = await Promise.all([
            Language_1.default.find({ isActive: true }),
            Label_1.default.find(),
            SystemConfig_1.default.findOne(),
        ]);
        // Build flat label map: { "COMMON.button": "Button" }
        const labelMap = {};
        for (const label of labels) {
            labelMap[label.key] =
                label.translations[lang] ||
                    label.translations["en-US"] ||
                    Object.values(label.translations)[0] ||
                    label.key;
        }
        // Resolve i18n fields to the requested language
        const resolveI18n = (field) => {
            if (!field)
                return "";
            return field[lang] || field["en-US"] || Object.values(field)[0] || "";
        };
        const resolvedConfig = {
            siteName: resolveI18n(config?.siteName),
            siteDescription: resolveI18n(config?.siteDescription),
            logo: config?.logo || "",
            logoDark: config?.logoDark || "",
            favicon: config?.favicon || "",
            footerText: resolveI18n(config?.footerText),
            theme: config?.theme || {},
            metadata: config?.metadata || {},
        };
        return {
            languages,
            labels: labelMap,
            config: resolvedConfig,
        };
    }
}
exports.SystemService = SystemService;
