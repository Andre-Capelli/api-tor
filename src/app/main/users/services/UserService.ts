import UserDB, { IUser, IUserDB, User } from "../User";

export class UserService {
  public async getUsers(filter?: Record<string, any>): Promise<IUser[]> {
    return await UserDB.find(filter || {});
  }

  public async getUser(id: string): Promise<IUser | null> {
    return await UserDB.findById(id);
  }

  public async createUser(data: User): Promise<IUserDB> {
    return await UserDB.create(data);
  }

  public async upsertUser(id: string, data: User): Promise<void> {
    await UserDB.updateOne({ _id: id }, data, { upsert: true });
  }

  public async deleteUser(id: string): Promise<void> {
    await UserDB.deleteOne({ _id: id });
  }
}
