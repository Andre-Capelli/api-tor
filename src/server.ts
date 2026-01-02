// src/server.ts
import { app } from "./app";
import connectDB from "./app/configs/mongodb/config";

const port = process.env.NODE_PORT || 7500;

(async () => {
  try {
    await connectDB();
    app.listen(port, () =>
      console.log(`Example app listening at http://localhost:${port}`)
    );
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
})();
