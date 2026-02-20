"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitoringService = void 0;
const Machine_1 = __importDefault(require("@main/machines/Machine"));
const CpuInformation_1 = __importDefault(require("../models/CpuInformation"));
const MemoryInformation_1 = __importDefault(require("../models/MemoryInformation"));
const StorageInformation_1 = __importDefault(require("../models/StorageInformation"));
const AntivirusInformation_1 = __importDefault(require("../models/AntivirusInformation"));
const NetworkInformation_1 = __importDefault(require("../models/NetworkInformation"));
const MachineSnapshot_1 = __importDefault(require("../models/MachineSnapshot"));
const Organization_1 = __importDefault(require("@main/organizations/Organization"));
const Subscription_1 = __importDefault(require("@main/subscriptions/Subscription"));
const Plan_1 = __importDefault(require("@main/plans/Plan"));
class MonitoringService {
    async countMachinesByOrganization(orgIds) {
        return await Machine_1.default.countDocuments({
            organizationId: { $in: orgIds },
        });
    }
    /**
     * Validates the snapshot pipeline before processing data.
     * Checks: machine ownership, org active, subscription active, modules allowed, machine limit.
     */
    async validateSnapshotPipeline(machineId, organizationId, requestedModules) {
        // 1. Find machine (if exists)
        const machine = await Machine_1.default.findOne({ machineId });
        // 2. If machine exists, verify it belongs to the given org
        if (machine && machine.organizationId && String(machine.organizationId) !== organizationId) {
            return { valid: false, allowedModules: [], reason: "Machine does not belong to this organization" };
        }
        // 3. Find the root company org
        const org = await Organization_1.default.findById(organizationId);
        if (!org || !org.isActive) {
            return { valid: false, allowedModules: [], reason: "Organization not found or inactive" };
        }
        const companyId = org.type === "customer" ? String(org.parentId) : String(org._id);
        // 4. Find active subscription for the company
        const subscription = await Subscription_1.default.findOne({
            organizationId: companyId,
            status: "active",
            endDate: { $gte: new Date() },
        });
        if (!subscription) {
            return { valid: false, allowedModules: [], reason: "No active subscription" };
        }
        // 5. Get plan and check modules
        const plan = await Plan_1.default.findById(subscription.planId);
        if (!plan) {
            return { valid: false, allowedModules: [], reason: "Subscription plan not found" };
        }
        const allowedModules = requestedModules.filter((m) => plan.allowedModules.includes(m));
        // 6. Check machine count limit (only for new machines)
        if (!machine) {
            const customerOrgs = await Organization_1.default.find({
                parentId: companyId,
                type: "customer",
            }).select("_id");
            const orgIds = [companyId, ...customerOrgs.map((c) => String(c._id))];
            const currentCount = await this.countMachinesByOrganization(orgIds);
            if (currentCount >= plan.maxMachines) {
                return { valid: false, allowedModules: [], reason: `Machine limit reached (${currentCount}/${plan.maxMachines})` };
            }
        }
        return { valid: true, allowedModules, machine: machine };
    }
    async processFullMachineData(data, organizationId) {
        const timestamp = new Date(data.timestamp);
        const { machineId } = data;
        // Determine which modules are being sent
        const requestedModules = [];
        if (data.cpuInformation?.length)
            requestedModules.push("cpu");
        if (data.memoryInformation)
            requestedModules.push("memory");
        if (data.storageInformation)
            requestedModules.push("storage");
        if (data.networkInformation?.length)
            requestedModules.push("network");
        if (data.antivirusInformation?.length)
            requestedModules.push("antivirus");
        // Validate subscription pipeline (only if organizationId is provided)
        let allowedModules = requestedModules;
        if (organizationId) {
            const validation = await this.validateSnapshotPipeline(machineId, organizationId, requestedModules);
            if (!validation.valid) {
                throw new Error(`Snapshot rejected: ${validation.reason}`);
            }
            allowedModules = validation.allowedModules;
        }
        // Ensure machine exists, if not create it
        let machine = await Machine_1.default.findOne({ machineId });
        if (!machine) {
            machine = await Machine_1.default.create({
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
            });
        }
        else {
            await Machine_1.default.updateOne({ machineId }, { lastSeen: new Date(), isActive: true });
        }
        let recordsCreated = 0;
        // Save CPU Information (batch) - only if module is allowed
        if (allowedModules.includes("cpu") && data.cpuInformation && data.cpuInformation.length > 0) {
            const cpuRecords = data.cpuInformation.map((cpu) => ({
                machineId,
                timestamp,
                ...cpu,
            }));
            const created = await CpuInformation_1.default.insertMany(cpuRecords);
            recordsCreated += created.length;
        }
        // Save Memory Information
        if (allowedModules.includes("memory") && data.memoryInformation) {
            await MemoryInformation_1.default.create({
                machineId,
                timestamp,
                ...data.memoryInformation,
            });
            recordsCreated++;
        }
        // Save Storage Information
        if (allowedModules.includes("storage") && data.storageInformation) {
            await StorageInformation_1.default.create({
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
            const created = await AntivirusInformation_1.default.insertMany(avRecords);
            recordsCreated += created.length;
        }
        // Save Network Information (batch)
        if (allowedModules.includes("network") && data.networkInformation && data.networkInformation.length > 0) {
            const networkRecords = data.networkInformation.map((network) => ({
                machineId,
                timestamp,
                ...network,
            }));
            const created = await NetworkInformation_1.default.insertMany(networkRecords);
            recordsCreated += created.length;
        }
        // Save MachineSnapshot (summary)
        const snapshot = await MachineSnapshot_1.default.create({
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
    async getLatestSnapshot(machineId) {
        return await MachineSnapshot_1.default.findOne({ machineId }).sort({ timestamp: -1 });
    }
    async getMachineHistory(machineId, startDate, endDate) {
        const query = { machineId };
        if (startDate || endDate) {
            query.timestamp = {};
            if (startDate)
                query.timestamp.$gte = startDate;
            if (endDate)
                query.timestamp.$lte = endDate;
        }
        const [snapshots, cpuData, memoryData, storageData, antivirusData, networkData] = await Promise.all([
            MachineSnapshot_1.default.find(query).sort({ timestamp: -1 }).limit(100),
            CpuInformation_1.default.find(query).sort({ timestamp: -1 }).limit(100),
            MemoryInformation_1.default.find(query).sort({ timestamp: -1 }).limit(100),
            StorageInformation_1.default.find(query).sort({ timestamp: -1 }).limit(100),
            AntivirusInformation_1.default.find(query).sort({ timestamp: -1 }).limit(100),
            NetworkInformation_1.default.find(query).sort({ timestamp: -1 }).limit(100),
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
exports.MonitoringService = MonitoringService;
