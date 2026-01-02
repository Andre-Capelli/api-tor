import CpuInformationDB, { CpuInformation, ICpuInformation } from "../CpuInformation";

export class CpuInformationService {
  /**
   * Get all CPU information records for a specific machine
   */
  public async getCpuInformationByMachineId(
    machineId: string,
    limit: number = 100
  ): Promise<any[]> {
    return await CpuInformationDB.find({ machineId })
      .sort({ timestamp: -1 })
      .limit(limit);
  }

  /**
   * Get CPU information by record ID
   */
  public async getCpuInformation(id: string): Promise<any | null> {
    return await CpuInformationDB.findById(id);
  }

  /**
   * Get latest CPU information for a machine
   */
  public async getLatestCpuInformation(
    machineId: string
  ): Promise<any | null> {
    return await CpuInformationDB.findOne({ machineId }).sort({ timestamp: -1 });
  }

  /**
   * Create single CPU information record
   */
  public async createCpuInformation(
    machineId: string,
    data: Omit<CpuInformation, "machineId">
  ): Promise<any> {
    const created = await CpuInformationDB.create({
      machineId,
      ...data,
    });
    return created;
  }

  /**
   * Create multiple CPU information records (batch)
   */
  public async createCpuInformationBatch(
    machineId: string,
    dataArray: Array<Omit<CpuInformation, "machineId">>
  ): Promise<any[]> {
    const records = dataArray.map((data) => ({
      machineId,
      ...data,
    }));
    return await CpuInformationDB.insertMany(records);
  }

  /**
   * Get CPU information within date range
   */
  public async getCpuInformationByDateRange(
    machineId: string,
    startDate: Date,
    endDate: Date
  ): Promise<any[]> {
    return await CpuInformationDB.find({
      machineId,
      timestamp: { $gte: startDate, $lte: endDate },
    }).sort({ timestamp: -1 });
  }

  /**
   * Delete CPU information by ID
   */
  public async deleteCpuInformation(id: string): Promise<void> {
    await CpuInformationDB.deleteOne({ _id: id });
  }

  /**
   * Delete all CPU information for a machine
   */
  public async deleteCpuInformationByMachineId(machineId: string): Promise<number> {
    const result = await CpuInformationDB.deleteMany({ machineId });
    return result.deletedCount || 0;
  }
}
