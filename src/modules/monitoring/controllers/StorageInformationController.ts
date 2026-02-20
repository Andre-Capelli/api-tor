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
import { StorageInformation, IStorageInformation } from "../models/StorageInformation";
import { StorageInformationService } from "../services/StorageInformationService";

@Route("monitoring/storage-information")
@Tags("Storage Information")
@Security("jwt")
export class StorageInformationController extends Controller {
  @SuccessResponse("200", "List")
  @Response("500", "Internal Server Error")
  @Get("machine/{machineId}")
  public async getStorageInformationByMachineId(
    @Path() machineId: string,
    @Query() limit?: number
  ): Promise<IStorageInformation[]> {
    try {
      this.setStatus(200);
      return await new StorageInformationService().getStorageInformationByMachineId(
        machineId,
        limit || 100
      );
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }

  @SuccessResponse("200", "Storage Information")
  @Response("404", "Not Found")
  @Response("500", "Internal Server Error")
  @Get("{id}")
  public async getStorageInformation(@Path() id: string): Promise<IStorageInformation | null> {
    try {
      const data = await new StorageInformationService().getStorageInformation(id);
      if (!data) {
        this.setStatus(404);
        throw new Error("Storage information not found");
      }
      this.setStatus(200);
      return data;
    } catch (error) {
      if ((error as Error).message === "Storage information not found") {
        throw error;
      }
      this.setStatus(500);
      throw error;
    }
  }

  @SuccessResponse("200", "Latest Storage Information")
  @Response("404", "Not Found")
  @Response("500", "Internal Server Error")
  @Get("machine/{machineId}/latest")
  public async getLatestStorageInformation(
    @Path() machineId: string
  ): Promise<IStorageInformation | null> {
    try {
      const data = await new StorageInformationService().getLatestStorageInformation(machineId);
      if (!data) {
        this.setStatus(404);
        throw new Error("No storage information found for this machine");
      }
      this.setStatus(200);
      return data;
    } catch (error) {
      if ((error as Error).message.includes("No storage information found")) {
        throw error;
      }
      this.setStatus(500);
      throw error;
    }
  }

  @SuccessResponse("201", "Created")
  @Response("500", "Internal Server Error")
  @Post("machine/{machineId}")
  public async createStorageInformation(
    @Path() machineId: string,
    @Body() body: Omit<StorageInformation, "machineId">
  ): Promise<{ id: string }> {
    try {
      this.setStatus(201);
      const created = await new StorageInformationService().createStorageInformation(
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
  public async createStorageInformationBatch(
    @Path() machineId: string,
    @Body() body: Array<Omit<StorageInformation, "machineId">>
  ): Promise<{ count: number }> {
    try {
      this.setStatus(201);
      const created = await new StorageInformationService().createStorageInformationBatch(
        machineId,
        body
      );
      return { count: created.length };
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }

  @SuccessResponse("200", "Storage Information")
  @Response("500", "Internal Server Error")
  @Get("machine/{machineId}/range")
  public async getStorageInformationByDateRange(
    @Path() machineId: string,
    @Query() startDate: string,
    @Query() endDate: string
  ): Promise<IStorageInformation[]> {
    try {
      this.setStatus(200);
      return await new StorageInformationService().getStorageInformationByDateRange(
        machineId,
        new Date(startDate),
        new Date(endDate)
      );
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }

  @SuccessResponse("200", "Deleted")
  @Response("500", "Internal Server Error")
  @Delete("{id}")
  public async deleteStorageInformation(@Path() id: string): Promise<void> {
    try {
      this.setStatus(200);
      await new StorageInformationService().deleteStorageInformation(id);
      return;
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }

  @SuccessResponse("200", "Deleted")
  @Response("500", "Internal Server Error")
  @Delete("machine/{machineId}")
  public async deleteStorageInformationByMachineId(
    @Path() machineId: string
  ): Promise<{ deletedCount: number }> {
    try {
      this.setStatus(200);
      const count = await new StorageInformationService().deleteStorageInformationByMachineId(
        machineId
      );
      return { deletedCount: count };
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }
}
