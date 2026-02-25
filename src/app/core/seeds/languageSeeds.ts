import LanguageDB from "@main/languages/Language";

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

export async function seedLanguages(): Promise<void> {
  for (const lang of DEFAULT_LANGUAGES) {
    const existing = await LanguageDB.findOne({ code: lang.code });
    if (!existing) {
      await LanguageDB.create(lang);
      console.log(`Seeded language: ${lang.name} (${lang.code})`);
    }
  }
}
