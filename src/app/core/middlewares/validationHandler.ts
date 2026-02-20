import { Request, Response, NextFunction } from "express";
import { ValidateError } from "tsoa";

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
