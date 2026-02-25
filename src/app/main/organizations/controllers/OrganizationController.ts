import {
  Body,
  Controller,
  Delete,
  Get,
  Path,
  Post,
  Put,
  Response,
  Route,
  Security,
  SuccessResponse,
  Tags,
} from "tsoa";
import { IOrganization, Organization } from "../Organization";
import { OrganizationService } from "../services/OrganizationService";

@Route("organizations")
@Tags("Admin - Organizations")
@Security("jwt")
export class OrganizationController extends Controller {
  @SuccessResponse("200", "List")
  @Response("500", "Internal Server Error")
  @Get("")
  public async getAll(): Promise<IOrganization[]> {
    try {
      this.setStatus(200);
      return await new OrganizationService().getAll();
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }

  @SuccessResponse("200", "Organization")
  @Response("404", "Not Found")
  @Response("500", "Internal Server Error")
  @Get("{id}")
  public async getById(@Path() id: string): Promise<IOrganization | null> {
    try {
      const org = await new OrganizationService().getById(id);
      if (!org) {
        this.setStatus(404);
        throw new Error("Organization not found");
      }
      this.setStatus(200);
      return org;
    } catch (error) {
      if ((error as Error).message === "Organization not found") {
        throw error;
      }
      this.setStatus(500);
      throw error;
    }
  }

  @SuccessResponse("200", "Customers")
  @Response("500", "Internal Server Error")
  @Get("company/{companyId}/customers")
  public async getCustomersByCompany(
    @Path() companyId: string
  ): Promise<IOrganization[]> {
    try {
      this.setStatus(200);
      return await new OrganizationService().getCustomersByCompany(companyId);
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }

  @Security("jwt", ["admin"])
  @SuccessResponse("201", "Created")
  @Response("400", "Bad Request")
  @Response("500", "Internal Server Error")
  @Post("")
  public async create(@Body() body: Organization): Promise<{ id: string }> {
    try {
      this.setStatus(201);
      const created = await new OrganizationService().create(body);
      return { id: String(created._id) };
    } catch (error) {
      if ((error as Error).message.includes("must have a parentId")) {
        this.setStatus(400);
        throw error;
      }
      this.setStatus(500);
      throw error;
    }
  }

  @Security("jwt", ["admin"])
  @SuccessResponse("200", "Updated")
  @Response("500", "Internal Server Error")
  @Put("{id}")
  public async update(
    @Path() id: string,
    @Body() body: Partial<Organization>
  ): Promise<void> {
    try {
      this.setStatus(200);
      await new OrganizationService().update(id, body);
      return;
    } catch (error) {
      this.setStatus(500);
      throw error;
    }
  }

  @Security("jwt", ["master"])
  @SuccessResponse("200", "Deleted")
  @Response("400", "Bad Request")
  @Response("500", "Internal Server Error")
  @Delete("{id}")
  public async delete(@Path() id: string): Promise<void> {
    try {
      this.setStatus(200);
      await new OrganizationService().delete(id);
      return;
    } catch (error) {
      if ((error as Error).message.includes("Cannot delete")) {
        this.setStatus(400);
        throw error;
      }
      this.setStatus(500);
      throw error;
    }
  }
}
