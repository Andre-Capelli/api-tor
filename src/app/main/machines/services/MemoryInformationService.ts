import MemoryInformationDB, { MemoryInformation, IMemoryInformation } from "../MemoryInformation";

export class MemoryInformationService {
  /**
   * Get all memory information records for a specific machine
   */
  public async getMemoryInformationByMachineId(
    machineId: string,
    limit: number = 100
  ): Promise<any[]> {
    return await MemoryInformationDB.find({ machineId })
      .sort({ timestamp: -1 })
      .limit(limit);
  }

  /**
   * Get memory information by record ID
   */
  public async getMemoryInformation(id: string): Promise<any | null> {
    return await MemoryInformationDB.findById(id);
  }

  /**
   * Get latest memory information for a machine
   */
  public async getLatestMemoryInformation(
    machineId: string
  ): Promise<any | null> {
    return await MemoryInformationDB.findOne({ machineId }).sort({ timestamp: -1 });
  }

  /**
   * Create single memory information record
   */
  public async createMemoryInformation(
    machineId: string,
    data: Omit<MemoryInformation, "machineId">
  ): Promise<any> {
    const created = await MemoryInformationDB.create({
      machineId,
      ...data,
    });
    return created;
  }

  /**
   * Create multiple memory information records (batch)
   */
  public async createMemoryInformationBatch(
    machineId: string,
    dataArray: Array<Omit<MemoryInformation, "machineId">>
  ): Promise<any[]> {
    const records = dataArray.map((data) => ({
      machineId,
      ...data,
    }));
    return await MemoryInformationDB.insertMany(records);
  }

  /**
   * Get memory information within date range
   */
  public async getMemoryInformationByDateRange(
    machineId: string,
    startDate: Date,
    endDate: Date
  ): Promise<any[]> {
    return await MemoryInformationDB.find({
      machineId,
      timestamp: { $gte: startDate, $lte: endDate },
    }).sort({ timestamp: -1 });
  }

  /**
   * Delete memory information by ID
   */
  public async deleteMemoryInformation(id: string): Promise<void> {
    await MemoryInformationDB.deleteOne({ _id: id });
  }

  /**
   * Delete all memory information for a machine
   */
  public async deleteMemoryInformationByMachineId(machineId: string): Promise<number> {
    const result = await MemoryInformationDB.deleteMany({ machineId });
    return result.deletedCount || 0;
  }
}
