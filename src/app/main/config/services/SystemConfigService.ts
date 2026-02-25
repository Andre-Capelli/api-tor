import SystemConfigDB, { SystemConfig, ISystemConfig, ISystemConfigDB } from "../SystemConfig";

export class SystemConfigService {
  public async get(): Promise<ISystemConfig | null> {
    return await SystemConfigDB.findOne();
  }

  public async upsert(data: Partial<SystemConfig>): Promise<ISystemConfigDB> {
    return await SystemConfigDB.findOneAndUpdate(
      {},
      { $set: data },
      { upsert: true, new: true }
    ) as ISystemConfigDB;
  }
}
