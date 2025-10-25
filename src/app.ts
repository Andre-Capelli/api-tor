// src/app.ts
import swaggerUi from "swagger-ui-express";
import { RegisterRoutes } from "../build/routes";
import express, {
  Response as ExResponse,
  Request as ExRequest,
  json,
  urlencoded,
} from "express";
import connectDB from "./app/configs/mongodb/config";

export const app = express();

// await connectDB()
// connectDB();

// Use body parser to read sent json payloads
app.use(
  urlencoded({
    extended: true,
  })
);
app.use("/docs", swaggerUi.serve, async (_req: any, res: any) => {
  return res.send(
    swaggerUi.generateHTML(await import("../build/swagger.json"))
  );
});
app.use(json());

RegisterRoutes(app);
