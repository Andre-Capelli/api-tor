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
  SuccessResponse,
  Tags,
} from "tsoa";
import { IMachine, Machine } from "../Machine";
import { MachineService, FullMachineData } from "../services/MachineService";

@Route("machines")
@Tags("Machine")
export class MachineController extends Controller {
  /**
   * Get all registered machines
   */
  @SuccessResponse("200", "List")
  @Response("500", "Internal Server Error")
  @Get("")
  public async getMachines(): Promise<IMachine[]> {
    try {
      this.setStatus(200);
      return await new MachineService().getMachines();
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }

  /**
   * Get a specific machine by database ID
   */
  @SuccessResponse("200", "Machine")
  @Response("404", "Not Found")
  @Response("500", "Internal Server Error")
  @Get("{id}")
  public async getMachine(@Path() id: string): Promise<IMachine | null> {
    try {
      const machine = await new MachineService().getMachine(id);
      if (!machine) {
        this.setStatus(404);
        throw new Error("Machine not found");
      }
      this.setStatus(200);
      return machine;
    } catch (error) {
      if ((error as Error).message === "Machine not found") {
        throw error;
      }
      this.setStatus(500);
      throw error;
    }
  }

  /**
   * Get a machine by machineId (client-generated ID)
   */
  @SuccessResponse("200", "Machine")
  @Response("404", "Not Found")
  @Response("500", "Internal Server Error")
  @Get("by-machine-id/{machineId}")
  public async getMachineByMachineId(
    @Path() machineId: string
  ): Promise<IMachine | null> {
    try {
      const machine = await new MachineService().getMachineByMachineId(
        machineId
      );
      if (!machine) {
        this.setStatus(404);
        throw new Error("Machine not found");
      }
      this.setStatus(200);
      return machine;
    } catch (error) {
      if ((error as Error).message === "Machine not found") {
        throw error;
      }
      this.setStatus(500);
      throw error;
    }
  }

  /**
   * Register a new machine
   */
  @SuccessResponse("201", "Created")
  @Response("400", "Bad Request")
  @Response("500", "Internal Server Error")
  @Post("")
  public async createMachine(@Body() body: Machine): Promise<{ id: string }> {
    try {
      console.log("Creating Machine :: ", body);
      this.setStatus(201);
      const created = await new MachineService().createMachine(body);
      return { id: created._id.toString() };
    } catch (error) {
      if ((error as any).code === 11000) {
        this.setStatus(400);
        throw new Error("Machine with this machineId already exists");
      }
      this.setStatus(500);
      throw error;
    }
  }

  /**
   * Update a machine
   */
  @SuccessResponse("200", "Updated")
  @Response("400", "Bad Request")
  @Response("500", "Internal Server Error")
  @Put("{id}")
  public async upsertMachine(
    @Path() id: string,
    @Body() body: IMachine
  ): Promise<void> {
    try {
      this.setStatus(200);
      await new MachineService().upsertMachine(body);
      return;
    } catch (error) {
      if ((error as Error).message.includes("id is required")) {
        this.setStatus(400);
      } else {
        this.setStatus(500);
      }
      throw error;
    }
  }

  /**
   * Delete a machine
   */
  @SuccessResponse("200", "Deleted")
  @Response("500", "Internal Server Error")
  @Delete("{id}")
  public async deleteMachine(@Path() id: string): Promise<void> {
    try {
      this.setStatus(200);
      await new MachineService().deleteMachine(id);
      return;
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }

  /**
   * Receive full machine data snapshot (main endpoint for client apps)
   * This endpoint processes all machine monitoring data in one request
   */
  @SuccessResponse("201", "Data Processed")
  @Response("400", "Bad Request")
  @Response("500", "Internal Server Error")
  @Post("snapshot")
  public async receiveSnapshot(@Body() body: FullMachineData): Promise<{
    success: boolean;
    machineId: string;
    recordsCreated: number;
  }> {
    try {
      console.log("Receiving machine snapshot for:", body.machineId);
      this.setStatus(201);
      const result = await new MachineService().processFullMachineData(body);
      return {
        success: result.success,
        machineId: body.machineId,
        recordsCreated: result.recordsCreated,
      };
    } catch (error) {
      console.error("Error processing machine snapshot:", error);
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
      const snapshot = await new MachineService().getLatestSnapshot(machineId);
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
      return await new MachineService().getMachineHistory(
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
