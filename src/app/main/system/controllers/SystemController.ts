import {
  Controller,
  Get,
  Query,
  Response,
  Route,
  SuccessResponse,
  Tags,
} from "tsoa";
import { SystemService, SystemBundle } from "../services/SystemService";

@Route("system")
@Tags("System")
export class SystemController extends Controller {
  /**
   * Get system bundle - languages, labels, and config resolved to the requested language.
   * @param lang Language code (e.g., "en-US", "pt-BR"). Defaults to "en-US".
   */
  @SuccessResponse("200", "System Bundle")
  @Response("500", "Internal Server Error")
  @Get("")
  public async getSystemBundle(
    @Query() lang?: string
  ): Promise<SystemBundle> {
    try {
      this.setStatus(200);
      return await new SystemService().getBundle(lang || "en-US");
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }
}
