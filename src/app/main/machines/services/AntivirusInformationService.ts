import AntivirusInformationDB, { AntivirusInformation, IAntivirusInformation } from "../AntivirusInformation";

export class AntivirusInformationService {
  /**
   * Get all antivirus information records for a specific machine
   */
  public async getAntivirusInformationByMachineId(
    machineId: string,
    limit: number = 100
  ): Promise<any[]> {
    return await AntivirusInformationDB.find({ machineId })
      .sort({ timestamp: -1 })
      .limit(limit);
  }

  /**
   * Get antivirus information by record ID
   */
  public async getAntivirusInformation(id: string): Promise<any | null> {
    return await AntivirusInformationDB.findById(id);
  }

  /**
   * Get latest antivirus information for a machine
   */
  public async getLatestAntivirusInformation(
    machineId: string
  ): Promise<any | null> {
    return await AntivirusInformationDB.findOne({ machineId }).sort({ timestamp: -1 });
  }

  /**
   * Create single antivirus information record
   */
  public async createAntivirusInformation(
    machineId: string,
    data: Omit<AntivirusInformation, "machineId">
  ): Promise<any> {
    const created = await AntivirusInformationDB.create({
      machineId,
      ...data,
    });
    return created;
  }

  /**
   * Create multiple antivirus information records (batch)
   */
  public async createAntivirusInformationBatch(
    machineId: string,
    dataArray: Array<Omit<AntivirusInformation, "machineId">>
  ): Promise<any[]> {
    const records = dataArray.map((data) => ({
      machineId,
      ...data,
    }));
    return await AntivirusInformationDB.insertMany(records);
  }

  /**
   * Get antivirus information within date range
   */
  public async getAntivirusInformationByDateRange(
    machineId: string,
    startDate: Date,
    endDate: Date
  ): Promise<any[]> {
    return await AntivirusInformationDB.find({
      machineId,
      timestamp: { $gte: startDate, $lte: endDate },
    }).sort({ timestamp: -1 });
  }

  /**
   * Delete antivirus information by ID
   */
  public async deleteAntivirusInformation(id: string): Promise<void> {
    await AntivirusInformationDB.deleteOne({ _id: id });
  }

  /**
   * Delete all antivirus information for a machine
   */
  public async deleteAntivirusInformationByMachineId(machineId: string): Promise<number> {
    const result = await AntivirusInformationDB.deleteMany({ machineId });
    return result.deletedCount || 0;
  }
}
