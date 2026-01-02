import { Request, Response, NextFunction } from "express";

export interface ErrorResponse {
  error: {
    message: string;
    status: number;
    stack?: string;
  };
}

/**
 * Global error handler middleware
 * Catches all errors thrown in the application and formats them consistently
 */
export const errorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  console.error("Error:", err);

  const statusCode = err.status || res.statusCode || 500;
  const message = err.message || "Internal Server Error";

  const errorResponse: ErrorResponse = {
    error: {
      message,
      status: statusCode,
      ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
    },
  };

  res.status(statusCode).json(errorResponse);
};

/**
 * 404 handler for undefined routes
 */
export const notFoundHandler = (req: Request, res: Response): void => {
  res.status(404).json({
    error: {
      message: "Route not found",
      status: 404,
      path: req.path,
    },
  });
};
