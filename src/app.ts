// src/app.ts
import swaggerUi from "swagger-ui-express";
import { RegisterRoutes } from "../build/routes";
import express, { json, urlencoded } from "express";
import cors from "cors";
import helmet from "helmet";
import {
  errorHandler,
  notFoundHandler,
  handleValidationError,
} from "./app/core/middlewares";

export const app = express();

// Security headers
app.use(helmet());

// CORS
app.use(cors());

// Body parser middleware
app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());

// Swagger documentation
app.use("/docs", swaggerUi.serve, async (_req: any, res: any) => {
  const swaggerDoc = await import("../build/swagger.json");
  const spec = {
    ...swaggerDoc,
    servers: [
      { url: "http://localhost:7500/api/v1", description: "DEV" },
      { url: "http://77.237.245.173:7500/api/v1", description: "LIVE" },
    ],
  };
  return res.send(swaggerUi.generateHTML(spec));
});

// Register TSOA routes
RegisterRoutes(app);

// Handle TSOA validation errors
app.use(handleValidationError);

// 404 handler for undefined routes
app.use(notFoundHandler);

// Global error handler (must be last)
app.use(errorHandler);
