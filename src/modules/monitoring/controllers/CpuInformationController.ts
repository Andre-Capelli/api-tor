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
import { CpuInformation, ICpuInformation } from "../models/CpuInformation";
import { CpuInformationService } from "../services/CpuInformationService";

@Route("monitoring/cpu-information")
@Tags("Monitoring - CPU")
@Security("jwt")
export class CpuInformationController extends Controller {
  /**
   * Get all CPU information for a machine
   */
  @SuccessResponse("200", "List")
  @Response("500", "Internal Server Error")
  @Get("machine/{machineId}")
  public async getCpuInformationByMachineId(
    @Path() machineId: string,
    @Query() limit?: number
  ): Promise<ICpuInformation[]> {
    try {
      this.setStatus(200);
      return await new CpuInformationService().getCpuInformationByMachineId(
        machineId,
        limit || 100
      );
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }

  /**
   * Get CPU information by ID
   */
  @SuccessResponse("200", "CPU Information")
  @Response("404", "Not Found")
  @Response("500", "Internal Server Error")
  @Get("{id}")
  public async getCpuInformation(@Path() id: string): Promise<ICpuInformation | null> {
    try {
      const data = await new CpuInformationService().getCpuInformation(id);
      if (!data) {
        this.setStatus(404);
        throw new Error("CPU information not found");
      }
      this.setStatus(200);
      return data;
    } catch (error) {
      if ((error as Error).message === "CPU information not found") {
        throw error;
      }
      this.setStatus(500);
      throw error;
    }
  }

  /**
   * Get latest CPU information for a machine
   */
  @SuccessResponse("200", "Latest CPU Information")
  @Response("404", "Not Found")
  @Response("500", "Internal Server Error")
  @Get("machine/{machineId}/latest")
  public async getLatestCpuInformation(
    @Path() machineId: string
  ): Promise<ICpuInformation | null> {
    try {
      const data = await new CpuInformationService().getLatestCpuInformation(machineId);
      if (!data) {
        this.setStatus(404);
        throw new Error("No CPU information found for this machine");
      }
      this.setStatus(200);
      return data;
    } catch (error) {
      if ((error as Error).message.includes("No CPU information found")) {
        throw error;
      }
      this.setStatus(500);
      throw error;
    }
  }

  /**
   * Create single CPU information record
   */
  @SuccessResponse("201", "Created")
  @Response("500", "Internal Server Error")
  @Post("machine/{machineId}")
  public async createCpuInformation(
    @Path() machineId: string,
    @Body() body: Omit<CpuInformation, "machineId">
  ): Promise<{ id: string }> {
    try {
      this.setStatus(201);
      const created = await new CpuInformationService().createCpuInformation(
        machineId,
        body
      );
      return { id: String(created._id) };
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }

  /**
   * Create multiple CPU information records (batch)
   */
  @SuccessResponse("201", "Created")
  @Response("500", "Internal Server Error")
  @Post("machine/{machineId}/batch")
  public async createCpuInformationBatch(
    @Path() machineId: string,
    @Body() body: Array<Omit<CpuInformation, "machineId">>
  ): Promise<{ count: number }> {
    try {
      this.setStatus(201);
      const created = await new CpuInformationService().createCpuInformationBatch(
        machineId,
        body
      );
      return { count: created.length };
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }

  /**
   * Get CPU information by date range
   */
  @SuccessResponse("200", "CPU Information")
  @Response("500", "Internal Server Error")
  @Get("machine/{machineId}/range")
  public async getCpuInformationByDateRange(
    @Path() machineId: string,
    @Query() startDate: string,
    @Query() endDate: string
  ): Promise<ICpuInformation[]> {
    try {
      this.setStatus(200);
      return await new CpuInformationService().getCpuInformationByDateRange(
        machineId,
        new Date(startDate),
        new Date(endDate)
      );
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }

  /**
   * Delete CPU information by ID
   */
  @SuccessResponse("200", "Deleted")
  @Response("500", "Internal Server Error")
  @Delete("{id}")
  public async deleteCpuInformation(@Path() id: string): Promise<void> {
    try {
      this.setStatus(200);
      await new CpuInformationService().deleteCpuInformation(id);
      return;
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }

  /**
   * Delete all CPU information for a machine
   */
  @SuccessResponse("200", "Deleted")
  @Response("500", "Internal Server Error")
  @Delete("machine/{machineId}")
  public async deleteCpuInformationByMachineId(
    @Path() machineId: string
  ): Promise<{ deletedCount: number }> {
    try {
      this.setStatus(200);
      const count = await new CpuInformationService().deleteCpuInformationByMachineId(
        machineId
      );
      return { deletedCount: count };
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }
}
