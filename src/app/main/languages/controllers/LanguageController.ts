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
import { ILanguage, Language } from "../Language";
import { LanguageService } from "../services/LanguageService";

@Route("languages")
@Tags("System - Languages")
@Security("jwt", ["master"])
export class LanguageController extends Controller {
  @SuccessResponse("200", "List")
  @Response("500", "Internal Server Error")
  @Get("")
  public async getAll(): Promise<ILanguage[]> {
    try {
      this.setStatus(200);
      return await new LanguageService().getAll();
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }

  @SuccessResponse("200", "Language")
  @Response("404", "Not Found")
  @Response("500", "Internal Server Error")
  @Get("{id}")
  public async getById(@Path() id: string): Promise<ILanguage | null> {
    try {
      const language = await new LanguageService().getById(id);
      if (!language) {
        this.setStatus(404);
        throw new Error("Language not found");
      }
      this.setStatus(200);
      return language;
    } catch (error) {
      if ((error as Error).message === "Language not found") throw error;
      this.setStatus(500);
      throw error;
    }
  }

  @SuccessResponse("201", "Created")
  @Response("400", "Bad Request")
  @Response("500", "Internal Server Error")
  @Post("")
  public async create(@Body() body: Language): Promise<{ id: string }> {
    try {
      this.setStatus(201);
      const created = await new LanguageService().create(body);
      return { id: String(created._id) };
    } catch (error) {
      if ((error as any).code === 11000) {
        this.setStatus(400);
        throw new Error("Language with this code already exists");
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
    @Body() body: Partial<Language>
  ): Promise<void> {
    try {
      this.setStatus(200);
      await new LanguageService().update(id, body);
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
      await new LanguageService().delete(id);
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }
}
