// src/server.ts
import { app } from "./app";
import connectDB from "./app/configs/mongodb/config";
import { seedAccessLevels, seedLanguages, seedSystemConfig, seedUsers } from "./app/core/seeds";

const port = process.env.NODE_PORT || 7500;

(async () => {
  try {
    await connectDB();
    await seedAccessLevels();
    await seedLanguages();
    await seedSystemConfig();
    await seedUsers();
    app.listen(port, () =>
      console.log(`Example app listening at http://localhost:${port}`)
    );
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
})();
