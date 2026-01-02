import NetworkInformationDB, { NetworkInformation, INetworkInformation } from "../NetworkInformation";

export class NetworkInformationService {
  /**
   * Get all network information records for a specific machine
   */
  public async getNetworkInformationByMachineId(
    machineId: string,
    limit: number = 100
  ): Promise<any[]> {
    return await NetworkInformationDB.find({ machineId })
      .sort({ timestamp: -1 })
      .limit(limit);
  }

  /**
   * Get network information by record ID
   */
  public async getNetworkInformation(id: string): Promise<any | null> {
    return await NetworkInformationDB.findById(id);
  }

  /**
   * Get latest network information for a machine
   */
  public async getLatestNetworkInformation(
    machineId: string
  ): Promise<any | null> {
    return await NetworkInformationDB.findOne({ machineId }).sort({ timestamp: -1 });
  }

  /**
   * Create single network information record
   */
  public async createNetworkInformation(
    machineId: string,
    data: Omit<NetworkInformation, "machineId">
  ): Promise<any> {
    const created = await NetworkInformationDB.create({
      machineId,
      ...data,
    });
    return created;
  }

  /**
   * Create multiple network information records (batch)
   */
  public async createNetworkInformationBatch(
    machineId: string,
    dataArray: Array<Omit<NetworkInformation, "machineId">>
  ): Promise<any[]> {
    const records = dataArray.map((data) => ({
      machineId,
      ...data,
    }));
    return await NetworkInformationDB.insertMany(records);
  }

  /**
   * Get network information within date range
   */
  public async getNetworkInformationByDateRange(
    machineId: string,
    startDate: Date,
    endDate: Date
  ): Promise<any[]> {
    return await NetworkInformationDB.find({
      machineId,
      timestamp: { $gte: startDate, $lte: endDate },
    }).sort({ timestamp: -1 });
  }

  /**
   * Delete network information by ID
   */
  public async deleteNetworkInformation(id: string): Promise<void> {
    await NetworkInformationDB.deleteOne({ _id: id });
  }

  /**
   * Delete all network information for a machine
   */
  public async deleteNetworkInformationByMachineId(machineId: string): Promise<number> {
    const result = await NetworkInformationDB.deleteMany({ machineId });
    return result.deletedCount || 0;
  }
}
