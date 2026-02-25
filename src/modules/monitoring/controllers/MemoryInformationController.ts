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
import { MemoryInformation, IMemoryInformation } from "../models/MemoryInformation";
import { MemoryInformationService } from "../services/MemoryInformationService";

@Route("monitoring/memory-information")
@Tags("Monitoring - Memory")
@Security("jwt")
export class MemoryInformationController extends Controller {
  @SuccessResponse("200", "List")
  @Response("500", "Internal Server Error")
  @Get("machine/{machineId}")
  public async getMemoryInformationByMachineId(
    @Path() machineId: string,
    @Query() limit?: number
  ): Promise<IMemoryInformation[]> {
    try {
      this.setStatus(200);
      return await new MemoryInformationService().getMemoryInformationByMachineId(
        machineId,
        limit || 100
      );
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }

  @SuccessResponse("200", "Latest Memory Information")
  @Response("404", "Not Found")
  @Response("500", "Internal Server Error")
  @Get("machine/{machineId}/latest")
  public async getLatestMemoryInformation(
    @Path() machineId: string
  ): Promise<IMemoryInformation | null> {
    try {
      const data = await new MemoryInformationService().getLatestMemoryInformation(machineId);
      if (!data) {
        this.setStatus(404);
        throw new Error("No memory information found for this machine");
      }
      this.setStatus(200);
      return data;
    } catch (error) {
      if ((error as Error).message.includes("No memory information found")) {
        throw error;
      }
      this.setStatus(500);
      throw error;
    }
  }

  @SuccessResponse("201", "Created")
  @Response("500", "Internal Server Error")
  @Post("machine/{machineId}")
  public async createMemoryInformation(
    @Path() machineId: string,
    @Body() body: Omit<MemoryInformation, "machineId">
  ): Promise<{ id: string }> {
    try {
      this.setStatus(201);
      const created = await new MemoryInformationService().createMemoryInformation(
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
  public async createMemoryInformationBatch(
    @Path() machineId: string,
    @Body() body: Array<Omit<MemoryInformation, "machineId">>
  ): Promise<{ count: number }> {
    try {
      this.setStatus(201);
      const created = await new MemoryInformationService().createMemoryInformationBatch(
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
  public async deleteMemoryInformation(@Path() id: string): Promise<void> {
    try {
      this.setStatus(200);
      await new MemoryInformationService().deleteMemoryInformation(id);
      return;
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }
}
