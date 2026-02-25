import {
  Body,
  Controller,
  Delete,
  Get,
  Path,
  Post,
  Query,
  Response,
  Route,
  Security,
  SuccessResponse,
  Tags,
} from "tsoa";
import { AntivirusInformation, IAntivirusInformation } from "../models/AntivirusInformation";
import { AntivirusInformationService } from "../services/AntivirusInformationService";

@Route("monitoring/antivirus-information")
@Tags("Monitoring - Antivirus")
@Security("jwt")
export class AntivirusInformationController extends Controller {
  @SuccessResponse("200", "List")
  @Response("500", "Internal Server Error")
  @Get("machine/{machineId}")
  public async getAntivirusInformationByMachineId(
    @Path() machineId: string,
    @Query() limit?: number
  ): Promise<IAntivirusInformation[]> {
    try {
      this.setStatus(200);
      return await new AntivirusInformationService().getAntivirusInformationByMachineId(
        machineId,
        limit || 100
      );
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }

  @SuccessResponse("200", "Latest Antivirus Information")
  @Response("404", "Not Found")
  @Response("500", "Internal Server Error")
  @Get("machine/{machineId}/latest")
  public async getLatestAntivirusInformation(
    @Path() machineId: string
  ): Promise<IAntivirusInformation | null> {
    try {
      const data = await new AntivirusInformationService().getLatestAntivirusInformation(machineId);
      if (!data) {
        this.setStatus(404);
        throw new Error("No antivirus information found for this machine");
      }
      this.setStatus(200);
      return data;
    } catch (error) {
      if ((error as Error).message.includes("No antivirus information found")) {
        throw error;
      }
      this.setStatus(500);
      throw error;
    }
  }

  @SuccessResponse("201", "Created")
  @Response("500", "Internal Server Error")
  @Post("machine/{machineId}")
  public async createAntivirusInformation(
    @Path() machineId: string,
    @Body() body: Omit<AntivirusInformation, "machineId">
  ): Promise<{ id: string }> {
    try {
      this.setStatus(201);
      const created = await new AntivirusInformationService().createAntivirusInformation(
        machineId,
        body
      );
      return { id: String(created._id) };
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }

  @SuccessResponse("201", "Created")
  @Response("500", "Internal Server Error")
  @Post("machine/{machineId}/batch")
  public async createAntivirusInformationBatch(
    @Path() machineId: string,
    @Body() body: Array<Omit<AntivirusInformation, "machineId">>
  ): Promise<{ count: number }> {
    try {
      this.setStatus(201);
      const created = await new AntivirusInformationService().createAntivirusInformationBatch(
        machineId,
        body
      );
      return { count: created.length };
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }

  @SuccessResponse("200", "Deleted")
  @Response("500", "Internal Server Error")
  @Delete("{id}")
  public async deleteAntivirusInformation(@Path() id: string): Promise<void> {
    try {
      this.setStatus(200);
      await new AntivirusInformationService().deleteAntivirusInformation(id);
      return;
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }
}
