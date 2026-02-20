"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
// src/app.ts
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const routes_1 = require("../build/routes");
const express_1 = __importStar(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const middlewares_1 = require("./app/core/middlewares");
exports.app = (0, express_1.default)();
// Security headers
exports.app.use((0, helmet_1.default)());
// CORS
exports.app.use((0, cors_1.default)());
// Body parser middleware
exports.app.use((0, express_1.urlencoded)({
    extended: true,
}));
exports.app.use((0, express_1.json)());
// Swagger documentation
exports.app.use("/docs", swagger_ui_express_1.default.serve, async (_req, res) => {
    const swaggerDoc = await Promise.resolve().then(() => __importStar(require("../build/swagger.json")));
    const spec = {
        ...swaggerDoc,
        servers: [
            { url: "http://localhost:7500/api/v1", description: "DEV" },
            { url: "http://77.237.245.173:7500/api/v1", description: "LIVE" },
        ],
    };
    return res.send(swagger_ui_express_1.default.generateHTML(spec));
});
// Register TSOA routes
(0, routes_1.RegisterRoutes)(exports.app);
// Handle TSOA validation errors
exports.app.use(middlewares_1.handleValidationError);
// 404 handler for undefined routes
exports.app.use(middlewares_1.notFoundHandler);
// Global error handler (must be last)
exports.app.use(middlewares_1.errorHandler);
