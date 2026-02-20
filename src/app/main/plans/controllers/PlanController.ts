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
import { IPlan, Plan } from "../Plan";
import { PlanService } from "../services/PlanService";

@Route("plans")
@Tags("Plan")
@Security("jwt", ["master"])
export class PlanController extends Controller {
  @SuccessResponse("200", "List")
  @Response("500", "Internal Server Error")
  @Get("")
  public async getAll(): Promise<IPlan[]> {
    try {
      this.setStatus(200);
      return await new PlanService().getAll();
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }

  @SuccessResponse("200", "Plan")
  @Response("404", "Not Found")
  @Response("500", "Internal Server Error")
  @Get("{id}")
  public async getById(@Path() id: string): Promise<IPlan | null> {
    try {
      const plan = await new PlanService().getById(id);
      if (!plan) {
        this.setStatus(404);
        throw new Error("Plan not found");
      }
      this.setStatus(200);
      return plan;
    } catch (error) {
      if ((error as Error).message === "Plan not found") {
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
  public async create(@Body() body: Plan): Promise<{ id: string }> {
    try {
      this.setStatus(201);
      const created = await new PlanService().create(body);
      return { id: String(created._id) };
    } catch (error) {
      if ((error as any).code === 11000) {
        this.setStatus(400);
        throw new Error("Plan with this name already exists");
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
    @Body() body: Partial<Plan>
  ): Promise<void> {
    try {
      this.setStatus(200);
      await new PlanService().update(id, body);
      return;
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }

  @SuccessResponse("200", "Deleted")
  @Response("500", "Internal Server Error")
  @Delete("{id}")
  public async delete(@Path() id: string): Promise<void> {
    try {
      this.setStatus(200);
      await new PlanService().delete(id);
      return;
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }
}
