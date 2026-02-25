import {
  Body,
  Controller,
  Get,
  Put,
  Response,
  Route,
  Security,
  SuccessResponse,
  Tags,
} from "tsoa";
import { ISystemConfig, SystemConfig } from "../SystemConfig";
import { SystemConfigService } from "../services/SystemConfigService";

@Route("config")
@Tags("System - Config")
@Security("jwt", ["master"])
export class SystemConfigController extends Controller {
  @SuccessResponse("200", "Config")
  @Response("500", "Internal Server Error")
  @Get("")
  public async get(): Promise<ISystemConfig | null> {
    try {
      this.setStatus(200);
      return await new SystemConfigService().get();
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }

  @SuccessResponse("200", "Updated")
  @Response("500", "Internal Server Error")
  @Put("")
  public async upsert(@Body() body: Partial<SystemConfig>): Promise<ISystemConfig> {
    try {
      this.setStatus(200);
      return await new SystemConfigService().upsert(body) as unknown as ISystemConfig;
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }
}
