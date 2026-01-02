// src/app.ts
import swaggerUi from "swagger-ui-express";
import { RegisterRoutes } from "../build/routes";
import express, { json, urlencoded } from "express";
import {
  errorHandler,
  notFoundHandler,
  handleValidationError,
  sanitizeInput,
} from "./app/core/middlewares";

export const app = express();

// Body parser middleware
app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());

// Sanitize input to prevent XSS and injection attacks
app.use(sanitizeInput);

// Swagger documentation
app.use("/docs", swaggerUi.serve, async (_req: any, res: any) => {
  return res.send(
    swaggerUi.generateHTML(await import("../build/swagger.json"))
  );
});

// Register TSOA routes
RegisterRoutes(app);

// Handle TSOA validation errors
app.use(handleValidationError);

// 404 handler for undefined routes
app.use(notFoundHandler);

// Global error handler (must be last)
app.use(errorHandler);
