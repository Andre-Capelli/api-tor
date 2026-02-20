import AccessLevelDB from "@main/access-levels/AccessLevel";

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

export async function seedAccessLevels(): Promise<void> {
  for (const level of DEFAULT_ACCESS_LEVELS) {
    const existing = await AccessLevelDB.findOne({ name: level.name });
    if (!existing) {
      await AccessLevelDB.create(level);
      console.log(`Seeded access level: ${level.name} (level: ${level.level})`);
    }
  }
}
