import MachineSnapshotDB, { MachineSnapshot, IMachineSnapshotDB } from "../models/MachineSnapshot";

export class MachineSnapshotService {
  public async getSnapshotsByMachineId(
    machineId: string,
    limit: number = 100
  ): Promise<IMachineSnapshotDB[]> {
    return await MachineSnapshotDB.find({ machineId })
      .sort({ timestamp: -1 })
      .limit(limit);
  }

  public async getSnapshot(id: string): Promise<IMachineSnapshotDB | null> {
    return await MachineSnapshotDB.findById(id);
  }

  public async getLatestSnapshot(
    machineId: string
  ): Promise<IMachineSnapshotDB | null> {
    return await MachineSnapshotDB.findOne({ machineId }).sort({ timestamp: -1 });
  }

  public async createSnapshot(
    machineId: string,
    data: Omit<MachineSnapshot, "machineId">
  ): Promise<IMachineSnapshotDB> {
    return await MachineSnapshotDB.create({
      machineId,
      ...data,
    });
  }

  public async createSnapshotBatch(
    machineId: string,
    dataArray: Array<Omit<MachineSnapshot, "machineId">>
  ): Promise<IMachineSnapshotDB[]> {
    const records = dataArray.map((data) => ({
      machineId,
      ...data,
    }));
    return await MachineSnapshotDB.insertMany(records);
  }

  public async getSnapshotsByDateRange(
    machineId: string,
    startDate: Date,
    endDate: Date
  ): Promise<IMachineSnapshotDB[]> {
    return await MachineSnapshotDB.find({
      machineId,
      timestamp: { $gte: startDate, $lte: endDate },
    }).sort({ timestamp: -1 });
  }

  public async deleteSnapshot(id: string): Promise<void> {
    await MachineSnapshotDB.deleteOne({ _id: id });
  }

  public async deleteSnapshotsByMachineId(machineId: string): Promise<number> {
    const result = await MachineSnapshotDB.deleteMany({ machineId });
    return result.deletedCount || 0;
  }
}
