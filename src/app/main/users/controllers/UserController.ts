import {
  Body,
  Controller,
  Delete,
  Get,
  Path,
  Post,
  Put,
  Request,
  Response,
  Route,
  Security,
  SuccessResponse,
  Tags,
} from "tsoa";
import { IUser, User } from "../User";
import { UserService } from "../services/UserService";
import { buildOrgScopeFilter } from "@core/utils/scopeUtils";
import { AuthenticatedRequest } from "@core/middlewares/authHandler";

@Route("users")
@Tags("User")
@Security("jwt", ["admin"])
export class UserController extends Controller {
  @SuccessResponse("200", "List")
  @Response("500", "Internal Server Error")
  @Get("")
  public async getUsers(
    @Request() req: AuthenticatedRequest
  ): Promise<IUser[]> {
    try {
      this.setStatus(200);
      const scopeFilter = await buildOrgScopeFilter(req.user!);
      return await new UserService().getUsers(scopeFilter);
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }

  @SuccessResponse("200", "User")
  @Response("404", "Not Found")
  @Response("500", "Internal Server Error")
  @Get("{id}")
  public async getUser(@Path() id: string): Promise<IUser | null> {
    try {
      const user = await new UserService().getUser(id);
      if (!user) {
        this.setStatus(404);
        throw new Error("User not found");
      }
      this.setStatus(200);
      return user;
    } catch (error) {
      if ((error as Error).message === "User not found") {
        throw error;
      }
      this.setStatus(500);
      throw error;
    }
  }

  @SuccessResponse("201", "Created")
  @Response("400", "Bad Request")
  @Response("500", "Internal Server Error")
  @Post("")
  public async createUser(@Body() body: User): Promise<{ id: string }> {
    try {
      this.setStatus(201);
      const created = await new UserService().createUser(body);
      return { id: String(created._id) };
    } catch (error) {
      if ((error as any).code === 11000) {
        this.setStatus(400);
        throw new Error("User with this email already exists");
      }
      this.setStatus(500);
      throw error;
    }
  }

  @SuccessResponse("200", "Updated")
  @Response("400", "Bad Request")
  @Response("500", "Internal Server Error")
  @Put("{id}")
  public async upsertUser(
    @Path() id: string,
    @Body() body: User
  ): Promise<void> {
    try {
      this.setStatus(200);
      await new UserService().upsertUser(id, body);
      return;
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }

  @SuccessResponse("200", "Deleted")
  @Response("500", "Internal Server Error")
  @Delete("{id}")
  public async deleteUser(@Path() id: string): Promise<void> {
    try {
      this.setStatus(200);
      await new UserService().deleteUser(id);
      return;
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }
}
