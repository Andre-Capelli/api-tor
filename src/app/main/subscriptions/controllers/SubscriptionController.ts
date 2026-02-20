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
import { ISubscription, Subscription } from "../Subscription";
import { SubscriptionService } from "../services/SubscriptionService";
import { ModuleType } from "../../plans/Plan";

@Route("subscriptions")
@Tags("Subscription")
@Security("jwt")
export class SubscriptionController extends Controller {
  @Security("jwt", ["master"])
  @SuccessResponse("200", "List")
  @Response("500", "Internal Server Error")
  @Get("")
  public async getAll(): Promise<ISubscription[]> {
    try {
      this.setStatus(200);
      return await new SubscriptionService().getAll();
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }

  @SuccessResponse("200", "Subscriptions")
  @Response("500", "Internal Server Error")
  @Get("organization/{organizationId}")
  public async getByOrganization(
    @Path() organizationId: string
  ): Promise<ISubscription[]> {
    try {
      this.setStatus(200);
      return await new SubscriptionService().getByOrganization(organizationId);
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }

  @SuccessResponse("200", "Subscription")
  @Response("404", "Not Found")
  @Response("500", "Internal Server Error")
  @Get("{id}")
  public async getById(@Path() id: string): Promise<ISubscription | null> {
    try {
      const sub = await new SubscriptionService().getById(id);
      if (!sub) {
        this.setStatus(404);
        throw new Error("Subscription not found");
      }
      this.setStatus(200);
      return sub;
    } catch (error) {
      if ((error as Error).message === "Subscription not found") {
        throw error;
      }
      this.setStatus(500);
      throw error;
    }
  }

  @Security("jwt", ["admin"])
  @SuccessResponse("201", "Created")
  @Response("500", "Internal Server Error")
  @Post("")
  public async create(@Body() body: Subscription): Promise<{ id: string }> {
    try {
      this.setStatus(201);
      const created = await new SubscriptionService().create(body);
      return { id: String(created._id) };
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }

  @Security("jwt", ["admin"])
  @SuccessResponse("200", "Updated")
  @Response("500", "Internal Server Error")
  @Put("{id}")
  public async update(
    @Path() id: string,
    @Body() body: Partial<Subscription>
  ): Promise<void> {
    try {
      this.setStatus(200);
      await new SubscriptionService().update(id, body);
      return;
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }

  @Security("jwt", ["master"])
  @SuccessResponse("200", "Deleted")
  @Response("500", "Internal Server Error")
  @Delete("{id}")
  public async delete(@Path() id: string): Promise<void> {
    try {
      this.setStatus(200);
      await new SubscriptionService().delete(id);
      return;
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }

  @SuccessResponse("200", "Validation Result")
  @Response("500", "Internal Server Error")
  @Get("validate/{organizationId}/{module}")
  public async validateSubscription(
    @Path() organizationId: string,
    @Path() module: ModuleType
  ): Promise<{ valid: boolean; reason?: string }> {
    try {
      this.setStatus(200);
      const result = await new SubscriptionService().validateSubscription(
        organizationId,
        module
      );
      return { valid: result.valid, reason: result.reason };
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }
}
