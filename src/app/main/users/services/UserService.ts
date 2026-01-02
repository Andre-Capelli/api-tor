import UserDB, { IUser, User } from "../User";

export class UserService {
  public async getUsers(): Promise<IUser[]> {
    return await UserDB.find();
  }

  public async getUser(id: string): Promise<IUser | null> {
    return await UserDB.findById(id);
  }

  public async createUser(data: User): Promise<any> {
    // optionally validate/massage data here
    const created = await UserDB.create(data);
    return created;
  }

  public async upsertUser(data: IUser): Promise<void> {
    const id = (data as any).id || (data as any)._id;
    if (!id) throw new Error("id is required for upsert");
    await UserDB.updateOne({ _id: id }, data, { upsert: true });
  }

  public async deleteUser(id: IUser["id"]): Promise<void> {
    await UserDB.deleteOne({ _id: id });
    return;
  }
}
