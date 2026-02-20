import {
  Body,
  Controller,
  Delete,
  Get,
  Path,
  Post,
  Put,
  Query,
  Response,
  Route,
  Security,
  SuccessResponse,
  Tags,
} from "tsoa";
import { ICustomField, CustomField } from "../CustomField";
import { ICustomFieldValue, CustomFieldValue } from "../CustomFieldValue";
import { CustomFieldService } from "../services/CustomFieldService";

@Route("custom-fields")
@Tags("Custom Field")
@Security("jwt")
export class CustomFieldController extends Controller {
  @Security("jwt", ["admin"])
  @SuccessResponse("200", "List")
  @Response("500", "Internal Server Error")
  @Get("")
  public async getAll(
    @Query() organizationId?: string
  ): Promise<ICustomField[]> {
    try {
      this.setStatus(200);
      return await new CustomFieldService().getAll(organizationId);
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }

  @SuccessResponse("200", "Custom Field")
  @Response("404", "Not Found")
  @Response("500", "Internal Server Error")
  @Get("{id}")
  public async getById(@Path() id: string): Promise<ICustomField | null> {
    try {
      const field = await new CustomFieldService().getById(id);
      if (!field) {
        this.setStatus(404);
        throw new Error("Custom field not found");
      }
      this.setStatus(200);
      return field;
    } catch (error) {
      if ((error as Error).message === "Custom field not found") {
        throw error;
      }
      this.setStatus(500);
      throw error;
    }
  }

  @SuccessResponse("200", "Fields for collection")
  @Response("500", "Internal Server Error")
  @Get("target/{targetCollection}")
  public async getByTarget(
    @Path() targetCollection: string,
    @Query() organizationId?: string
  ): Promise<ICustomField[]> {
    try {
      this.setStatus(200);
      return await new CustomFieldService().getByTarget(targetCollection, organizationId);
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }

  @Security("jwt", ["admin"])
  @SuccessResponse("201", "Created")
  @Response("400", "Bad Request")
  @Response("500", "Internal Server Error")
  @Post("")
  public async create(@Body() body: CustomField): Promise<{ id: string }> {
    try {
      this.setStatus(201);
      const created = await new CustomFieldService().create(body);
      return { id: String(created._id) };
    } catch (error) {
      if ((error as any).code === 11000) {
        this.setStatus(400);
        throw new Error("Custom field with this name already exists for this collection");
      }
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
    @Body() body: Partial<CustomField>
  ): Promise<void> {
    try {
      this.setStatus(200);
      await new CustomFieldService().update(id, body);
      return;
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }

  @Security("jwt", ["admin"])
  @SuccessResponse("200", "Deleted")
  @Response("500", "Internal Server Error")
  @Delete("{id}")
  public async delete(@Path() id: string): Promise<void> {
    try {
      this.setStatus(200);
      await new CustomFieldService().delete(id);
      return;
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }

  // --- Field Values ---

  @SuccessResponse("200", "Values")
  @Response("500", "Internal Server Error")
  @Get("values/{targetCollection}/{targetDocumentId}")
  public async getValues(
    @Path() targetCollection: string,
    @Path() targetDocumentId: string
  ): Promise<ICustomFieldValue[]> {
    try {
      this.setStatus(200);
      return await new CustomFieldService().getValues(targetCollection, targetDocumentId);
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }

  @SuccessResponse("201", "Value Set")
  @Response("500", "Internal Server Error")
  @Post("values")
  public async setValue(@Body() body: CustomFieldValue): Promise<{ id: string }> {
    try {
      this.setStatus(201);
      const result = await new CustomFieldService().setValue(body);
      return { id: String(result._id) };
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }

  @SuccessResponse("201", "Values Set")
  @Response("500", "Internal Server Error")
  @Post("values/batch")
  public async setValues(@Body() body: CustomFieldValue[]): Promise<{ count: number }> {
    try {
      this.setStatus(201);
      const results = await new CustomFieldService().setValues(body);
      return { count: results.length };
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }

  @SuccessResponse("200", "Deleted")
  @Response("500", "Internal Server Error")
  @Delete("values/{id}")
  public async deleteValue(@Path() id: string): Promise<void> {
    try {
      this.setStatus(200);
      await new CustomFieldService().deleteValue(id);
      return;
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }
}
