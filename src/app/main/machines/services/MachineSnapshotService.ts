import MachineSnapshotDB, { MachineSnapshot, IMachineSnapshot } from "../MachineSnapshot";

export class MachineSnapshotService {
  /**
   * Get all snapshots for a specific machine
   */
  public async getSnapshotsByMachineId(
    machineId: string,
    limit: number = 100
  ): Promise<any[]> {
    return await MachineSnapshotDB.find({ machineId })
      .sort({ timestamp: -1 })
      .limit(limit);
  }

  /**
   * Get snapshot by record ID
   */
  public async getSnapshot(id: string): Promise<any | null> {
    return await MachineSnapshotDB.findById(id);
  }

  /**
   * Get latest snapshot for a machine
   */
  public async getLatestSnapshot(
    machineId: string
  ): Promise<any | null> {
    return await MachineSnapshotDB.findOne({ machineId }).sort({ timestamp: -1 });
  }

  /**
   * Create single snapshot
   */
  public async createSnapshot(
    machineId: string,
    data: Omit<MachineSnapshot, "machineId">
  ): Promise<any> {
    const created = await MachineSnapshotDB.create({
      machineId,
      ...data,
    });
    return created;
  }

  /**
   * Create multiple snapshots (batch)
   */
  public async createSnapshotBatch(
    machineId: string,
    dataArray: Array<Omit<MachineSnapshot, "machineId">>
  ): Promise<any[]> {
    const records = dataArray.map((data) => ({
      machineId,
      ...data,
    }));
    return await MachineSnapshotDB.insertMany(records);
  }

  /**
   * Get snapshots within date range
   */
  public async getSnapshotsByDateRange(
    machineId: string,
    startDate: Date,
    endDate: Date
  ): Promise<any[]> {
    return await MachineSnapshotDB.find({
      machineId,
      timestamp: { $gte: startDate, $lte: endDate },
    }).sort({ timestamp: -1 });
  }

  /**
   * Delete snapshot by ID
   */
  public async deleteSnapshot(id: string): Promise<void> {
    await MachineSnapshotDB.deleteOne({ _id: id });
  }

  /**
   * Delete all snapshots for a machine
   */
  public async deleteSnapshotsByMachineId(machineId: string): Promise<number> {
    const result = await MachineSnapshotDB.deleteMany({ machineId });
    return result.deletedCount || 0;
  }
}
