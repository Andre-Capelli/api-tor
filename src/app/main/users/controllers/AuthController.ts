import {
  Body,
  Controller,
  Post,
  Response,
  Route,
  SuccessResponse,
  Tags,
} from "tsoa";
import UserDB from "../User";
import AccessLevelDB from "@main/access-levels/AccessLevel";
import OrganizationDB from "@main/organizations/Organization";
import {
  generateTokenPair,
  verifyRefreshToken,
  JwtPayload,
} from "@core/utils/jwtUtils";

interface LoginRequest {
  email: string;
  password: string;
}

interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  organizationId?: string;
}

interface RefreshTokenRequest {
  refreshToken: string;
}

interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
    organizationId?: string;
    organizationType?: string;
    accessLevelName?: string;
    accessLevel?: number;
  };
}

/**
 * Builds the enriched JWT payload from user + access level + organization data.
 */
async function buildTokenPayload(user: any): Promise<Omit<JwtPayload, "iat" | "exp">> {
  const payload: Omit<JwtPayload, "iat" | "exp"> = {
    id: String(user._id),
    email: user.email,
    name: user.name,
    role: user.role || "user",
  };

  // Populate access level data
  if (user.accessLevelId) {
    const accessLevel = await AccessLevelDB.findById(user.accessLevelId);
    if (accessLevel) {
      payload.accessLevelName = accessLevel.name;
      payload.accessLevel = accessLevel.level;
      payload.accessLevelScope = accessLevel.scope;
      payload.role = accessLevel.name;
    }
  } else if (user.role) {
    // Backward compat: map old role string to access level
    const accessLevel = await AccessLevelDB.findOne({ name: user.role });
    if (accessLevel) {
      payload.accessLevelName = accessLevel.name;
      payload.accessLevel = accessLevel.level;
      payload.accessLevelScope = accessLevel.scope;
    }
  }

  // Populate organization data
  if (user.organizationId) {
    const org = await OrganizationDB.findById(user.organizationId);
    if (org) {
      payload.organizationId = String(org._id);
      payload.organizationType = org.type;
    }
  }

  return payload;
}

@Route("auth")
@Tags("Authentication")
export class AuthController extends Controller {
  /**
   * User login - Generate JWT tokens
   */
  @SuccessResponse("200", "Login successful")
  @Response("401", "Invalid credentials")
  @Response("500", "Internal Server Error")
  @Post("login")
  public async login(@Body() body: LoginRequest): Promise<AuthResponse> {
    try {
      const { email, password } = body;

      const user = await UserDB.findOne({ email }).select("+password");

      if (!user) {
        this.setStatus(401);
        throw new Error("Invalid email or password");
      }

      if (!user.isActive) {
        this.setStatus(401);
        throw new Error("Account is inactive");
      }

      const isPasswordValid = await user.comparePassword(password);

      if (!isPasswordValid) {
        this.setStatus(401);
        throw new Error("Invalid email or password");
      }

      const tokenPayload = await buildTokenPayload(user);
      const tokens = generateTokenPair(tokenPayload);

      this.setStatus(200);
      return {
        ...tokens,
        user: {
          id: String(user._id),
          name: user.name,
          email: user.email,
          role: tokenPayload.role || "user",
          organizationId: tokenPayload.organizationId,
          organizationType: tokenPayload.organizationType,
          accessLevelName: tokenPayload.accessLevelName,
          accessLevel: tokenPayload.accessLevel,
        },
      };
    } catch (error) {
      console.error("Login error:", error);
      if ((error as Error).message.includes("Invalid") || (error as Error).message.includes("inactive")) {
        throw error;
      }
      this.setStatus(500);
      throw new Error("Login failed");
    }
  }

  /**
   * User registration - Create new user and generate tokens
   */
  @SuccessResponse("201", "User registered successfully")
  @Response("400", "Bad Request")
  @Response("500", "Internal Server Error")
  @Post("register")
  public async register(@Body() body: RegisterRequest): Promise<AuthResponse> {
    try {
      const { name, email, password, organizationId } = body;

      const existingUser = await UserDB.findOne({ email });

      if (existingUser) {
        this.setStatus(400);
        throw new Error("User with this email already exists");
      }

      // Default to "user" access level
      const defaultAccessLevel = await AccessLevelDB.findOne({ name: "user" });

      const user = await UserDB.create({
        name,
        email,
        password,
        role: "user",
        isActive: true,
        organizationId: organizationId || null,
        accessLevelId: defaultAccessLevel ? String(defaultAccessLevel._id) : null,
      });

      const tokenPayload = await buildTokenPayload(user);
      const tokens = generateTokenPair(tokenPayload);

      this.setStatus(201);
      return {
        ...tokens,
        user: {
          id: String(user._id),
          name: user.name,
          email: user.email,
          role: tokenPayload.role || "user",
          organizationId: tokenPayload.organizationId,
          organizationType: tokenPayload.organizationType,
          accessLevelName: tokenPayload.accessLevelName,
          accessLevel: tokenPayload.accessLevel,
        },
      };
    } catch (error) {
      console.error("Registration error:", error);
      if ((error as any).code === 11000) {
        this.setStatus(400);
        throw new Error("User with this email already exists");
      }
      if ((error as Error).message.includes("already exists")) {
        throw error;
      }
      this.setStatus(500);
      throw new Error("Registration failed");
    }
  }

  /**
   * Refresh access token using refresh token
   */
  @SuccessResponse("200", "Token refreshed successfully")
  @Response("401", "Invalid or expired refresh token")
  @Response("500", "Internal Server Error")
  @Post("refresh")
  public async refreshToken(
    @Body() body: RefreshTokenRequest
  ): Promise<{ accessToken: string; refreshToken: string }> {
    try {
      const { refreshToken } = body;

      if (!refreshToken) {
        this.setStatus(401);
        throw new Error("Refresh token is required");
      }

      const decoded = verifyRefreshToken(refreshToken);

      const user = await UserDB.findById(decoded.id);

      if (!user) {
        this.setStatus(401);
        throw new Error("User not found");
      }

      if (!user.isActive) {
        this.setStatus(401);
        throw new Error("Account is inactive");
      }

      // Re-populate enriched payload for new tokens
      const tokenPayload = await buildTokenPayload(user);
      const tokens = generateTokenPair(tokenPayload);

      this.setStatus(200);
      return tokens;
    } catch (error) {
      console.error("Token refresh error:", error);
      const errorMessage = (error as Error).message || "Token refresh failed";
      this.setStatus(401);
      throw new Error(errorMessage);
    }
  }
}
