import {
  Controller,
  Get,
  Request,
  Route,
  Security,
  SuccessResponse,
  Response,
  Tags,
} from "tsoa";
import { AuthenticatedRequest } from "@core/middlewares/authHandler";

interface TestResponse {
  success: boolean;
  message: string;
  user?: {
    id: string;
    email: string;
    name: string;
    accessLevelName?: string;
  };
  timestamp: string;
}

@Route("test")
@Tags("Dev - Test")
export class TestController extends Controller {
  /**
   * Public endpoint - No authentication required
   * Use this to test if the API is working
   */
  @SuccessResponse("200", "Success")
  @Get("public")
  public async publicEndpoint(): Promise<TestResponse> {
    this.setStatus(200);
    return {
      success: true,
      message: "Public endpoint - No authentication required",
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * Protected endpoint - Requires valid JWT token
   * Send token in Authorization header: "Bearer <your-token>"
   *
   * @example Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   */
  @Security("jwt")
  @SuccessResponse("200", "Authenticated successfully")
  @Response("401", "Unauthorized - Invalid or missing token")
  @Get("protected")
  public async protectedEndpoint(
    @Request() req: AuthenticatedRequest
  ): Promise<TestResponse> {
    this.setStatus(200);
    return {
      success: true,
      message: "Protected endpoint - Authentication successful",
      user: req.user ? {
        id: req.user.id,
        email: req.user.email,
        name: req.user.name,
        accessLevelName: req.user.accessLevelName,
      } : undefined,
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * Admin only endpoint - Requires admin access level or higher
   * Send token via X-Token header
   */
  @Security("jwt", ["admin"])
  @SuccessResponse("200", "Admin access granted")
  @Response("401", "Unauthorized - Invalid or missing token")
  @Response("403", "Forbidden - Insufficient permissions")
  @Get("admin")
  public async adminEndpoint(
    @Request() req: AuthenticatedRequest
  ): Promise<TestResponse> {
    this.setStatus(200);
    return {
      success: true,
      message: "Admin endpoint - You have admin access",
      user: req.user ? {
        id: req.user.id,
        email: req.user.email,
        name: req.user.name,
        accessLevelName: req.user.accessLevelName,
      } : undefined,
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * Moderator or Admin endpoint - Requires moderator or admin access level
   * Send token via X-Token header
   */
  @Security("jwt", ["moderator", "admin"])
  @SuccessResponse("200", "Moderator access granted")
  @Response("401", "Unauthorized - Invalid or missing token")
  @Response("403", "Forbidden - Insufficient permissions")
  @Get("moderator")
  public async moderatorEndpoint(
    @Request() req: AuthenticatedRequest
  ): Promise<TestResponse> {
    this.setStatus(200);
    return {
      success: true,
      message: "Moderator endpoint - You have moderator or admin access",
      user: req.user ? {
        id: req.user.id,
        email: req.user.email,
        name: req.user.name,
        accessLevelName: req.user.accessLevelName,
      } : undefined,
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * Validate token endpoint - Returns token information if valid
   * Send token in Authorization header: "Bearer <your-token>"
   */
  @Security("jwt")
  @SuccessResponse("200", "Token is valid")
  @Response("401", "Unauthorized - Invalid or expired token")
  @Get("validate-token")
  public async validateToken(
    @Request() req: AuthenticatedRequest
  ): Promise<{
    success: boolean;
    message: string;
    tokenInfo: {
      userId: string;
      email: string;
      name: string;
      accessLevelName?: string;
      issuedAt?: number;
      expiresAt?: number;
      issuer?: string;
      audience?: string;
    };
  }> {
    this.setStatus(200);
    return {
      success: true,
      message: "Token is valid",
      tokenInfo: {
        userId: req.user!.id,
        email: req.user!.email,
        name: req.user!.name,
        accessLevelName: req.user!.accessLevelName,
        issuedAt: req.user!.iat,
        expiresAt: req.user!.exp,
        issuer: "api-tor",
        audience: "api-tor-users",
      },
    };
  }
}
