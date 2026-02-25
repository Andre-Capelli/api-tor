import UserDB from "@main/users/User";
import AccessLevelDB from "@main/access-levels/AccessLevel";

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

export async function seedUsers(): Promise<void> {
  const masterLevel = await AccessLevelDB.findOne({ key: "master" });

  if (!masterLevel) {
    console.warn("Master access level not found — skipping user seeds");
    return;
  }

  for (const userData of DEFAULT_USERS) {
    const existing = await UserDB.findOne({ email: userData.email });
    if (!existing) {
      await UserDB.create({
        ...userData,
        password: "Codemaker2025!",
        isActive: true,
        accessLevelId: String(masterLevel._id),
      });
      console.log(`Seeded user: ${userData.name} (${userData.email})`);
    }
  }
}
