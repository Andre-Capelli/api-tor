import CpuInformationDB, { CpuInformation, ICpuInformationDB } from "../models/CpuInformation";

export class CpuInformationService {
  public async getCpuInformationByMachineId(
    machineId: string,
    limit: number = 100
  ): Promise<ICpuInformationDB[]> {
    return await CpuInformationDB.find({ machineId })
      .sort({ timestamp: -1 })
      .limit(limit);
  }

  public async getCpuInformation(id: string): Promise<ICpuInformationDB | null> {
    return await CpuInformationDB.findById(id);
  }

  public async getLatestCpuInformation(
    machineId: string
  ): Promise<ICpuInformationDB | null> {
    return await CpuInformationDB.findOne({ machineId }).sort({ timestamp: -1 });
  }

  public async createCpuInformation(
    machineId: string,
    data: Omit<CpuInformation, "machineId">
  ): Promise<ICpuInformationDB> {
    return await CpuInformationDB.create({
      machineId,
      ...data,
    });
  }

  public async createCpuInformationBatch(
    machineId: string,
    dataArray: Array<Omit<CpuInformation, "machineId">>
  ): Promise<ICpuInformationDB[]> {
    const records = dataArray.map((data) => ({
      machineId,
      ...data,
    }));
    return await CpuInformationDB.insertMany(records);
  }

  public async getCpuInformationByDateRange(
    machineId: string,
    startDate: Date,
    endDate: Date
  ): Promise<ICpuInformationDB[]> {
    return await CpuInformationDB.find({
      machineId,
      timestamp: { $gte: startDate, $lte: endDate },
    }).sort({ timestamp: -1 });
  }

  public async deleteCpuInformation(id: string): Promise<void> {
    await CpuInformationDB.deleteOne({ _id: id });
  }

  public async deleteCpuInformationByMachineId(machineId: string): Promise<number> {
    const result = await CpuInformationDB.deleteMany({ machineId });
    return result.deletedCount || 0;
  }
}
