import { Request, Response, NextFunction } from "express";
import { ValidateError } from "tsoa";

/**
 * Request validation middleware
 * Validates request data against defined schemas
 */
export const validateRequest = (schema: any) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
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
    } catch (error) {
      res.status(400).json({
        error: {
          message: "Validation failed",
          status: 400,
        },
      });
    }
  };
};

/**
 * Sanitize input middleware
 * Removes potentially dangerous characters from input
 */
export const sanitizeInput = (
  req: Request,
  _res: Response,
  next: NextFunction
): void => {
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

/**
 * TSOA validation error handler
 * Formats TSOA validation errors consistently
 */
export const handleValidationError = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (err instanceof ValidateError) {
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

/**
 * Validate MongoDB ObjectId format
 */
export const validateObjectId = (paramName: string = "id") => {
  return (req: Request, res: Response, next: NextFunction): void => {
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

/**
 * Validate email format
 */
export const validateEmail = (field: string = "email") => {
  return (req: Request, res: Response, next: NextFunction): void => {
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
