import MachineDB, { Machine, IMachine, IMachineDB } from "@main/machines/Machine";
import CpuInformationDB, { CpuInformation } from "../models/CpuInformation";
import MemoryInformationDB, { MemoryInformation } from "../models/MemoryInformation";
import StorageInformationDB, { StorageInformation } from "../models/StorageInformation";
import AntivirusInformationDB, { AntivirusInformation } from "../models/AntivirusInformation";
import NetworkInformationDB, { NetworkInformation } from "../models/NetworkInformation";
import MachineSnapshotDB, { IMachineSnapshotDB } from "../models/MachineSnapshot";
import OrganizationDB from "@main/organizations/Organization";
import SubscriptionDB from "@main/subscriptions/Subscription";
import PlanDB, { ModuleType } from "@main/plans/Plan";

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

export class MonitoringService {
  public async countMachinesByOrganization(orgIds: string[]): Promise<number> {
    return await MachineDB.countDocuments({
      organizationId: { $in: orgIds },
    });
  }

  /**
   * Validates the snapshot pipeline before processing data.
   * Checks: machine ownership, org active, subscription active, modules allowed, machine limit.
   */
  private async validateSnapshotPipeline(
    machineId: string,
    organizationId: string,
    requestedModules: ModuleType[]
  ): Promise<{
    valid: boolean;
    allowedModules: ModuleType[];
    reason?: string;
    machine?: IMachineDB;
  }> {
    // 1. Find machine (if exists)
    const machine = await MachineDB.findOne({ machineId });

    // 2. If machine exists, verify it belongs to the given org
    if (machine && machine.organizationId && String(machine.organizationId) !== organizationId) {
      return { valid: false, allowedModules: [], reason: "Machine does not belong to this organization" };
    }

    // 3. Find the root company org
    const org = await OrganizationDB.findById(organizationId);
    if (!org || !org.isActive) {
      return { valid: false, allowedModules: [], reason: "Organization not found or inactive" };
    }

    const companyId = org.type === "customer" ? String(org.parentId) : String(org._id);

    // 4. Find active subscription for the company
    const subscription = await SubscriptionDB.findOne({
      organizationId: companyId,
      status: "active",
      endDate: { $gte: new Date() },
    });
    if (!subscription) {
      return { valid: false, allowedModules: [], reason: "No active subscription" };
    }

    // 5. Get plan and check modules
    const plan = await PlanDB.findById(subscription.planId);
    if (!plan) {
      return { valid: false, allowedModules: [], reason: "Subscription plan not found" };
    }

    const allowedModules = requestedModules.filter((m) => plan.allowedModules.includes(m));

    // 6. Check machine count limit (only for new machines)
    if (!machine) {
      const customerOrgs = await OrganizationDB.find({
        parentId: companyId,
        type: "customer",
      }).select("_id");

      const orgIds = [companyId, ...customerOrgs.map((c) => String(c._id))];
      const currentCount = await this.countMachinesByOrganization(orgIds);

      if (currentCount >= plan.maxMachines) {
        return { valid: false, allowedModules: [], reason: `Machine limit reached (${currentCount}/${plan.maxMachines})` };
      }
    }

    return { valid: true, allowedModules, machine: machine as IMachineDB | undefined };
  }

  public async processFullMachineData(
    data: FullMachineData,
    organizationId?: string
  ): Promise<{
    success: boolean;
    machineSnapshot: IMachineSnapshotDB;
    recordsCreated: number;
  }> {
    const timestamp = new Date(data.timestamp);
    const { machineId } = data;

    // Determine which modules are being sent
    const requestedModules: ModuleType[] = [];
    if (data.cpuInformation?.length) requestedModules.push("cpu");
    if (data.memoryInformation) requestedModules.push("memory");
    if (data.storageInformation) requestedModules.push("storage");
    if (data.networkInformation?.length) requestedModules.push("network");
    if (data.antivirusInformation?.length) requestedModules.push("antivirus");

    // Validate subscription pipeline (only if organizationId is provided)
    let allowedModules = requestedModules;
    if (organizationId) {
      const validation = await this.validateSnapshotPipeline(
        machineId,
        organizationId,
        requestedModules
      );

      if (!validation.valid) {
        throw new Error(`Snapshot rejected: ${validation.reason}`);
      }

      allowedModules = validation.allowedModules;
    }

    // Ensure machine exists, if not create it
    let machine = await MachineDB.findOne({ machineId });
    if (!machine) {
      machine = await MachineDB.create({
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
        organizationId,
      } as Machine);
    } else {
      await MachineDB.updateOne(
        { machineId },
        { lastSeen: new Date(), isActive: true }
      );
    }

    let recordsCreated = 0;

    // Save CPU Information (batch) - only if module is allowed
    if (allowedModules.includes("cpu") && data.cpuInformation && data.cpuInformation.length > 0) {
      const cpuRecords = data.cpuInformation.map((cpu) => ({
        machineId,
        timestamp,
        ...cpu,
      }));
      const created = await CpuInformationDB.insertMany(cpuRecords);
      recordsCreated += created.length;
    }

    // Save Memory Information
    if (allowedModules.includes("memory") && data.memoryInformation) {
      await MemoryInformationDB.create({
        machineId,
        timestamp,
        ...data.memoryInformation,
      });
      recordsCreated++;
    }

    // Save Storage Information
    if (allowedModules.includes("storage") && data.storageInformation) {
      await StorageInformationDB.create({
        machineId,
        timestamp,
        ...data.storageInformation,
      });
      recordsCreated++;
    }

    // Save Antivirus Information (batch)
    if (allowedModules.includes("antivirus") && data.antivirusInformation && data.antivirusInformation.length > 0) {
      const avRecords = data.antivirusInformation.map((av) => ({
        machineId,
        timestamp,
        ...av,
      }));
      const created = await AntivirusInformationDB.insertMany(avRecords);
      recordsCreated += created.length;
    }

    // Save Network Information (batch)
    if (allowedModules.includes("network") && data.networkInformation && data.networkInformation.length > 0) {
      const networkRecords = data.networkInformation.map((network) => ({
        machineId,
        timestamp,
        ...network,
      }));
      const created = await NetworkInformationDB.insertMany(networkRecords);
      recordsCreated += created.length;
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

  public async getLatestSnapshot(machineId: string): Promise<IMachineSnapshotDB | null> {
    return await MachineSnapshotDB.findOne({ machineId }).sort({ timestamp: -1 });
  }

  public async getMachineHistory(
    machineId: string,
    startDate?: Date,
    endDate?: Date
  ): Promise<{
    snapshots: IMachineSnapshotDB[];
    cpuData: any[];
    memoryData: any[];
    storageData: any[];
    antivirusData: any[];
    networkData: any[];
  }> {
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
