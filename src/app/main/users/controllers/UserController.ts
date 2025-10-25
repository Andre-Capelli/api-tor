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
  SuccessResponse,
  Tags,
} from "tsoa";
import { IUser } from "../User";
import { UserService } from "../services/UserService";

@Route("users")
@Tags("User")
export class UserController extends Controller {
  @SuccessResponse("200", "List")
  @Get("")
  public async getUsers(): Promise<IUser[]> {
    this.setStatus(200);
    return new UserService().getUsers();
  }

  @SuccessResponse("200", "User")
  @Get("{id}")
  public async getUser(@Path() id: string): Promise<IUser | null> {
    this.setStatus(200);
    return new UserService().getUser(id);
  }

  @SuccessResponse("201", "Created")
  @Post("")
  public async createUser(@Body() body: IUser): Promise<void> {
    this.setStatus(200);
    new UserService().createUser(body);
    return;
  }

  @SuccessResponse("200", "Updated")
  @Put("{id}")
  public async upsertUser(
    @Path() id: string,
    @Body() body: IUser
  ): Promise<void> {
    this.setStatus(200);
    new UserService().upsertUser(body);
    return;
  }

  @SuccessResponse("200", "Deleted")
  @Delete("{id}")
  public async deleteUser(@Path() id: string): Promise<void> {
    this.setStatus(200);
    new UserService().deleteUser(id);
    return;
  }
}
