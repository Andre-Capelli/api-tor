import User, { IUser, IUserDB } from "../User";

export class UserService {
  public getUsers(): IUser[] {
    return [];
  }

  public async getUser(id: string): Promise<IUser | null> {
    return await User.findById(id);
  }

  public async createUser(data: IUser): Promise<void> {
    await User.create(data);
    return;
  }

  public async upsertUser(data: IUser): Promise<void> {
    const id = data.id;

    await User.updateOne({ _id: id }, data);
    return;
  }

  public async deleteUser(id: IUser["id"]): Promise<void> {
    await User.deleteOne({ _id: id });
    return;
  }
}
