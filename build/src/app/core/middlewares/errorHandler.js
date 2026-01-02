"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundHandler = exports.errorHandler = void 0;
/**
 * Global error handler middleware
 * Catches all errors thrown in the application and formats them consistently
 */
const errorHandler = (err, _req, res, _next) => {
    console.error("Error:", err);
    const statusCode = err.status || res.statusCode || 500;
    const message = err.message || "Internal Server Error";
    const errorResponse = {
        error: {
            message,
            status: statusCode,
            ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
        },
    };
    res.status(statusCode).json(errorResponse);
};
exports.errorHandler = errorHandler;
/**
 * 404 handler for undefined routes
 */
const notFoundHandler = (req, res) => {
    res.status(404).json({
        error: {
            message: "Route not found",
            status: 404,
            path: req.path,
        },
    });
};
exports.notFoundHandler = notFoundHandler;
