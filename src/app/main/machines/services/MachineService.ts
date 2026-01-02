import MachineDB, { Machine, IMachine } from "../Machine";
import CpuInformationDB, { CpuInformation } from "../CpuInformation";
import MemoryInformationDB, { MemoryInformation } from "../MemoryInformation";
import StorageInformationDB, { StorageInformation } from "../StorageInformation";
import AntivirusInformationDB, { AntivirusInformation } from "../AntivirusInformation";
import NetworkInformationDB, { NetworkInformation } from "../NetworkInformation";
import MachineSnapshotDB, { MachineSnapshot } from "../MachineSnapshot";

export interface FullMachineData {
  timestamp: string;
  cpuInformation: Array<Omit<CpuInformation, "machineId" | "timestamp">>;
  memoryInformation: Omit<MemoryInformation, "machineId" | "timestamp">;
  storageInformation: Omit<StorageInformation, "machineId" | "timestamp">;
  antivirusInformation: Array<Omit<AntivirusInformation, "machineId" | "timestamp">>;
  networkInformation: Array<Omit<NetworkInformation, "machineId" | "timestamp">>;
  operatingSystem: string;
  operatingSystemVersion: string;
  operatingSystemArchitecture: string;
  operatingSystemDescription: string;
  computerName: string;
  domainName?: string;
  workgroup?: string;
  updatesPending: boolean;
  uptimeSeconds: number;
  loggedInUser: string;
  machineId: string;
}

export class MachineService {
  // Machine CRUD operations
  public async getMachines(): Promise<IMachine[]> {
    return await MachineDB.find();
  }

  public async getMachine(id: string): Promise<IMachine | null> {
    return await MachineDB.findById(id);
  }

  public async getMachineByMachineId(machineId: string): Promise<IMachine | null> {
    return await MachineDB.findOne({ machineId });
  }

  public async createMachine(data: Machine): Promise<any> {
    const created = await MachineDB.create(data);
    return created;
  }

  public async upsertMachine(data: IMachine): Promise<void> {
    const id = (data as any).id || (data as any)._id;
    if (!id) throw new Error("id is required for upsert");
    await MachineDB.updateOne({ _id: id }, data, { upsert: true });
  }

  public async updateMachineLastSeen(machineId: string): Promise<void> {
    await MachineDB.updateOne(
      { machineId },
      { lastSeen: new Date(), isActive: true }
    );
  }

  public async deleteMachine(id: string): Promise<void> {
    await MachineDB.deleteOne({ _id: id });
  }

  // Process full machine data snapshot
  public async processFullMachineData(data: FullMachineData): Promise<{
    success: boolean;
    machineSnapshot: any;
    recordsCreated: number;
  }> {
    const timestamp = new Date(data.timestamp);
    const { machineId } = data;

    // Ensure machine exists, if not create it
    let machine = await this.getMachineByMachineId(machineId);
    if (!machine) {
      machine = await this.createMachine({
        machineId,
        computerName: data.computerName,
        operatingSystem: data.operatingSystem,
        operatingSystemVersion: data.operatingSystemVersion,
        operatingSystemArchitecture: data.operatingSystemArchitecture,
        operatingSystemDescription: data.operatingSystemDescription,
        domainName: data.domainName,
        workgroup: data.workgroup,
        isActive: true,
        lastSeen: timestamp,
      });
    } else {
      // Update last seen
      await this.updateMachineLastSeen(machineId);
    }

    let recordsCreated = 0;

    // Save CPU Information (can have multiple CPUs)
    if (data.cpuInformation && data.cpuInformation.length > 0) {
      for (const cpu of data.cpuInformation) {
        await CpuInformationDB.create({
          machineId,
          timestamp,
          ...cpu,
        });
        recordsCreated++;
      }
    }

    // Save Memory Information
    if (data.memoryInformation) {
      await MemoryInformationDB.create({
        machineId,
        timestamp,
        ...data.memoryInformation,
      });
      recordsCreated++;
    }

    // Save Storage Information
    if (data.storageInformation) {
      await StorageInformationDB.create({
        machineId,
        timestamp,
        ...data.storageInformation,
      });
      recordsCreated++;
    }

    // Save Antivirus Information (can have multiple antivirus)
    if (data.antivirusInformation && data.antivirusInformation.length > 0) {
      for (const av of data.antivirusInformation) {
        await AntivirusInformationDB.create({
          machineId,
          timestamp,
          ...av,
        });
        recordsCreated++;
      }
    }

    // Save Network Information (can have multiple network interfaces)
    if (data.networkInformation && data.networkInformation.length > 0) {
      for (const network of data.networkInformation) {
        await NetworkInformationDB.create({
          machineId,
          timestamp,
          ...network,
        });
        recordsCreated++;
      }
    }

    // Save MachineSnapshot (summary)
    const snapshot = await MachineSnapshotDB.create({
      machineId,
      timestamp,
      operatingSystem: data.operatingSystem,
      operatingSystemVersion: data.operatingSystemVersion,
      operatingSystemArchitecture: data.operatingSystemArchitecture,
      operatingSystemDescription: data.operatingSystemDescription,
      computerName: data.computerName,
      domainName: data.domainName,
      workgroup: data.workgroup,
      updatesPending: data.updatesPending,
      uptimeSeconds: data.uptimeSeconds,
      loggedInUser: data.loggedInUser,
    });
    recordsCreated++;

    return {
      success: true,
      machineSnapshot: snapshot,
      recordsCreated,
    };
  }

  // Get latest snapshot for a machine
  public async getLatestSnapshot(machineId: string): Promise<any> {
    return await MachineSnapshotDB.findOne({ machineId }).sort({ timestamp: -1 });
  }

  // Get machine history within date range
  public async getMachineHistory(
    machineId: string,
    startDate?: Date,
    endDate?: Date
  ): Promise<any> {
    const query: any = { machineId };

    if (startDate || endDate) {
      query.timestamp = {};
      if (startDate) query.timestamp.$gte = startDate;
      if (endDate) query.timestamp.$lte = endDate;
    }

    const [snapshots, cpuData, memoryData, storageData, antivirusData, networkData] =
      await Promise.all([
        MachineSnapshotDB.find(query).sort({ timestamp: -1 }).limit(100),
        CpuInformationDB.find(query).sort({ timestamp: -1 }).limit(100),
        MemoryInformationDB.find(query).sort({ timestamp: -1 }).limit(100),
        StorageInformationDB.find(query).sort({ timestamp: -1 }).limit(100),
        AntivirusInformationDB.find(query).sort({ timestamp: -1 }).limit(100),
        NetworkInformationDB.find(query).sort({ timestamp: -1 }).limit(100),
      ]);

    return {
      snapshots,
      cpuData,
      memoryData,
      storageData,
      antivirusData,
      networkData,
    };
  }
}
