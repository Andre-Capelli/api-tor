import LanguageDB from "@main/languages/Language";
import LabelDB from "@main/labels/Label";
import SystemConfigDB from "@main/config/SystemConfig";

export interface ResolvedSystemConfig {
  siteName: string;
  siteDescription: string;
  logo: string;
  logoDark: string;
  favicon: string;
  footerText: string;
  theme: Record<string, any>;
  metadata: Record<string, any>;
}

export interface SystemBundle {
  languages: any[];
  labels: Record<string, string>;
  config: ResolvedSystemConfig;
}

export class SystemService {
  public async getBundle(lang: string): Promise<SystemBundle> {
    const [languages, labels, config] = await Promise.all([
      LanguageDB.find({ isActive: true }),
      LabelDB.find(),
      SystemConfigDB.findOne(),
    ]);

    // Build flat label map: { "COMMON.button": "Button" }
    const labelMap: Record<string, string> = {};
    for (const label of labels) {
      labelMap[label.key] =
        label.translations[lang] ||
        label.translations["en-US"] ||
        Object.values(label.translations)[0] ||
        label.key;
    }

    // Resolve i18n fields to the requested language
    const resolveI18n = (field: Record<string, string> | undefined): string => {
      if (!field) return "";
      return field[lang] || field["en-US"] || Object.values(field)[0] || "";
    };

    const resolvedConfig: ResolvedSystemConfig = {
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
