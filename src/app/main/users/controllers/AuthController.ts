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
import {
  generateTokenPair,
  verifyRefreshToken,
} from "../../../core/utils/jwtUtils";

interface LoginRequest {
  email: string;
  password: string;
}

interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  role?: string;
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
  };
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

      // Find user and include password field
      const user = await UserDB.findOne({ email }).select("+password");

      if (!user) {
        this.setStatus(401);
        throw new Error("Invalid email or password");
      }

      // Check if user is active
      if (!user.isActive) {
        this.setStatus(401);
        throw new Error("Account is inactive");
      }

      // Verify password
      const isPasswordValid = await user.comparePassword(password);

      if (!isPasswordValid) {
        this.setStatus(401);
        throw new Error("Invalid email or password");
      }

      // Generate JWT tokens
      const tokens = generateTokenPair({
        id: (user._id as any).toString(),
        email: user.email,
        name: user.name,
        role: user.role || "user",
      });

      this.setStatus(200);
      return {
        ...tokens,
        user: {
          id: (user._id as any).toString(),
          name: user.name,
          email: user.email,
          role: user.role || "user",
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
      const { name, email, password, role } = body;

      // Check if user already exists
      const existingUser = await UserDB.findOne({ email });

      if (existingUser) {
        this.setStatus(400);
        throw new Error("User with this email already exists");
      }

      // Create new user (password will be hashed automatically by pre-save hook)
      const user = await UserDB.create({
        name,
        email,
        password,
        role: role || "user",
        isActive: true,
      });

      // Generate JWT tokens
      const tokens = generateTokenPair({
        id: (user._id as any).toString(),
        email: user.email,
        name: user.name,
        role: user.role || "user",
      });

      this.setStatus(201);
      return {
        ...tokens,
        user: {
          id: (user._id as any).toString(),
          name: user.name,
          email: user.email,
          role: user.role || "user",
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

      // Verify refresh token
      const decoded = verifyRefreshToken(refreshToken);

      // Verify user still exists and is active
      const user = await UserDB.findById(decoded.id);

      if (!user) {
        this.setStatus(401);
        throw new Error("User not found");
      }

      if (!user.isActive) {
        this.setStatus(401);
        throw new Error("Account is inactive");
      }

      // Generate new token pair
      const tokens = generateTokenPair({
        id: (user._id as any).toString(),
        email: user.email,
        name: user.name,
        role: user.role || "user",
      });

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
