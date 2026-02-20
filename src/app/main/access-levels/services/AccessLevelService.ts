import AccessLevelDB, { AccessLevel, IAccessLevel, IAccessLevelDB } from "../AccessLevel";

export class AccessLevelService {
  public async getAll(): Promise<IAccessLevel[]> {
    return await AccessLevelDB.find();
  }

  public async getById(id: string): Promise<IAccessLevel | null> {
    return await AccessLevelDB.findById(id);
  }

  public async getByName(name: string): Promise<IAccessLevelDB | null> {
    return await AccessLevelDB.findOne({ name });
  }

  public async getByLevel(level: number): Promise<IAccessLevelDB | null> {
    return await AccessLevelDB.findOne({ level });
  }

  public async create(data: AccessLevel): Promise<IAccessLevelDB> {
    return await AccessLevelDB.create(data);
  }

  public async update(id: string, data: Partial<AccessLevel>): Promise<void> {
    await AccessLevelDB.updateOne({ _id: id }, data);
  }

  public async delete(id: string): Promise<void> {
    const accessLevel = await AccessLevelDB.findById(id);
    if (accessLevel?.isSystem) {
      throw new Error("Cannot delete system access level");
    }
    await AccessLevelDB.deleteOne({ _id: id });
  }
}
