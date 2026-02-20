// Error handling middlewares
export { errorHandler, notFoundHandler } from "./errorHandler";

// Authentication and authorization middlewares
export { authenticate, authorize, optionalAuth } from "./authHandler";
export type { AuthenticatedRequest } from "./authHandler";

// Validation middlewares
export {
  handleValidationError,
  validateObjectId,
  validateEmail,
} from "./validationHandler";
