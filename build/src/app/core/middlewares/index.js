"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEmail = exports.validateObjectId = exports.handleValidationError = exports.sanitizeInput = exports.validateRequest = exports.optionalAuth = exports.authorize = exports.authenticate = exports.notFoundHandler = exports.errorHandler = void 0;
// Error handling middlewares
var errorHandler_1 = require("./errorHandler");
Object.defineProperty(exports, "errorHandler", { enumerable: true, get: function () { return errorHandler_1.errorHandler; } });
Object.defineProperty(exports, "notFoundHandler", { enumerable: true, get: function () { return errorHandler_1.notFoundHandler; } });
// Authentication and authorization middlewares
var authHandler_1 = require("./authHandler");
Object.defineProperty(exports, "authenticate", { enumerable: true, get: function () { return authHandler_1.authenticate; } });
Object.defineProperty(exports, "authorize", { enumerable: true, get: function () { return authHandler_1.authorize; } });
Object.defineProperty(exports, "optionalAuth", { enumerable: true, get: function () { return authHandler_1.optionalAuth; } });
// Validation middlewares
var validationHandler_1 = require("./validationHandler");
Object.defineProperty(exports, "validateRequest", { enumerable: true, get: function () { return validationHandler_1.validateRequest; } });
Object.defineProperty(exports, "sanitizeInput", { enumerable: true, get: function () { return validationHandler_1.sanitizeInput; } });
Object.defineProperty(exports, "handleValidationError", { enumerable: true, get: function () { return validationHandler_1.handleValidationError; } });
Object.defineProperty(exports, "validateObjectId", { enumerable: true, get: function () { return validationHandler_1.validateObjectId; } });
Object.defineProperty(exports, "validateEmail", { enumerable: true, get: function () { return validationHandler_1.validateEmail; } });
