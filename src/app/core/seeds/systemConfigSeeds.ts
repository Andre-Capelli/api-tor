import SystemConfigDB from "@main/config/SystemConfig";

export async function seedSystemConfig(): Promise<void> {
  const existing = await SystemConfigDB.findOne();
  if (!existing) {
    await SystemConfigDB.create({
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
