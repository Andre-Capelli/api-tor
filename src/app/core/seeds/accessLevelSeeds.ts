import AccessLevelDB from "@main/access-levels/AccessLevel";

const DEFAULT_ACCESS_LEVELS = [
  {
    key: "master",
    name: { "en-US": "Master", "pt-BR": "Mestre" },
    level: 100,
    scope: "platform",
    description: "Platform developer - full access to all organizations and data",
    isSystem: true,
    isActive: true,
  },
  {
    key: "admin",
    name: { "en-US": "Administrator", "pt-BR": "Administrador" },
    level: 50,
    scope: "company",
    description: "Organization administrator - manages their company and customers",
    isSystem: true,
    isActive: true,
  },
  {
    key: "user",
    name: { "en-US": "User", "pt-BR": "Utilizador" },
    level: 40,
    scope: "company",
    description: "Standard user - view and limited edit within their organization",
    isSystem: true,
    isActive: true,
  },
];

export async function seedAccessLevels(): Promise<void> {
  for (const level of DEFAULT_ACCESS_LEVELS) {
    const existing = await AccessLevelDB.findOne({ key: level.key });
    if (!existing) {
      await AccessLevelDB.create(level);
      console.log(`Seeded access level: ${level.key} (level: ${level.level})`);
    }
  }
}
