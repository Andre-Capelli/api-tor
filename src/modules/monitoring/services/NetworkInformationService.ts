import NetworkInformationDB, { NetworkInformation, INetworkInformationDB } from "../models/NetworkInformation";

export class NetworkInformationService {
  public async getNetworkInformationByMachineId(
    machineId: string,
    limit: number = 100
  ): Promise<INetworkInformationDB[]> {
    return await NetworkInformationDB.find({ machineId })
      .sort({ timestamp: -1 })
      .limit(limit);
  }

  public async getNetworkInformation(id: string): Promise<INetworkInformationDB | null> {
    return await NetworkInformationDB.findById(id);
  }

  public async getLatestNetworkInformation(
    machineId: string
  ): Promise<INetworkInformationDB | null> {
    return await NetworkInformationDB.findOne({ machineId }).sort({ timestamp: -1 });
  }

  public async createNetworkInformation(
    machineId: string,
    data: Omit<NetworkInformation, "machineId">
  ): Promise<INetworkInformationDB> {
    return await NetworkInformationDB.create({
      machineId,
      ...data,
    });
  }

  public async createNetworkInformationBatch(
    machineId: string,
    dataArray: Array<Omit<NetworkInformation, "machineId">>
  ): Promise<INetworkInformationDB[]> {
    const records = dataArray.map((data) => ({
      machineId,
      ...data,
    }));
    return await NetworkInformationDB.insertMany(records);
  }

  public async getNetworkInformationByDateRange(
    machineId: string,
    startDate: Date,
    endDate: Date
  ): Promise<INetworkInformationDB[]> {
    return await NetworkInformationDB.find({
      machineId,
      timestamp: { $gte: startDate, $lte: endDate },
    }).sort({ timestamp: -1 });
  }

  public async deleteNetworkInformation(id: string): Promise<void> {
    await NetworkInformationDB.deleteOne({ _id: id });
  }

  public async deleteNetworkInformationByMachineId(machineId: string): Promise<number> {
    const result = await NetworkInformationDB.deleteMany({ machineId });
    return result.deletedCount || 0;
  }
}
