"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEmail = exports.validateObjectId = exports.handleValidationError = exports.sanitizeInput = exports.validateRequest = void 0;
const tsoa_1 = require("tsoa");
/**
 * Request validation middleware
 * Validates request data against defined schemas
 */
const validateRequest = (schema) => {
    return async (req, res, next) => {
        try {
            // TODO: Implement validation logic using your preferred validation library
            // Examples: Joi, Yup, Zod, class-validator, etc.
            //
            // Example with Joi:
            // const { error, value } = schema.validate(req.body, { abortEarly: false });
            // if (error) {
            //   res.status(400).json({
            //     error: {
            //       message: 'Validation failed',
            //       status: 400,
            //       details: error.details.map(d => d.message)
            //     }
            //   });
            //   return;
            // }
            // req.body = value;
            console.warn("Validation middleware is not fully implemented yet");
            next();
        }
        catch (error) {
            res.status(400).json({
                error: {
                    message: "Validation failed",
                    status: 400,
                },
            });
        }
    };
};
exports.validateRequest = validateRequest;
/**
 * Sanitize input middleware
 * Removes potentially dangerous characters from input
 */
const sanitizeInput = (req, _res, next) => {
    // TODO: Implement sanitization logic
    // Example: Remove HTML tags, escape special characters, etc.
    //
    // const sanitize = (obj: any): any => {
    //   if (typeof obj === 'string') {
    //     return obj.trim().replace(/<[^>]*>/g, '');
    //   }
    //   if (Array.isArray(obj)) {
    //     return obj.map(sanitize);
    //   }
    //   if (obj && typeof obj === 'object') {
    //     return Object.keys(obj).reduce((acc, key) => {
    //       acc[key] = sanitize(obj[key]);
    //       return acc;
    //     }, {} as any);
    //   }
    //   return obj;
    // };
    //
    // req.body = sanitize(req.body);
    // req.query = sanitize(req.query);
    // req.params = sanitize(req.params);
    next();
};
exports.sanitizeInput = sanitizeInput;
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
