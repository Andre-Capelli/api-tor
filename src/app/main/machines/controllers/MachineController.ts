import {
  Body,
  Controller,
  Delete,
  Get,
  Path,
  Post,
  Put,
  Request,
  Response,
  Route,
  Security,
  SuccessResponse,
  Tags,
} from "tsoa";
import { IMachine, Machine } from "../Machine";
import { MachineService } from "../services/MachineService";
import { buildOrgScopeFilter } from "@core/utils/scopeUtils";
import { AuthenticatedRequest } from "@core/middlewares/authHandler";

@Route("machines")
@Tags("Machine")
@Security("jwt")
export class MachineController extends Controller {
  /**
   * Get all registered machines (scoped to user's organization)
   */
  @SuccessResponse("200", "List")
  @Response("500", "Internal Server Error")
  @Get("")
  public async getMachines(
    @Request() req: AuthenticatedRequest
  ): Promise<IMachine[]> {
    try {
      this.setStatus(200);
      const scopeFilter = await buildOrgScopeFilter(req.user!);
      return await new MachineService().getMachines(scopeFilter);
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
      this.setStatus(201);
      const created = await new MachineService().createMachine(body);
      return { id: String(created._id) };
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
    @Body() body: Machine
  ): Promise<void> {
    try {
      this.setStatus(200);
      await new MachineService().upsertMachine(id, body);
      return;
    } catch (error) {
      this.setStatus(500);
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
}
