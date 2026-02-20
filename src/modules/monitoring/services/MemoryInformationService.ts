import MemoryInformationDB, { MemoryInformation, IMemoryInformationDB } from "../models/MemoryInformation";

export class MemoryInformationService {
  public async getMemoryInformationByMachineId(
    machineId: string,
    limit: number = 100
  ): Promise<IMemoryInformationDB[]> {
    return await MemoryInformationDB.find({ machineId })
      .sort({ timestamp: -1 })
      .limit(limit);
  }

  public async getMemoryInformation(id: string): Promise<IMemoryInformationDB | null> {
    return await MemoryInformationDB.findById(id);
  }

  public async getLatestMemoryInformation(
    machineId: string
  ): Promise<IMemoryInformationDB | null> {
    return await MemoryInformationDB.findOne({ machineId }).sort({ timestamp: -1 });
  }

  public async createMemoryInformation(
    machineId: string,
    data: Omit<MemoryInformation, "machineId">
  ): Promise<IMemoryInformationDB> {
    return await MemoryInformationDB.create({
      machineId,
      ...data,
    });
  }

  public async createMemoryInformationBatch(
    machineId: string,
    dataArray: Array<Omit<MemoryInformation, "machineId">>
  ): Promise<IMemoryInformationDB[]> {
    const records = dataArray.map((data) => ({
      machineId,
      ...data,
    }));
    return await MemoryInformationDB.insertMany(records);
  }

  public async getMemoryInformationByDateRange(
    machineId: string,
    startDate: Date,
    endDate: Date
  ): Promise<IMemoryInformationDB[]> {
    return await MemoryInformationDB.find({
      machineId,
      timestamp: { $gte: startDate, $lte: endDate },
    }).sort({ timestamp: -1 });
  }

  public async deleteMemoryInformation(id: string): Promise<void> {
    await MemoryInformationDB.deleteOne({ _id: id });
  }

  public async deleteMemoryInformationByMachineId(machineId: string): Promise<number> {
    const result = await MemoryInformationDB.deleteMany({ machineId });
    return result.deletedCount || 0;
  }
}
