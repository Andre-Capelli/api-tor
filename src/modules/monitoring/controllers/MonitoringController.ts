import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Request,
  Response,
  Route,
  Security,
  SuccessResponse,
  Tags,
} from "tsoa";
import { MonitoringService, FullMachineData } from "../services/MonitoringService";
import { buildOrgScopeFilter } from "@core/utils/scopeUtils";
import { AuthenticatedRequest } from "@core/middlewares/authHandler";

@Route("monitoring")
@Tags("Monitoring")
@Security("jwt")
export class MonitoringController extends Controller {
  /**
   * Receive full machine data snapshot (main endpoint for client apps).
   * Validates subscription, allowed modules, and machine limits.
   */
  @SuccessResponse("201", "Data Processed")
  @Response("400", "Bad Request")
  @Response("403", "Subscription or plan validation failed")
  @Response("500", "Internal Server Error")
  @Post("snapshot")
  public async receiveSnapshot(
    @Body() body: FullMachineData,
    @Request() req: AuthenticatedRequest
  ): Promise<{
    success: boolean;
    machineId: string;
    recordsCreated: number;
  }> {
    try {
      this.setStatus(201);
      const organizationId = req.user?.organizationId;
      const result = await new MonitoringService().processFullMachineData(body, organizationId);
      return {
        success: result.success,
        machineId: body.machineId,
        recordsCreated: result.recordsCreated,
      };
    } catch (error) {
      if ((error as Error).message.includes("Snapshot rejected")) {
        this.setStatus(403);
        throw error;
      }
      this.setStatus(500);
      throw error;
    }
  }

  /**
   * Get latest snapshot for a machine
   */
  @SuccessResponse("200", "Latest Snapshot")
  @Response("404", "Not Found")
  @Response("500", "Internal Server Error")
  @Get("{machineId}/latest")
  public async getLatestSnapshot(@Path() machineId: string): Promise<any> {
    try {
      const snapshot = await new MonitoringService().getLatestSnapshot(machineId);
      if (!snapshot) {
        this.setStatus(404);
        throw new Error("No snapshots found for this machine");
      }
      this.setStatus(200);
      return snapshot;
    } catch (error) {
      if ((error as Error).message.includes("No snapshots found")) {
        throw error;
      }
      this.setStatus(500);
      throw error;
    }
  }

  /**
   * Get machine history with optional date range filtering
   */
  @SuccessResponse("200", "Machine History")
  @Response("500", "Internal Server Error")
  @Get("{machineId}/history")
  public async getMachineHistory(
    @Path() machineId: string,
    @Query() startDate?: string,
    @Query() endDate?: string
  ): Promise<any> {
    try {
      const start = startDate ? new Date(startDate) : undefined;
      const end = endDate ? new Date(endDate) : undefined;

      this.setStatus(200);
      return await new MonitoringService().getMachineHistory(
        machineId,
        start,
        end
      );
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }
}
