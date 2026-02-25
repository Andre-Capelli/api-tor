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
import { NetworkInformation, INetworkInformation } from "../models/NetworkInformation";
import { NetworkInformationService } from "../services/NetworkInformationService";

@Route("monitoring/network-information")
@Tags("Monitoring - Network")
@Security("jwt")
export class NetworkInformationController extends Controller {
  @SuccessResponse("200", "List")
  @Response("500", "Internal Server Error")
  @Get("machine/{machineId}")
  public async getNetworkInformationByMachineId(
    @Path() machineId: string,
    @Query() limit?: number
  ): Promise<INetworkInformation[]> {
    try {
      this.setStatus(200);
      return await new NetworkInformationService().getNetworkInformationByMachineId(
        machineId,
        limit || 100
      );
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }

  @SuccessResponse("200", "Latest Network Information")
  @Response("404", "Not Found")
  @Response("500", "Internal Server Error")
  @Get("machine/{machineId}/latest")
  public async getLatestNetworkInformation(
    @Path() machineId: string
  ): Promise<INetworkInformation | null> {
    try {
      const data = await new NetworkInformationService().getLatestNetworkInformation(machineId);
      if (!data) {
        this.setStatus(404);
        throw new Error("No network information found for this machine");
      }
      this.setStatus(200);
      return data;
    } catch (error) {
      if ((error as Error).message.includes("No network information found")) {
        throw error;
      }
      this.setStatus(500);
      throw error;
    }
  }

  @SuccessResponse("201", "Created")
  @Response("500", "Internal Server Error")
  @Post("machine/{machineId}")
  public async createNetworkInformation(
    @Path() machineId: string,
    @Body() body: Omit<NetworkInformation, "machineId">
  ): Promise<{ id: string }> {
    try {
      this.setStatus(201);
      const created = await new NetworkInformationService().createNetworkInformation(
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
  public async createNetworkInformationBatch(
    @Path() machineId: string,
    @Body() body: Array<Omit<NetworkInformation, "machineId">>
  ): Promise<{ count: number }> {
    try {
      this.setStatus(201);
      const created = await new NetworkInformationService().createNetworkInformationBatch(
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
  public async deleteNetworkInformation(@Path() id: string): Promise<void> {
    try {
      this.setStatus(200);
      await new NetworkInformationService().deleteNetworkInformation(id);
      return;
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }
}
