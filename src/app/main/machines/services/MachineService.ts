import MachineDB, { Machine, IMachine, IMachineDB } from "../Machine";

export class MachineService {
  public async getMachines(filter?: Record<string, any>): Promise<IMachine[]> {
    return await MachineDB.find(filter || {});
  }

  public async getMachine(id: string): Promise<IMachine | null> {
    return await MachineDB.findById(id);
  }

  public async getMachineByMachineId(machineId: string): Promise<IMachine | null> {
    return await MachineDB.findOne({ machineId });
  }

  public async createMachine(data: Machine): Promise<IMachineDB> {
    return await MachineDB.create(data);
  }

  public async upsertMachine(id: string, data: Machine): Promise<void> {
    await MachineDB.updateOne({ _id: id }, data, { upsert: true });
  }

  public async deleteMachine(id: string): Promise<void> {
    await MachineDB.deleteOne({ _id: id });
  }
}
