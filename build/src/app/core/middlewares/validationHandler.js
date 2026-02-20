"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEmail = exports.validateObjectId = exports.handleValidationError = void 0;
const tsoa_1 = require("tsoa");
/**
 * TSOA validation error handler
 * Formats TSOA validation errors consistently
 */
const handleValidationError = (err, req, res, next) => {
    if (err instanceof tsoa_1.ValidateError) {
        res.status(422).json({
            error: {
                message: "Validation failed",
                status: 422,
                details: err.fields,
            },
        });
        return;
    }
    next(err);
};
exports.handleValidationError = handleValidationError;
/**
 * Validate MongoDB ObjectId format
 */
const validateObjectId = (paramName = "id") => {
    return (req, res, next) => {
        const id = req.params[paramName];
        const objectIdPattern = /^[0-9a-fA-F]{24}$/;
        if (!objectIdPattern.test(id)) {
            res.status(400).json({
                error: {
                    message: `Invalid ${paramName} format`,
                    status: 400,
                },
            });
            return;
        }
        next();
    };
};
exports.validateObjectId = validateObjectId;
/**
 * Validate email format
 */
const validateEmail = (field = "email") => {
    return (req, res, next) => {
        const email = req.body[field];
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email && !emailPattern.test(email)) {
            res.status(400).json({
                error: {
                    message: `Invalid ${field} format`,
                    status: 400,
                },
            });
            return;
        }
        next();
    };
};
exports.validateEmail = validateEmail;
