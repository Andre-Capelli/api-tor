import {
  Body,
  Controller,
  Delete,
  Get,
  Path,
  Post,
  Put,
  Response,
  Route,
  Security,
  SuccessResponse,
  Tags,
} from "tsoa";
import { IAccessLevel, AccessLevel } from "../AccessLevel";
import { AccessLevelService } from "../services/AccessLevelService";

@Route("access-levels")
@Tags("Admin - Access Levels")
@Security("jwt", ["master"])
export class AccessLevelController extends Controller {
  @SuccessResponse("200", "List")
  @Response("500", "Internal Server Error")
  @Get("")
  public async getAll(): Promise<IAccessLevel[]> {
    try {
      this.setStatus(200);
      return await new AccessLevelService().getAll();
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }

  @SuccessResponse("200", "Access Level")
  @Response("404", "Not Found")
  @Response("500", "Internal Server Error")
  @Get("{id}")
  public async getById(@Path() id: string): Promise<IAccessLevel | null> {
    try {
      const accessLevel = await new AccessLevelService().getById(id);
      if (!accessLevel) {
        this.setStatus(404);
        throw new Error("Access level not found");
      }
      this.setStatus(200);
      return accessLevel;
    } catch (error) {
      if ((error as Error).message === "Access level not found") {
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
  public async create(@Body() body: AccessLevel): Promise<{ id: string }> {
    try {
      this.setStatus(201);
      const created = await new AccessLevelService().create(body);
      return { id: String(created._id) };
    } catch (error) {
      if ((error as any).code === 11000) {
        this.setStatus(400);
        throw new Error("Access level with this name or level already exists");
      }
      this.setStatus(500);
      throw error;
    }
  }

  @SuccessResponse("200", "Updated")
  @Response("500", "Internal Server Error")
  @Put("{id}")
  public async update(
    @Path() id: string,
    @Body() body: Partial<AccessLevel>
  ): Promise<void> {
    try {
      this.setStatus(200);
      await new AccessLevelService().update(id, body);
      return;
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }

  @SuccessResponse("200", "Deleted")
  @Response("400", "Bad Request")
  @Response("500", "Internal Server Error")
  @Delete("{id}")
  public async delete(@Path() id: string): Promise<void> {
    try {
      this.setStatus(200);
      await new AccessLevelService().delete(id);
      return;
    } catch (error) {
      if ((error as Error).message === "Cannot delete system access level") {
        this.setStatus(400);
        throw error;
      }
      this.setStatus(500);
      throw error;
    }
  }
}
