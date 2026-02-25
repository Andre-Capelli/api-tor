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
import { ILabel, Label } from "../Label";
import { LabelService } from "../services/LabelService";

interface BatchLabelRequest {
  items: Label[];
}

interface BatchLabelUpsertRequest {
  items: Array<{ key: string; translations: Record<string, string> }>;
}

@Route("labels")
@Tags("System - Labels")
@Security("jwt", ["master"])
export class LabelController extends Controller {
  @SuccessResponse("200", "List")
  @Response("500", "Internal Server Error")
  @Get("")
  public async getAll(): Promise<ILabel[]> {
    try {
      this.setStatus(200);
      return await new LabelService().getAll();
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }

  @SuccessResponse("200", "Label")
  @Response("404", "Not Found")
  @Response("500", "Internal Server Error")
  @Get("{id}")
  public async getById(@Path() id: string): Promise<ILabel | null> {
    try {
      const label = await new LabelService().getById(id);
      if (!label) {
        this.setStatus(404);
        throw new Error("Label not found");
      }
      this.setStatus(200);
      return label;
    } catch (error) {
      if ((error as Error).message === "Label not found") throw error;
      this.setStatus(500);
      throw error;
    }
  }

  @SuccessResponse("201", "Created")
  @Response("400", "Bad Request")
  @Response("500", "Internal Server Error")
  @Post("")
  public async create(@Body() body: Label): Promise<{ id: string }> {
    try {
      this.setStatus(201);
      const created = await new LabelService().create(body);
      return { id: String(created._id) };
    } catch (error) {
      if ((error as any).code === 11000) {
        this.setStatus(400);
        throw new Error("Label with this key already exists");
      }
      this.setStatus(500);
      throw error;
    }
  }

  @SuccessResponse("201", "Batch Created")
  @Response("500", "Internal Server Error")
  @Post("batch")
  public async createBatch(@Body() body: BatchLabelRequest): Promise<{ count: number }> {
    try {
      this.setStatus(201);
      const created = await new LabelService().createBatch(body.items);
      return { count: created.length };
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }

  @SuccessResponse("200", "Updated")
  @Response("500", "Internal Server Error")
  @Put("{id}")
  public async update(
    @Path() id: string,
    @Body() body: Partial<Label>
  ): Promise<void> {
    try {
      this.setStatus(200);
      await new LabelService().update(id, body);
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }

  @SuccessResponse("200", "Batch Upserted")
  @Response("500", "Internal Server Error")
  @Put("batch")
  public async upsertBatch(@Body() body: BatchLabelUpsertRequest): Promise<{ count: number }> {
    try {
      this.setStatus(200);
      const count = await new LabelService().upsertBatch(body.items);
      return { count };
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
      await new LabelService().delete(id);
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }
}
