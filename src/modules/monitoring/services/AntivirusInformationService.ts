import AntivirusInformationDB, { AntivirusInformation, IAntivirusInformationDB } from "../models/AntivirusInformation";

export class AntivirusInformationService {
  public async getAntivirusInformationByMachineId(
    machineId: string,
    limit: number = 100
  ): Promise<IAntivirusInformationDB[]> {
    return await AntivirusInformationDB.find({ machineId })
      .sort({ timestamp: -1 })
      .limit(limit);
  }

  public async getAntivirusInformation(id: string): Promise<IAntivirusInformationDB | null> {
    return await AntivirusInformationDB.findById(id);
  }

  public async getLatestAntivirusInformation(
    machineId: string
  ): Promise<IAntivirusInformationDB | null> {
    return await AntivirusInformationDB.findOne({ machineId }).sort({ timestamp: -1 });
  }

  public async createAntivirusInformation(
    machineId: string,
    data: Omit<AntivirusInformation, "machineId">
  ): Promise<IAntivirusInformationDB> {
    return await AntivirusInformationDB.create({
      machineId,
      ...data,
    });
  }

  public async createAntivirusInformationBatch(
    machineId: string,
    dataArray: Array<Omit<AntivirusInformation, "machineId">>
  ): Promise<IAntivirusInformationDB[]> {
    const records = dataArray.map((data) => ({
      machineId,
      ...data,
    }));
    return await AntivirusInformationDB.insertMany(records);
  }

  public async getAntivirusInformationByDateRange(
    machineId: string,
    startDate: Date,
    endDate: Date
  ): Promise<IAntivirusInformationDB[]> {
    return await AntivirusInformationDB.find({
      machineId,
      timestamp: { $gte: startDate, $lte: endDate },
    }).sort({ timestamp: -1 });
  }

  public async deleteAntivirusInformation(id: string): Promise<void> {
    await AntivirusInformationDB.deleteOne({ _id: id });
  }

  public async deleteAntivirusInformationByMachineId(machineId: string): Promise<number> {
    const result = await AntivirusInformationDB.deleteMany({ machineId });
    return result.deletedCount || 0;
  }
}
