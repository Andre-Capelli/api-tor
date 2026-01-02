"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MachineService = void 0;
const Machine_1 = __importDefault(require("../Machine"));
const CpuInformation_1 = __importDefault(require("../CpuInformation"));
const MemoryInformation_1 = __importDefault(require("../MemoryInformation"));
const StorageInformation_1 = __importDefault(require("../StorageInformation"));
const AntivirusInformation_1 = __importDefault(require("../AntivirusInformation"));
const NetworkInformation_1 = __importDefault(require("../NetworkInformation"));
const MachineSnapshot_1 = __importDefault(require("../MachineSnapshot"));
class MachineService {
    // Machine CRUD operations
    async getMachines() {
        return await Machine_1.default.find();
    }
    async getMachine(id) {
        return await Machine_1.default.findById(id);
    }
    async getMachineByMachineId(machineId) {
        return await Machine_1.default.findOne({ machineId });
    }
    async createMachine(data) {
        const created = await Machine_1.default.create(data);
        return created;
    }
    async upsertMachine(data) {
        const id = data.id || data._id;
        if (!id)
            throw new Error("id is required for upsert");
        await Machine_1.default.updateOne({ _id: id }, data, { upsert: true });
    }
    async updateMachineLastSeen(machineId) {
        await Machine_1.default.updateOne({ machineId }, { lastSeen: new Date(), isActive: true });
    }
    async deleteMachine(id) {
        await Machine_1.default.deleteOne({ _id: id });
    }
    // Process full machine data snapshot
    async processFullMachineData(data) {
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
        }
        else {
            // Update last seen
            await this.updateMachineLastSeen(machineId);
        }
        let recordsCreated = 0;
        // Save CPU Information (can have multiple CPUs)
        if (data.cpuInformation && data.cpuInformation.length > 0) {
            for (const cpu of data.cpuInformation) {
                await CpuInformation_1.default.create({
                    machineId,
                    timestamp,
                    ...cpu,
                });
                recordsCreated++;
            }
        }
        // Save Memory Information
        if (data.memoryInformation) {
            await MemoryInformation_1.default.create({
                machineId,
                timestamp,
                ...data.memoryInformation,
            });
            recordsCreated++;
        }
        // Save Storage Information
        if (data.storageInformation) {
            await StorageInformation_1.default.create({
                machineId,
                timestamp,
                ...data.storageInformation,
            });
            recordsCreated++;
        }
        // Save Antivirus Information (can have multiple antivirus)
        if (data.antivirusInformation && data.antivirusInformation.length > 0) {
            for (const av of data.antivirusInformation) {
                await AntivirusInformation_1.default.create({
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
                await NetworkInformation_1.default.create({
                    machineId,
                    timestamp,
                    ...network,
                });
                recordsCreated++;
            }
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
    // Get latest snapshot for a machine
    async getLatestSnapshot(machineId) {
        return await MachineSnapshot_1.default.findOne({ machineId }).sort({ timestamp: -1 });
    }
    // Get machine history within date range
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
exports.MachineService = MachineService;
