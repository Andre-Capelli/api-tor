import StorageInformationDB, { StorageInformation, IStorageInformationDB } from "../models/StorageInformation";

export class StorageInformationService {
  public async getStorageInformationByMachineId(
    machineId: string,
    limit: number = 100
  ): Promise<IStorageInformationDB[]> {
    return await StorageInformationDB.find({ machineId })
      .sort({ timestamp: -1 })
      .limit(limit);
  }

  public async getStorageInformation(id: string): Promise<IStorageInformationDB | null> {
    return await StorageInformationDB.findById(id);
  }

  public async getLatestStorageInformation(
    machineId: string
  ): Promise<IStorageInformationDB | null> {
    return await StorageInformationDB.findOne({ machineId }).sort({ timestamp: -1 });
  }

  public async createStorageInformation(
    machineId: string,
    data: Omit<StorageInformation, "machineId">
  ): Promise<IStorageInformationDB> {
    return await StorageInformationDB.create({
      machineId,
      ...data,
    });
  }

  public async createStorageInformationBatch(
    machineId: string,
    dataArray: Array<Omit<StorageInformation, "machineId">>
  ): Promise<IStorageInformationDB[]> {
    const records = dataArray.map((data) => ({
      machineId,
      ...data,
    }));
    return await StorageInformationDB.insertMany(records);
  }

  public async getStorageInformationByDateRange(
    machineId: string,
    startDate: Date,
    endDate: Date
  ): Promise<IStorageInformationDB[]> {
    return await StorageInformationDB.find({
      machineId,
      timestamp: { $gte: startDate, $lte: endDate },
    }).sort({ timestamp: -1 });
  }

  public async deleteStorageInformation(id: string): Promise<void> {
    await StorageInformationDB.deleteOne({ _id: id });
  }

  public async deleteStorageInformationByMachineId(machineId: string): Promise<number> {
    const result = await StorageInformationDB.deleteMany({ machineId });
    return result.deletedCount || 0;
  }
}
