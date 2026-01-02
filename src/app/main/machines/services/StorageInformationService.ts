import StorageInformationDB, { StorageInformation, IStorageInformation } from "../StorageInformation";

export class StorageInformationService {
  /**
   * Get all storage information records for a specific machine
   */
  public async getStorageInformationByMachineId(
    machineId: string,
    limit: number = 100
  ): Promise<any[]> {
    return await StorageInformationDB.find({ machineId })
      .sort({ timestamp: -1 })
      .limit(limit);
  }

  /**
   * Get storage information by record ID
   */
  public async getStorageInformation(id: string): Promise<any | null> {
    return await StorageInformationDB.findById(id);
  }

  /**
   * Get latest storage information for a machine
   */
  public async getLatestStorageInformation(
    machineId: string
  ): Promise<any | null> {
    return await StorageInformationDB.findOne({ machineId }).sort({ timestamp: -1 });
  }

  /**
   * Create single storage information record
   */
  public async createStorageInformation(
    machineId: string,
    data: Omit<StorageInformation, "machineId">
  ): Promise<any> {
    const created = await StorageInformationDB.create({
      machineId,
      ...data,
    });
    return created;
  }

  /**
   * Create multiple storage information records (batch)
   */
  public async createStorageInformationBatch(
    machineId: string,
    dataArray: Array<Omit<StorageInformation, "machineId">>
  ): Promise<any[]> {
    const records = dataArray.map((data) => ({
      machineId,
      ...data,
    }));
    return await StorageInformationDB.insertMany(records);
  }

  /**
   * Get storage information within date range
   */
  public async getStorageInformationByDateRange(
    machineId: string,
    startDate: Date,
    endDate: Date
  ): Promise<any[]> {
    return await StorageInformationDB.find({
      machineId,
      timestamp: { $gte: startDate, $lte: endDate },
    }).sort({ timestamp: -1 });
  }

  /**
   * Delete storage information by ID
   */
  public async deleteStorageInformation(id: string): Promise<void> {
    await StorageInformationDB.deleteOne({ _id: id });
  }

  /**
   * Delete all storage information for a machine
   */
  public async deleteStorageInformationByMachineId(machineId: string): Promise<number> {
    const result = await StorageInformationDB.deleteMany({ machineId });
    return result.deletedCount || 0;
  }
}
