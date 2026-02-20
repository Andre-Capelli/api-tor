"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterRoutes = RegisterRoutes;
const runtime_1 = require("@tsoa/runtime");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const StorageInformationController_1 = require("./../src/modules/monitoring/controllers/StorageInformationController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const NetworkInformationController_1 = require("./../src/modules/monitoring/controllers/NetworkInformationController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const MonitoringController_1 = require("./../src/modules/monitoring/controllers/MonitoringController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const MemoryInformationController_1 = require("./../src/modules/monitoring/controllers/MemoryInformationController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const CpuInformationController_1 = require("./../src/modules/monitoring/controllers/CpuInformationController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const AntivirusInformationController_1 = require("./../src/modules/monitoring/controllers/AntivirusInformationController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const UserController_1 = require("./../src/app/main/users/controllers/UserController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const AuthController_1 = require("./../src/app/main/users/controllers/AuthController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const TestController_1 = require("./../src/app/main/test/controllers/TestController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const SubscriptionController_1 = require("./../src/app/main/subscriptions/controllers/SubscriptionController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const PlanController_1 = require("./../src/app/main/plans/controllers/PlanController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const OrganizationController_1 = require("./../src/app/main/organizations/controllers/OrganizationController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const MachineController_1 = require("./../src/app/main/machines/controllers/MachineController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const CustomFieldController_1 = require("./../src/app/main/custom-fields/controllers/CustomFieldController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const AccessLevelController_1 = require("./../src/app/main/access-levels/controllers/AccessLevelController");
const authHandler_1 = require("./../src/app/core/middlewares/authHandler");
const expressAuthenticationRecasted = authHandler_1.expressAuthentication;
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const models = {
    "Disk": {
        "dataType": "refObject",
        "properties": {
            "index": { "dataType": "double", "required": true },
            "model": { "dataType": "string", "required": true },
            "serialNumber": { "dataType": "string", "required": true },
            "firmwareRevision": { "dataType": "string", "required": true },
            "sizeBytes": { "dataType": "double", "required": true },
            "temperature": { "dataType": "double", "required": true },
            "status": { "dataType": "string", "required": true },
            "lastErrorCode": { "dataType": "union", "subSchemas": [{ "dataType": "string" }, { "dataType": "enum", "enums": [null] }] },
            "errorCleared": { "dataType": "union", "subSchemas": [{ "dataType": "string" }, { "dataType": "enum", "enums": [null] }] },
            "errorDescription": { "dataType": "union", "subSchemas": [{ "dataType": "string" }, { "dataType": "enum", "enums": [null] }] },
            "errorMethodology": { "dataType": "union", "subSchemas": [{ "dataType": "string" }, { "dataType": "enum", "enums": [null] }] },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partition": {
        "dataType": "refObject",
        "properties": {
            "diskIndex": { "dataType": "double", "required": true },
            "index": { "dataType": "double", "required": true },
            "bootable": { "dataType": "boolean", "required": true },
            "primaryPartition": { "dataType": "boolean", "required": true },
            "volumeName": { "dataType": "string", "required": true },
            "sizeBytes": { "dataType": "double", "required": true },
            "freeSpaceBytes": { "dataType": "double", "required": true },
            "usagePercentage": { "dataType": "double", "required": true },
            "volumeLetter": { "dataType": "union", "subSchemas": [{ "dataType": "string" }, { "dataType": "enum", "enums": [null] }] },
            "fileSystem": { "dataType": "union", "subSchemas": [{ "dataType": "string" }, { "dataType": "enum", "enums": [null] }] },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IStorageInformation": {
        "dataType": "refObject",
        "properties": {
            "machineId": { "dataType": "string", "required": true },
            "timestamp": { "dataType": "datetime", "required": true },
            "disks": { "dataType": "array", "array": { "dataType": "refObject", "ref": "Disk" }, "required": true },
            "partitions": { "dataType": "array", "array": { "dataType": "refObject", "ref": "Partition" }, "required": true },
            "id": { "dataType": "string" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_StorageInformation.Exclude_keyofStorageInformation.machineId__": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "timestamp": { "dataType": "datetime", "required": true }, "disks": { "dataType": "array", "array": { "dataType": "refObject", "ref": "Disk" }, "required": true }, "partitions": { "dataType": "array", "array": { "dataType": "refObject", "ref": "Partition" }, "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Omit_StorageInformation.machineId_": {
        "dataType": "refAlias",
        "type": { "ref": "Pick_StorageInformation.Exclude_keyofStorageInformation.machineId__", "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "INetworkInformation": {
        "dataType": "refObject",
        "properties": {
            "machineId": { "dataType": "string", "required": true },
            "timestamp": { "dataType": "datetime", "required": true },
            "name": { "dataType": "string", "required": true },
            "bytesSent": { "dataType": "double", "required": true },
            "bytesReceived": { "dataType": "double", "required": true },
            "type": { "dataType": "string", "required": true },
            "status": { "dataType": "string", "required": true },
            "speed": { "dataType": "string", "required": true },
            "ipAddress": { "dataType": "string", "required": true },
            "id": { "dataType": "string" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_NetworkInformation.Exclude_keyofNetworkInformation.machineId__": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "timestamp": { "dataType": "datetime", "required": true }, "name": { "dataType": "string", "required": true }, "bytesSent": { "dataType": "double", "required": true }, "bytesReceived": { "dataType": "double", "required": true }, "type": { "dataType": "string", "required": true }, "status": { "dataType": "string", "required": true }, "speed": { "dataType": "string", "required": true }, "ipAddress": { "dataType": "string", "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Omit_NetworkInformation.machineId_": {
        "dataType": "refAlias",
        "type": { "ref": "Pick_NetworkInformation.Exclude_keyofNetworkInformation.machineId__", "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CpuCore": {
        "dataType": "refObject",
        "properties": {
            "coreId": { "dataType": "double", "required": true },
            "temperature": { "dataType": "double", "required": true },
            "load": { "dataType": "double", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_CpuInformation.Exclude_keyofCpuInformation.machineId-or-timestamp__": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "name": { "dataType": "string", "required": true }, "temperature": { "dataType": "double", "required": true }, "load": { "dataType": "double", "required": true }, "power": { "dataType": "double", "required": true }, "cores": { "dataType": "array", "array": { "dataType": "refObject", "ref": "CpuCore" }, "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Omit_CpuInformation.machineId-or-timestamp_": {
        "dataType": "refAlias",
        "type": { "ref": "Pick_CpuInformation.Exclude_keyofCpuInformation.machineId-or-timestamp__", "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_MemoryInformation.Exclude_keyofMemoryInformation.machineId-or-timestamp__": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "usedMemoryGB": { "dataType": "double", "required": true }, "availableMemoryGB": { "dataType": "double", "required": true }, "totalMemoryGB": { "dataType": "double", "required": true }, "usagePercentage": { "dataType": "double", "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Omit_MemoryInformation.machineId-or-timestamp_": {
        "dataType": "refAlias",
        "type": { "ref": "Pick_MemoryInformation.Exclude_keyofMemoryInformation.machineId-or-timestamp__", "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_StorageInformation.Exclude_keyofStorageInformation.machineId-or-timestamp__": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "disks": { "dataType": "array", "array": { "dataType": "refObject", "ref": "Disk" }, "required": true }, "partitions": { "dataType": "array", "array": { "dataType": "refObject", "ref": "Partition" }, "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Omit_StorageInformation.machineId-or-timestamp_": {
        "dataType": "refAlias",
        "type": { "ref": "Pick_StorageInformation.Exclude_keyofStorageInformation.machineId-or-timestamp__", "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_AntivirusInformation.Exclude_keyofAntivirusInformation.machineId-or-timestamp__": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "name": { "dataType": "string", "required": true }, "enabled": { "dataType": "boolean", "required": true }, "lastQuickScan": { "dataType": "datetime" }, "lastFullScan": { "dataType": "datetime" }, "hasThreats": { "dataType": "boolean" } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Omit_AntivirusInformation.machineId-or-timestamp_": {
        "dataType": "refAlias",
        "type": { "ref": "Pick_AntivirusInformation.Exclude_keyofAntivirusInformation.machineId-or-timestamp__", "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_NetworkInformation.Exclude_keyofNetworkInformation.machineId-or-timestamp__": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "name": { "dataType": "string", "required": true }, "bytesSent": { "dataType": "double", "required": true }, "bytesReceived": { "dataType": "double", "required": true }, "type": { "dataType": "string", "required": true }, "status": { "dataType": "string", "required": true }, "speed": { "dataType": "string", "required": true }, "ipAddress": { "dataType": "string", "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Omit_NetworkInformation.machineId-or-timestamp_": {
        "dataType": "refAlias",
        "type": { "ref": "Pick_NetworkInformation.Exclude_keyofNetworkInformation.machineId-or-timestamp__", "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "FullMachineData": {
        "dataType": "refObject",
        "properties": {
            "timestamp": { "dataType": "string", "required": true },
            "cpuInformation": { "dataType": "array", "array": { "dataType": "refAlias", "ref": "Omit_CpuInformation.machineId-or-timestamp_" }, "required": true },
            "memoryInformation": { "ref": "Omit_MemoryInformation.machineId-or-timestamp_", "required": true },
            "storageInformation": { "ref": "Omit_StorageInformation.machineId-or-timestamp_", "required": true },
            "antivirusInformation": { "dataType": "array", "array": { "dataType": "refAlias", "ref": "Omit_AntivirusInformation.machineId-or-timestamp_" }, "required": true },
            "networkInformation": { "dataType": "array", "array": { "dataType": "refAlias", "ref": "Omit_NetworkInformation.machineId-or-timestamp_" }, "required": true },
            "operatingSystem": { "dataType": "string", "required": true },
            "operatingSystemVersion": { "dataType": "string", "required": true },
            "operatingSystemArchitecture": { "dataType": "string", "required": true },
            "operatingSystemDescription": { "dataType": "string", "required": true },
            "computerName": { "dataType": "string", "required": true },
            "domainName": { "dataType": "string" },
            "workgroup": { "dataType": "string" },
            "updatesPending": { "dataType": "boolean", "required": true },
            "uptimeSeconds": { "dataType": "double", "required": true },
            "loggedInUser": { "dataType": "string", "required": true },
            "machineId": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IMemoryInformation": {
        "dataType": "refObject",
        "properties": {
            "machineId": { "dataType": "string", "required": true },
            "timestamp": { "dataType": "datetime", "required": true },
            "usedMemoryGB": { "dataType": "double", "required": true },
            "availableMemoryGB": { "dataType": "double", "required": true },
            "totalMemoryGB": { "dataType": "double", "required": true },
            "usagePercentage": { "dataType": "double", "required": true },
            "id": { "dataType": "string" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_MemoryInformation.Exclude_keyofMemoryInformation.machineId__": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "timestamp": { "dataType": "datetime", "required": true }, "usedMemoryGB": { "dataType": "double", "required": true }, "availableMemoryGB": { "dataType": "double", "required": true }, "totalMemoryGB": { "dataType": "double", "required": true }, "usagePercentage": { "dataType": "double", "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Omit_MemoryInformation.machineId_": {
        "dataType": "refAlias",
        "type": { "ref": "Pick_MemoryInformation.Exclude_keyofMemoryInformation.machineId__", "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ICpuInformation": {
        "dataType": "refObject",
        "properties": {
            "machineId": { "dataType": "string", "required": true },
            "timestamp": { "dataType": "datetime", "required": true },
            "name": { "dataType": "string", "required": true },
            "temperature": { "dataType": "double", "required": true },
            "load": { "dataType": "double", "required": true },
            "power": { "dataType": "double", "required": true },
            "cores": { "dataType": "array", "array": { "dataType": "refObject", "ref": "CpuCore" }, "required": true },
            "id": { "dataType": "string" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_CpuInformation.Exclude_keyofCpuInformation.machineId__": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "timestamp": { "dataType": "datetime", "required": true }, "name": { "dataType": "string", "required": true }, "temperature": { "dataType": "double", "required": true }, "load": { "dataType": "double", "required": true }, "power": { "dataType": "double", "required": true }, "cores": { "dataType": "array", "array": { "dataType": "refObject", "ref": "CpuCore" }, "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Omit_CpuInformation.machineId_": {
        "dataType": "refAlias",
        "type": { "ref": "Pick_CpuInformation.Exclude_keyofCpuInformation.machineId__", "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IAntivirusInformation": {
        "dataType": "refObject",
        "properties": {
            "machineId": { "dataType": "string", "required": true },
            "timestamp": { "dataType": "datetime", "required": true },
            "name": { "dataType": "string", "required": true },
            "enabled": { "dataType": "boolean", "required": true },
            "lastQuickScan": { "dataType": "union", "subSchemas": [{ "dataType": "datetime" }, { "dataType": "enum", "enums": [null] }] },
            "lastFullScan": { "dataType": "union", "subSchemas": [{ "dataType": "datetime" }, { "dataType": "enum", "enums": [null] }] },
            "hasThreats": { "dataType": "union", "subSchemas": [{ "dataType": "boolean" }, { "dataType": "enum", "enums": [null] }] },
            "id": { "dataType": "string" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_AntivirusInformation.Exclude_keyofAntivirusInformation.machineId__": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "timestamp": { "dataType": "datetime", "required": true }, "name": { "dataType": "string", "required": true }, "enabled": { "dataType": "boolean", "required": true }, "lastQuickScan": { "dataType": "datetime" }, "lastFullScan": { "dataType": "datetime" }, "hasThreats": { "dataType": "boolean" } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Omit_AntivirusInformation.machineId_": {
        "dataType": "refAlias",
        "type": { "ref": "Pick_AntivirusInformation.Exclude_keyofAntivirusInformation.machineId__", "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IUser": {
        "dataType": "refObject",
        "properties": {
            "createdAt": { "dataType": "datetime" },
            "createdBy": { "dataType": "string" },
            "createdByName": { "dataType": "string" },
            "updatedAt": { "dataType": "datetime" },
            "updatedBy": { "dataType": "string" },
            "updatedByName": { "dataType": "string" },
            "name": { "dataType": "string", "required": true },
            "email": { "dataType": "string", "required": true },
            "password": { "dataType": "string", "required": true },
            "role": { "dataType": "string" },
            "isActive": { "dataType": "boolean" },
            "organizationId": { "dataType": "string" },
            "accessLevelId": { "dataType": "string" },
            "id": { "dataType": "string" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "User": {
        "dataType": "refObject",
        "properties": {
            "createdAt": { "dataType": "datetime" },
            "createdBy": { "dataType": "string" },
            "createdByName": { "dataType": "string" },
            "updatedAt": { "dataType": "datetime" },
            "updatedBy": { "dataType": "string" },
            "updatedByName": { "dataType": "string" },
            "name": { "dataType": "string", "required": true },
            "email": { "dataType": "string", "required": true },
            "password": { "dataType": "string", "required": true },
            "role": { "dataType": "string" },
            "isActive": { "dataType": "boolean" },
            "organizationId": { "dataType": "string" },
            "accessLevelId": { "dataType": "string" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AuthResponse": {
        "dataType": "refObject",
        "properties": {
            "accessToken": { "dataType": "string", "required": true },
            "refreshToken": { "dataType": "string", "required": true },
            "user": { "dataType": "nestedObjectLiteral", "nestedProperties": { "accessLevel": { "dataType": "double" }, "accessLevelName": { "dataType": "string" }, "organizationType": { "dataType": "string" }, "organizationId": { "dataType": "string" }, "role": { "dataType": "string", "required": true }, "email": { "dataType": "string", "required": true }, "name": { "dataType": "string", "required": true }, "id": { "dataType": "string", "required": true } }, "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "LoginRequest": {
        "dataType": "refObject",
        "properties": {
            "email": { "dataType": "string", "required": true },
            "password": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "RegisterRequest": {
        "dataType": "refObject",
        "properties": {
            "name": { "dataType": "string", "required": true },
            "email": { "dataType": "string", "required": true },
            "password": { "dataType": "string", "required": true },
            "organizationId": { "dataType": "string" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "RefreshTokenRequest": {
        "dataType": "refObject",
        "properties": {
            "refreshToken": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TestResponse": {
        "dataType": "refObject",
        "properties": {
            "success": { "dataType": "boolean", "required": true },
            "message": { "dataType": "string", "required": true },
            "user": { "dataType": "nestedObjectLiteral", "nestedProperties": { "role": { "dataType": "string" }, "name": { "dataType": "string", "required": true }, "email": { "dataType": "string", "required": true }, "id": { "dataType": "string", "required": true } } },
            "timestamp": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ISubscription": {
        "dataType": "refObject",
        "properties": {
            "organizationId": { "dataType": "string", "required": true },
            "planId": { "dataType": "string", "required": true },
            "status": { "dataType": "string" },
            "startDate": { "dataType": "datetime", "required": true },
            "endDate": { "dataType": "datetime", "required": true },
            "autoRenew": { "dataType": "boolean" },
            "id": { "dataType": "string" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Subscription": {
        "dataType": "refObject",
        "properties": {
            "organizationId": { "dataType": "string", "required": true },
            "planId": { "dataType": "string", "required": true },
            "status": { "dataType": "string" },
            "startDate": { "dataType": "datetime", "required": true },
            "endDate": { "dataType": "datetime", "required": true },
            "autoRenew": { "dataType": "boolean" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_Subscription_": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "organizationId": { "dataType": "string" }, "planId": { "dataType": "string" }, "status": { "dataType": "string" }, "startDate": { "dataType": "datetime" }, "endDate": { "dataType": "datetime" }, "autoRenew": { "dataType": "boolean" } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ModuleType": {
        "dataType": "refAlias",
        "type": { "dataType": "union", "subSchemas": [{ "dataType": "enum", "enums": ["cpu"] }, { "dataType": "enum", "enums": ["memory"] }, { "dataType": "enum", "enums": ["storage"] }, { "dataType": "enum", "enums": ["network"] }, { "dataType": "enum", "enums": ["antivirus"] }], "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IPlan": {
        "dataType": "refObject",
        "properties": {
            "name": { "dataType": "string", "required": true },
            "description": { "dataType": "string" },
            "maxMachines": { "dataType": "double", "required": true },
            "allowedModules": { "dataType": "array", "array": { "dataType": "refAlias", "ref": "ModuleType" }, "required": true },
            "billingPeriod": { "dataType": "string", "required": true },
            "price": { "dataType": "double", "required": true },
            "isActive": { "dataType": "boolean" },
            "id": { "dataType": "string" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Plan": {
        "dataType": "refObject",
        "properties": {
            "name": { "dataType": "string", "required": true },
            "description": { "dataType": "string" },
            "maxMachines": { "dataType": "double", "required": true },
            "allowedModules": { "dataType": "array", "array": { "dataType": "refAlias", "ref": "ModuleType" }, "required": true },
            "billingPeriod": { "dataType": "string", "required": true },
            "price": { "dataType": "double", "required": true },
            "isActive": { "dataType": "boolean" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_Plan_": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "name": { "dataType": "string" }, "description": { "dataType": "string" }, "maxMachines": { "dataType": "double" }, "allowedModules": { "dataType": "array", "array": { "dataType": "refAlias", "ref": "ModuleType" } }, "billingPeriod": { "dataType": "string" }, "price": { "dataType": "double" }, "isActive": { "dataType": "boolean" } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IOrganization": {
        "dataType": "refObject",
        "properties": {
            "name": { "dataType": "string", "required": true },
            "type": { "dataType": "string", "required": true },
            "parentId": { "dataType": "string" },
            "document": { "dataType": "string" },
            "email": { "dataType": "string" },
            "phone": { "dataType": "string" },
            "isActive": { "dataType": "boolean" },
            "id": { "dataType": "string" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Organization": {
        "dataType": "refObject",
        "properties": {
            "name": { "dataType": "string", "required": true },
            "type": { "dataType": "string", "required": true },
            "parentId": { "dataType": "string" },
            "document": { "dataType": "string" },
            "email": { "dataType": "string" },
            "phone": { "dataType": "string" },
            "isActive": { "dataType": "boolean" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_Organization_": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "name": { "dataType": "string" }, "type": { "dataType": "string" }, "parentId": { "dataType": "string" }, "document": { "dataType": "string" }, "email": { "dataType": "string" }, "phone": { "dataType": "string" }, "isActive": { "dataType": "boolean" } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IMachine": {
        "dataType": "refObject",
        "properties": {
            "machineId": { "dataType": "string", "required": true },
            "computerName": { "dataType": "string", "required": true },
            "operatingSystem": { "dataType": "string", "required": true },
            "operatingSystemVersion": { "dataType": "string", "required": true },
            "operatingSystemArchitecture": { "dataType": "string", "required": true },
            "operatingSystemDescription": { "dataType": "string", "required": true },
            "domainName": { "dataType": "string" },
            "workgroup": { "dataType": "string" },
            "isActive": { "dataType": "boolean", "required": true },
            "lastSeen": { "dataType": "datetime" },
            "description": { "dataType": "string" },
            "location": { "dataType": "string" },
            "owner": { "dataType": "string" },
            "organizationId": { "dataType": "string" },
            "id": { "dataType": "string" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Machine": {
        "dataType": "refObject",
        "properties": {
            "machineId": { "dataType": "string", "required": true },
            "computerName": { "dataType": "string", "required": true },
            "operatingSystem": { "dataType": "string", "required": true },
            "operatingSystemVersion": { "dataType": "string", "required": true },
            "operatingSystemArchitecture": { "dataType": "string", "required": true },
            "operatingSystemDescription": { "dataType": "string", "required": true },
            "domainName": { "dataType": "string" },
            "workgroup": { "dataType": "string" },
            "isActive": { "dataType": "boolean", "required": true },
            "lastSeen": { "dataType": "datetime" },
            "description": { "dataType": "string" },
            "location": { "dataType": "string" },
            "owner": { "dataType": "string" },
            "organizationId": { "dataType": "string" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ICustomField": {
        "dataType": "refObject",
        "properties": {
            "targetCollection": { "dataType": "string", "required": true },
            "fieldName": { "dataType": "string", "required": true },
            "fieldType": { "dataType": "string", "required": true },
            "required": { "dataType": "boolean" },
            "defaultValue": { "dataType": "any" },
            "options": { "dataType": "array", "array": { "dataType": "string" } },
            "description": { "dataType": "string" },
            "organizationId": { "dataType": "string" },
            "isActive": { "dataType": "boolean" },
            "id": { "dataType": "string" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CustomField": {
        "dataType": "refObject",
        "properties": {
            "targetCollection": { "dataType": "string", "required": true },
            "fieldName": { "dataType": "string", "required": true },
            "fieldType": { "dataType": "string", "required": true },
            "required": { "dataType": "boolean" },
            "defaultValue": { "dataType": "any" },
            "options": { "dataType": "array", "array": { "dataType": "string" } },
            "description": { "dataType": "string" },
            "organizationId": { "dataType": "string" },
            "isActive": { "dataType": "boolean" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_CustomField_": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "targetCollection": { "dataType": "string" }, "fieldName": { "dataType": "string" }, "fieldType": { "dataType": "string" }, "required": { "dataType": "boolean" }, "defaultValue": { "dataType": "any" }, "options": { "dataType": "array", "array": { "dataType": "string" } }, "description": { "dataType": "string" }, "organizationId": { "dataType": "string" }, "isActive": { "dataType": "boolean" } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ICustomFieldValue": {
        "dataType": "refObject",
        "properties": {
            "customFieldId": { "dataType": "string", "required": true },
            "targetCollection": { "dataType": "string", "required": true },
            "targetDocumentId": { "dataType": "string", "required": true },
            "fieldName": { "dataType": "string", "required": true },
            "value": { "dataType": "any", "required": true },
            "id": { "dataType": "string" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CustomFieldValue": {
        "dataType": "refObject",
        "properties": {
            "customFieldId": { "dataType": "string", "required": true },
            "targetCollection": { "dataType": "string", "required": true },
            "targetDocumentId": { "dataType": "string", "required": true },
            "fieldName": { "dataType": "string", "required": true },
            "value": { "dataType": "any", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IAccessLevel": {
        "dataType": "refObject",
        "properties": {
            "name": { "dataType": "string", "required": true },
            "level": { "dataType": "double", "required": true },
            "scope": { "dataType": "string", "required": true },
            "description": { "dataType": "string" },
            "isSystem": { "dataType": "boolean" },
            "isActive": { "dataType": "boolean" },
            "id": { "dataType": "string" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AccessLevel": {
        "dataType": "refObject",
        "properties": {
            "name": { "dataType": "string", "required": true },
            "level": { "dataType": "double", "required": true },
            "scope": { "dataType": "string", "required": true },
            "description": { "dataType": "string" },
            "isSystem": { "dataType": "boolean" },
            "isActive": { "dataType": "boolean" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_AccessLevel_": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "name": { "dataType": "string" }, "level": { "dataType": "double" }, "scope": { "dataType": "string" }, "description": { "dataType": "string" }, "isSystem": { "dataType": "boolean" }, "isActive": { "dataType": "boolean" } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new runtime_1.ExpressTemplateService(models, { "noImplicitAdditionalProperties": "throw-on-extras", "bodyCoercion": true });
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
function RegisterRoutes(app) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
    const argsStorageInformationController_getStorageInformationByMachineId = {
        machineId: { "in": "path", "name": "machineId", "required": true, "dataType": "string" },
        limit: { "in": "query", "name": "limit", "dataType": "double" },
    };
    app.get('/api/v1/monitoring/storage-information/machine/:machineId', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(StorageInformationController_1.StorageInformationController)), ...((0, runtime_1.fetchMiddlewares)(StorageInformationController_1.StorageInformationController.prototype.getStorageInformationByMachineId)), async function StorageInformationController_getStorageInformationByMachineId(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsStorageInformationController_getStorageInformationByMachineId, request, response });
            const controller = new StorageInformationController_1.StorageInformationController();
            await templateService.apiHandler({
                methodName: 'getStorageInformationByMachineId',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsStorageInformationController_getStorageInformation = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
    };
    app.get('/api/v1/monitoring/storage-information/:id', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(StorageInformationController_1.StorageInformationController)), ...((0, runtime_1.fetchMiddlewares)(StorageInformationController_1.StorageInformationController.prototype.getStorageInformation)), async function StorageInformationController_getStorageInformation(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsStorageInformationController_getStorageInformation, request, response });
            const controller = new StorageInformationController_1.StorageInformationController();
            await templateService.apiHandler({
                methodName: 'getStorageInformation',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsStorageInformationController_getLatestStorageInformation = {
        machineId: { "in": "path", "name": "machineId", "required": true, "dataType": "string" },
    };
    app.get('/api/v1/monitoring/storage-information/machine/:machineId/latest', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(StorageInformationController_1.StorageInformationController)), ...((0, runtime_1.fetchMiddlewares)(StorageInformationController_1.StorageInformationController.prototype.getLatestStorageInformation)), async function StorageInformationController_getLatestStorageInformation(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsStorageInformationController_getLatestStorageInformation, request, response });
            const controller = new StorageInformationController_1.StorageInformationController();
            await templateService.apiHandler({
                methodName: 'getLatestStorageInformation',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsStorageInformationController_createStorageInformation = {
        machineId: { "in": "path", "name": "machineId", "required": true, "dataType": "string" },
        body: { "in": "body", "name": "body", "required": true, "ref": "Omit_StorageInformation.machineId_" },
    };
    app.post('/api/v1/monitoring/storage-information/machine/:machineId', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(StorageInformationController_1.StorageInformationController)), ...((0, runtime_1.fetchMiddlewares)(StorageInformationController_1.StorageInformationController.prototype.createStorageInformation)), async function StorageInformationController_createStorageInformation(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsStorageInformationController_createStorageInformation, request, response });
            const controller = new StorageInformationController_1.StorageInformationController();
            await templateService.apiHandler({
                methodName: 'createStorageInformation',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsStorageInformationController_createStorageInformationBatch = {
        machineId: { "in": "path", "name": "machineId", "required": true, "dataType": "string" },
        body: { "in": "body", "name": "body", "required": true, "dataType": "array", "array": { "dataType": "refAlias", "ref": "Omit_StorageInformation.machineId_" } },
    };
    app.post('/api/v1/monitoring/storage-information/machine/:machineId/batch', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(StorageInformationController_1.StorageInformationController)), ...((0, runtime_1.fetchMiddlewares)(StorageInformationController_1.StorageInformationController.prototype.createStorageInformationBatch)), async function StorageInformationController_createStorageInformationBatch(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsStorageInformationController_createStorageInformationBatch, request, response });
            const controller = new StorageInformationController_1.StorageInformationController();
            await templateService.apiHandler({
                methodName: 'createStorageInformationBatch',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsStorageInformationController_getStorageInformationByDateRange = {
        machineId: { "in": "path", "name": "machineId", "required": true, "dataType": "string" },
        startDate: { "in": "query", "name": "startDate", "required": true, "dataType": "string" },
        endDate: { "in": "query", "name": "endDate", "required": true, "dataType": "string" },
    };
    app.get('/api/v1/monitoring/storage-information/machine/:machineId/range', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(StorageInformationController_1.StorageInformationController)), ...((0, runtime_1.fetchMiddlewares)(StorageInformationController_1.StorageInformationController.prototype.getStorageInformationByDateRange)), async function StorageInformationController_getStorageInformationByDateRange(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsStorageInformationController_getStorageInformationByDateRange, request, response });
            const controller = new StorageInformationController_1.StorageInformationController();
            await templateService.apiHandler({
                methodName: 'getStorageInformationByDateRange',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsStorageInformationController_deleteStorageInformation = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
    };
    app.delete('/api/v1/monitoring/storage-information/:id', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(StorageInformationController_1.StorageInformationController)), ...((0, runtime_1.fetchMiddlewares)(StorageInformationController_1.StorageInformationController.prototype.deleteStorageInformation)), async function StorageInformationController_deleteStorageInformation(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsStorageInformationController_deleteStorageInformation, request, response });
            const controller = new StorageInformationController_1.StorageInformationController();
            await templateService.apiHandler({
                methodName: 'deleteStorageInformation',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsStorageInformationController_deleteStorageInformationByMachineId = {
        machineId: { "in": "path", "name": "machineId", "required": true, "dataType": "string" },
    };
    app.delete('/api/v1/monitoring/storage-information/machine/:machineId', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(StorageInformationController_1.StorageInformationController)), ...((0, runtime_1.fetchMiddlewares)(StorageInformationController_1.StorageInformationController.prototype.deleteStorageInformationByMachineId)), async function StorageInformationController_deleteStorageInformationByMachineId(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsStorageInformationController_deleteStorageInformationByMachineId, request, response });
            const controller = new StorageInformationController_1.StorageInformationController();
            await templateService.apiHandler({
                methodName: 'deleteStorageInformationByMachineId',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsNetworkInformationController_getNetworkInformationByMachineId = {
        machineId: { "in": "path", "name": "machineId", "required": true, "dataType": "string" },
        limit: { "in": "query", "name": "limit", "dataType": "double" },
    };
    app.get('/api/v1/monitoring/network-information/machine/:machineId', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(NetworkInformationController_1.NetworkInformationController)), ...((0, runtime_1.fetchMiddlewares)(NetworkInformationController_1.NetworkInformationController.prototype.getNetworkInformationByMachineId)), async function NetworkInformationController_getNetworkInformationByMachineId(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsNetworkInformationController_getNetworkInformationByMachineId, request, response });
            const controller = new NetworkInformationController_1.NetworkInformationController();
            await templateService.apiHandler({
                methodName: 'getNetworkInformationByMachineId',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsNetworkInformationController_getLatestNetworkInformation = {
        machineId: { "in": "path", "name": "machineId", "required": true, "dataType": "string" },
    };
    app.get('/api/v1/monitoring/network-information/machine/:machineId/latest', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(NetworkInformationController_1.NetworkInformationController)), ...((0, runtime_1.fetchMiddlewares)(NetworkInformationController_1.NetworkInformationController.prototype.getLatestNetworkInformation)), async function NetworkInformationController_getLatestNetworkInformation(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsNetworkInformationController_getLatestNetworkInformation, request, response });
            const controller = new NetworkInformationController_1.NetworkInformationController();
            await templateService.apiHandler({
                methodName: 'getLatestNetworkInformation',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsNetworkInformationController_createNetworkInformation = {
        machineId: { "in": "path", "name": "machineId", "required": true, "dataType": "string" },
        body: { "in": "body", "name": "body", "required": true, "ref": "Omit_NetworkInformation.machineId_" },
    };
    app.post('/api/v1/monitoring/network-information/machine/:machineId', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(NetworkInformationController_1.NetworkInformationController)), ...((0, runtime_1.fetchMiddlewares)(NetworkInformationController_1.NetworkInformationController.prototype.createNetworkInformation)), async function NetworkInformationController_createNetworkInformation(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsNetworkInformationController_createNetworkInformation, request, response });
            const controller = new NetworkInformationController_1.NetworkInformationController();
            await templateService.apiHandler({
                methodName: 'createNetworkInformation',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsNetworkInformationController_createNetworkInformationBatch = {
        machineId: { "in": "path", "name": "machineId", "required": true, "dataType": "string" },
        body: { "in": "body", "name": "body", "required": true, "dataType": "array", "array": { "dataType": "refAlias", "ref": "Omit_NetworkInformation.machineId_" } },
    };
    app.post('/api/v1/monitoring/network-information/machine/:machineId/batch', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(NetworkInformationController_1.NetworkInformationController)), ...((0, runtime_1.fetchMiddlewares)(NetworkInformationController_1.NetworkInformationController.prototype.createNetworkInformationBatch)), async function NetworkInformationController_createNetworkInformationBatch(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsNetworkInformationController_createNetworkInformationBatch, request, response });
            const controller = new NetworkInformationController_1.NetworkInformationController();
            await templateService.apiHandler({
                methodName: 'createNetworkInformationBatch',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsNetworkInformationController_deleteNetworkInformation = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
    };
    app.delete('/api/v1/monitoring/network-information/:id', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(NetworkInformationController_1.NetworkInformationController)), ...((0, runtime_1.fetchMiddlewares)(NetworkInformationController_1.NetworkInformationController.prototype.deleteNetworkInformation)), async function NetworkInformationController_deleteNetworkInformation(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsNetworkInformationController_deleteNetworkInformation, request, response });
            const controller = new NetworkInformationController_1.NetworkInformationController();
            await templateService.apiHandler({
                methodName: 'deleteNetworkInformation',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsMonitoringController_receiveSnapshot = {
        body: { "in": "body", "name": "body", "required": true, "ref": "FullMachineData" },
        req: { "in": "request", "name": "req", "required": true, "dataType": "object" },
    };
    app.post('/api/v1/monitoring/snapshot', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(MonitoringController_1.MonitoringController)), ...((0, runtime_1.fetchMiddlewares)(MonitoringController_1.MonitoringController.prototype.receiveSnapshot)), async function MonitoringController_receiveSnapshot(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsMonitoringController_receiveSnapshot, request, response });
            const controller = new MonitoringController_1.MonitoringController();
            await templateService.apiHandler({
                methodName: 'receiveSnapshot',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsMonitoringController_getLatestSnapshot = {
        machineId: { "in": "path", "name": "machineId", "required": true, "dataType": "string" },
    };
    app.get('/api/v1/monitoring/:machineId/latest', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(MonitoringController_1.MonitoringController)), ...((0, runtime_1.fetchMiddlewares)(MonitoringController_1.MonitoringController.prototype.getLatestSnapshot)), async function MonitoringController_getLatestSnapshot(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsMonitoringController_getLatestSnapshot, request, response });
            const controller = new MonitoringController_1.MonitoringController();
            await templateService.apiHandler({
                methodName: 'getLatestSnapshot',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsMonitoringController_getMachineHistory = {
        machineId: { "in": "path", "name": "machineId", "required": true, "dataType": "string" },
        startDate: { "in": "query", "name": "startDate", "dataType": "string" },
        endDate: { "in": "query", "name": "endDate", "dataType": "string" },
    };
    app.get('/api/v1/monitoring/:machineId/history', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(MonitoringController_1.MonitoringController)), ...((0, runtime_1.fetchMiddlewares)(MonitoringController_1.MonitoringController.prototype.getMachineHistory)), async function MonitoringController_getMachineHistory(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsMonitoringController_getMachineHistory, request, response });
            const controller = new MonitoringController_1.MonitoringController();
            await templateService.apiHandler({
                methodName: 'getMachineHistory',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsMemoryInformationController_getMemoryInformationByMachineId = {
        machineId: { "in": "path", "name": "machineId", "required": true, "dataType": "string" },
        limit: { "in": "query", "name": "limit", "dataType": "double" },
    };
    app.get('/api/v1/monitoring/memory-information/machine/:machineId', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(MemoryInformationController_1.MemoryInformationController)), ...((0, runtime_1.fetchMiddlewares)(MemoryInformationController_1.MemoryInformationController.prototype.getMemoryInformationByMachineId)), async function MemoryInformationController_getMemoryInformationByMachineId(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsMemoryInformationController_getMemoryInformationByMachineId, request, response });
            const controller = new MemoryInformationController_1.MemoryInformationController();
            await templateService.apiHandler({
                methodName: 'getMemoryInformationByMachineId',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsMemoryInformationController_getLatestMemoryInformation = {
        machineId: { "in": "path", "name": "machineId", "required": true, "dataType": "string" },
    };
    app.get('/api/v1/monitoring/memory-information/machine/:machineId/latest', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(MemoryInformationController_1.MemoryInformationController)), ...((0, runtime_1.fetchMiddlewares)(MemoryInformationController_1.MemoryInformationController.prototype.getLatestMemoryInformation)), async function MemoryInformationController_getLatestMemoryInformation(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsMemoryInformationController_getLatestMemoryInformation, request, response });
            const controller = new MemoryInformationController_1.MemoryInformationController();
            await templateService.apiHandler({
                methodName: 'getLatestMemoryInformation',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsMemoryInformationController_createMemoryInformation = {
        machineId: { "in": "path", "name": "machineId", "required": true, "dataType": "string" },
        body: { "in": "body", "name": "body", "required": true, "ref": "Omit_MemoryInformation.machineId_" },
    };
    app.post('/api/v1/monitoring/memory-information/machine/:machineId', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(MemoryInformationController_1.MemoryInformationController)), ...((0, runtime_1.fetchMiddlewares)(MemoryInformationController_1.MemoryInformationController.prototype.createMemoryInformation)), async function MemoryInformationController_createMemoryInformation(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsMemoryInformationController_createMemoryInformation, request, response });
            const controller = new MemoryInformationController_1.MemoryInformationController();
            await templateService.apiHandler({
                methodName: 'createMemoryInformation',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsMemoryInformationController_createMemoryInformationBatch = {
        machineId: { "in": "path", "name": "machineId", "required": true, "dataType": "string" },
        body: { "in": "body", "name": "body", "required": true, "dataType": "array", "array": { "dataType": "refAlias", "ref": "Omit_MemoryInformation.machineId_" } },
    };
    app.post('/api/v1/monitoring/memory-information/machine/:machineId/batch', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(MemoryInformationController_1.MemoryInformationController)), ...((0, runtime_1.fetchMiddlewares)(MemoryInformationController_1.MemoryInformationController.prototype.createMemoryInformationBatch)), async function MemoryInformationController_createMemoryInformationBatch(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsMemoryInformationController_createMemoryInformationBatch, request, response });
            const controller = new MemoryInformationController_1.MemoryInformationController();
            await templateService.apiHandler({
                methodName: 'createMemoryInformationBatch',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsMemoryInformationController_deleteMemoryInformation = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
    };
    app.delete('/api/v1/monitoring/memory-information/:id', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(MemoryInformationController_1.MemoryInformationController)), ...((0, runtime_1.fetchMiddlewares)(MemoryInformationController_1.MemoryInformationController.prototype.deleteMemoryInformation)), async function MemoryInformationController_deleteMemoryInformation(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsMemoryInformationController_deleteMemoryInformation, request, response });
            const controller = new MemoryInformationController_1.MemoryInformationController();
            await templateService.apiHandler({
                methodName: 'deleteMemoryInformation',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsCpuInformationController_getCpuInformationByMachineId = {
        machineId: { "in": "path", "name": "machineId", "required": true, "dataType": "string" },
        limit: { "in": "query", "name": "limit", "dataType": "double" },
    };
    app.get('/api/v1/monitoring/cpu-information/machine/:machineId', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(CpuInformationController_1.CpuInformationController)), ...((0, runtime_1.fetchMiddlewares)(CpuInformationController_1.CpuInformationController.prototype.getCpuInformationByMachineId)), async function CpuInformationController_getCpuInformationByMachineId(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsCpuInformationController_getCpuInformationByMachineId, request, response });
            const controller = new CpuInformationController_1.CpuInformationController();
            await templateService.apiHandler({
                methodName: 'getCpuInformationByMachineId',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsCpuInformationController_getCpuInformation = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
    };
    app.get('/api/v1/monitoring/cpu-information/:id', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(CpuInformationController_1.CpuInformationController)), ...((0, runtime_1.fetchMiddlewares)(CpuInformationController_1.CpuInformationController.prototype.getCpuInformation)), async function CpuInformationController_getCpuInformation(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsCpuInformationController_getCpuInformation, request, response });
            const controller = new CpuInformationController_1.CpuInformationController();
            await templateService.apiHandler({
                methodName: 'getCpuInformation',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsCpuInformationController_getLatestCpuInformation = {
        machineId: { "in": "path", "name": "machineId", "required": true, "dataType": "string" },
    };
    app.get('/api/v1/monitoring/cpu-information/machine/:machineId/latest', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(CpuInformationController_1.CpuInformationController)), ...((0, runtime_1.fetchMiddlewares)(CpuInformationController_1.CpuInformationController.prototype.getLatestCpuInformation)), async function CpuInformationController_getLatestCpuInformation(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsCpuInformationController_getLatestCpuInformation, request, response });
            const controller = new CpuInformationController_1.CpuInformationController();
            await templateService.apiHandler({
                methodName: 'getLatestCpuInformation',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsCpuInformationController_createCpuInformation = {
        machineId: { "in": "path", "name": "machineId", "required": true, "dataType": "string" },
        body: { "in": "body", "name": "body", "required": true, "ref": "Omit_CpuInformation.machineId_" },
    };
    app.post('/api/v1/monitoring/cpu-information/machine/:machineId', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(CpuInformationController_1.CpuInformationController)), ...((0, runtime_1.fetchMiddlewares)(CpuInformationController_1.CpuInformationController.prototype.createCpuInformation)), async function CpuInformationController_createCpuInformation(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsCpuInformationController_createCpuInformation, request, response });
            const controller = new CpuInformationController_1.CpuInformationController();
            await templateService.apiHandler({
                methodName: 'createCpuInformation',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsCpuInformationController_createCpuInformationBatch = {
        machineId: { "in": "path", "name": "machineId", "required": true, "dataType": "string" },
        body: { "in": "body", "name": "body", "required": true, "dataType": "array", "array": { "dataType": "refAlias", "ref": "Omit_CpuInformation.machineId_" } },
    };
    app.post('/api/v1/monitoring/cpu-information/machine/:machineId/batch', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(CpuInformationController_1.CpuInformationController)), ...((0, runtime_1.fetchMiddlewares)(CpuInformationController_1.CpuInformationController.prototype.createCpuInformationBatch)), async function CpuInformationController_createCpuInformationBatch(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsCpuInformationController_createCpuInformationBatch, request, response });
            const controller = new CpuInformationController_1.CpuInformationController();
            await templateService.apiHandler({
                methodName: 'createCpuInformationBatch',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsCpuInformationController_getCpuInformationByDateRange = {
        machineId: { "in": "path", "name": "machineId", "required": true, "dataType": "string" },
        startDate: { "in": "query", "name": "startDate", "required": true, "dataType": "string" },
        endDate: { "in": "query", "name": "endDate", "required": true, "dataType": "string" },
    };
    app.get('/api/v1/monitoring/cpu-information/machine/:machineId/range', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(CpuInformationController_1.CpuInformationController)), ...((0, runtime_1.fetchMiddlewares)(CpuInformationController_1.CpuInformationController.prototype.getCpuInformationByDateRange)), async function CpuInformationController_getCpuInformationByDateRange(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsCpuInformationController_getCpuInformationByDateRange, request, response });
            const controller = new CpuInformationController_1.CpuInformationController();
            await templateService.apiHandler({
                methodName: 'getCpuInformationByDateRange',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsCpuInformationController_deleteCpuInformation = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
    };
    app.delete('/api/v1/monitoring/cpu-information/:id', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(CpuInformationController_1.CpuInformationController)), ...((0, runtime_1.fetchMiddlewares)(CpuInformationController_1.CpuInformationController.prototype.deleteCpuInformation)), async function CpuInformationController_deleteCpuInformation(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsCpuInformationController_deleteCpuInformation, request, response });
            const controller = new CpuInformationController_1.CpuInformationController();
            await templateService.apiHandler({
                methodName: 'deleteCpuInformation',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsCpuInformationController_deleteCpuInformationByMachineId = {
        machineId: { "in": "path", "name": "machineId", "required": true, "dataType": "string" },
    };
    app.delete('/api/v1/monitoring/cpu-information/machine/:machineId', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(CpuInformationController_1.CpuInformationController)), ...((0, runtime_1.fetchMiddlewares)(CpuInformationController_1.CpuInformationController.prototype.deleteCpuInformationByMachineId)), async function CpuInformationController_deleteCpuInformationByMachineId(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsCpuInformationController_deleteCpuInformationByMachineId, request, response });
            const controller = new CpuInformationController_1.CpuInformationController();
            await templateService.apiHandler({
                methodName: 'deleteCpuInformationByMachineId',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsAntivirusInformationController_getAntivirusInformationByMachineId = {
        machineId: { "in": "path", "name": "machineId", "required": true, "dataType": "string" },
        limit: { "in": "query", "name": "limit", "dataType": "double" },
    };
    app.get('/api/v1/monitoring/antivirus-information/machine/:machineId', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(AntivirusInformationController_1.AntivirusInformationController)), ...((0, runtime_1.fetchMiddlewares)(AntivirusInformationController_1.AntivirusInformationController.prototype.getAntivirusInformationByMachineId)), async function AntivirusInformationController_getAntivirusInformationByMachineId(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsAntivirusInformationController_getAntivirusInformationByMachineId, request, response });
            const controller = new AntivirusInformationController_1.AntivirusInformationController();
            await templateService.apiHandler({
                methodName: 'getAntivirusInformationByMachineId',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsAntivirusInformationController_getLatestAntivirusInformation = {
        machineId: { "in": "path", "name": "machineId", "required": true, "dataType": "string" },
    };
    app.get('/api/v1/monitoring/antivirus-information/machine/:machineId/latest', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(AntivirusInformationController_1.AntivirusInformationController)), ...((0, runtime_1.fetchMiddlewares)(AntivirusInformationController_1.AntivirusInformationController.prototype.getLatestAntivirusInformation)), async function AntivirusInformationController_getLatestAntivirusInformation(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsAntivirusInformationController_getLatestAntivirusInformation, request, response });
            const controller = new AntivirusInformationController_1.AntivirusInformationController();
            await templateService.apiHandler({
                methodName: 'getLatestAntivirusInformation',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsAntivirusInformationController_createAntivirusInformation = {
        machineId: { "in": "path", "name": "machineId", "required": true, "dataType": "string" },
        body: { "in": "body", "name": "body", "required": true, "ref": "Omit_AntivirusInformation.machineId_" },
    };
    app.post('/api/v1/monitoring/antivirus-information/machine/:machineId', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(AntivirusInformationController_1.AntivirusInformationController)), ...((0, runtime_1.fetchMiddlewares)(AntivirusInformationController_1.AntivirusInformationController.prototype.createAntivirusInformation)), async function AntivirusInformationController_createAntivirusInformation(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsAntivirusInformationController_createAntivirusInformation, request, response });
            const controller = new AntivirusInformationController_1.AntivirusInformationController();
            await templateService.apiHandler({
                methodName: 'createAntivirusInformation',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsAntivirusInformationController_createAntivirusInformationBatch = {
        machineId: { "in": "path", "name": "machineId", "required": true, "dataType": "string" },
        body: { "in": "body", "name": "body", "required": true, "dataType": "array", "array": { "dataType": "refAlias", "ref": "Omit_AntivirusInformation.machineId_" } },
    };
    app.post('/api/v1/monitoring/antivirus-information/machine/:machineId/batch', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(AntivirusInformationController_1.AntivirusInformationController)), ...((0, runtime_1.fetchMiddlewares)(AntivirusInformationController_1.AntivirusInformationController.prototype.createAntivirusInformationBatch)), async function AntivirusInformationController_createAntivirusInformationBatch(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsAntivirusInformationController_createAntivirusInformationBatch, request, response });
            const controller = new AntivirusInformationController_1.AntivirusInformationController();
            await templateService.apiHandler({
                methodName: 'createAntivirusInformationBatch',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsAntivirusInformationController_deleteAntivirusInformation = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
    };
    app.delete('/api/v1/monitoring/antivirus-information/:id', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(AntivirusInformationController_1.AntivirusInformationController)), ...((0, runtime_1.fetchMiddlewares)(AntivirusInformationController_1.AntivirusInformationController.prototype.deleteAntivirusInformation)), async function AntivirusInformationController_deleteAntivirusInformation(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsAntivirusInformationController_deleteAntivirusInformation, request, response });
            const controller = new AntivirusInformationController_1.AntivirusInformationController();
            await templateService.apiHandler({
                methodName: 'deleteAntivirusInformation',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsUserController_getUsers = {
        req: { "in": "request", "name": "req", "required": true, "dataType": "object" },
    };
    app.get('/api/v1/users', authenticateMiddleware([{ "jwt": ["admin"] }]), ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController)), ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController.prototype.getUsers)), async function UserController_getUsers(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsUserController_getUsers, request, response });
            const controller = new UserController_1.UserController();
            await templateService.apiHandler({
                methodName: 'getUsers',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsUserController_getUser = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
    };
    app.get('/api/v1/users/:id', authenticateMiddleware([{ "jwt": ["admin"] }]), ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController)), ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController.prototype.getUser)), async function UserController_getUser(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsUserController_getUser, request, response });
            const controller = new UserController_1.UserController();
            await templateService.apiHandler({
                methodName: 'getUser',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsUserController_createUser = {
        body: { "in": "body", "name": "body", "required": true, "ref": "User" },
    };
    app.post('/api/v1/users', authenticateMiddleware([{ "jwt": ["admin"] }]), ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController)), ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController.prototype.createUser)), async function UserController_createUser(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsUserController_createUser, request, response });
            const controller = new UserController_1.UserController();
            await templateService.apiHandler({
                methodName: 'createUser',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsUserController_upsertUser = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
        body: { "in": "body", "name": "body", "required": true, "ref": "User" },
    };
    app.put('/api/v1/users/:id', authenticateMiddleware([{ "jwt": ["admin"] }]), ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController)), ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController.prototype.upsertUser)), async function UserController_upsertUser(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsUserController_upsertUser, request, response });
            const controller = new UserController_1.UserController();
            await templateService.apiHandler({
                methodName: 'upsertUser',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsUserController_deleteUser = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
    };
    app.delete('/api/v1/users/:id', authenticateMiddleware([{ "jwt": ["admin"] }]), ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController)), ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController.prototype.deleteUser)), async function UserController_deleteUser(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsUserController_deleteUser, request, response });
            const controller = new UserController_1.UserController();
            await templateService.apiHandler({
                methodName: 'deleteUser',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsAuthController_login = {
        body: { "in": "body", "name": "body", "required": true, "ref": "LoginRequest" },
    };
    app.post('/api/v1/auth/login', ...((0, runtime_1.fetchMiddlewares)(AuthController_1.AuthController)), ...((0, runtime_1.fetchMiddlewares)(AuthController_1.AuthController.prototype.login)), async function AuthController_login(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsAuthController_login, request, response });
            const controller = new AuthController_1.AuthController();
            await templateService.apiHandler({
                methodName: 'login',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsAuthController_register = {
        body: { "in": "body", "name": "body", "required": true, "ref": "RegisterRequest" },
    };
    app.post('/api/v1/auth/register', ...((0, runtime_1.fetchMiddlewares)(AuthController_1.AuthController)), ...((0, runtime_1.fetchMiddlewares)(AuthController_1.AuthController.prototype.register)), async function AuthController_register(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsAuthController_register, request, response });
            const controller = new AuthController_1.AuthController();
            await templateService.apiHandler({
                methodName: 'register',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsAuthController_refreshToken = {
        body: { "in": "body", "name": "body", "required": true, "ref": "RefreshTokenRequest" },
    };
    app.post('/api/v1/auth/refresh', ...((0, runtime_1.fetchMiddlewares)(AuthController_1.AuthController)), ...((0, runtime_1.fetchMiddlewares)(AuthController_1.AuthController.prototype.refreshToken)), async function AuthController_refreshToken(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsAuthController_refreshToken, request, response });
            const controller = new AuthController_1.AuthController();
            await templateService.apiHandler({
                methodName: 'refreshToken',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsTestController_publicEndpoint = {};
    app.get('/api/v1/test/public', ...((0, runtime_1.fetchMiddlewares)(TestController_1.TestController)), ...((0, runtime_1.fetchMiddlewares)(TestController_1.TestController.prototype.publicEndpoint)), async function TestController_publicEndpoint(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsTestController_publicEndpoint, request, response });
            const controller = new TestController_1.TestController();
            await templateService.apiHandler({
                methodName: 'publicEndpoint',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsTestController_protectedEndpoint = {
        req: { "in": "request", "name": "req", "required": true, "dataType": "object" },
    };
    app.get('/api/v1/test/protected', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(TestController_1.TestController)), ...((0, runtime_1.fetchMiddlewares)(TestController_1.TestController.prototype.protectedEndpoint)), async function TestController_protectedEndpoint(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsTestController_protectedEndpoint, request, response });
            const controller = new TestController_1.TestController();
            await templateService.apiHandler({
                methodName: 'protectedEndpoint',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsTestController_adminEndpoint = {
        req: { "in": "request", "name": "req", "required": true, "dataType": "object" },
    };
    app.get('/api/v1/test/admin', authenticateMiddleware([{ "jwt": ["admin"] }]), ...((0, runtime_1.fetchMiddlewares)(TestController_1.TestController)), ...((0, runtime_1.fetchMiddlewares)(TestController_1.TestController.prototype.adminEndpoint)), async function TestController_adminEndpoint(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsTestController_adminEndpoint, request, response });
            const controller = new TestController_1.TestController();
            await templateService.apiHandler({
                methodName: 'adminEndpoint',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsTestController_moderatorEndpoint = {
        req: { "in": "request", "name": "req", "required": true, "dataType": "object" },
    };
    app.get('/api/v1/test/moderator', authenticateMiddleware([{ "jwt": ["moderator", "admin"] }]), ...((0, runtime_1.fetchMiddlewares)(TestController_1.TestController)), ...((0, runtime_1.fetchMiddlewares)(TestController_1.TestController.prototype.moderatorEndpoint)), async function TestController_moderatorEndpoint(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsTestController_moderatorEndpoint, request, response });
            const controller = new TestController_1.TestController();
            await templateService.apiHandler({
                methodName: 'moderatorEndpoint',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsTestController_validateToken = {
        req: { "in": "request", "name": "req", "required": true, "dataType": "object" },
    };
    app.get('/api/v1/test/validate-token', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(TestController_1.TestController)), ...((0, runtime_1.fetchMiddlewares)(TestController_1.TestController.prototype.validateToken)), async function TestController_validateToken(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsTestController_validateToken, request, response });
            const controller = new TestController_1.TestController();
            await templateService.apiHandler({
                methodName: 'validateToken',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSubscriptionController_getAll = {};
    app.get('/api/v1/subscriptions', authenticateMiddleware([{ "jwt": ["master"] }]), ...((0, runtime_1.fetchMiddlewares)(SubscriptionController_1.SubscriptionController)), ...((0, runtime_1.fetchMiddlewares)(SubscriptionController_1.SubscriptionController.prototype.getAll)), async function SubscriptionController_getAll(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsSubscriptionController_getAll, request, response });
            const controller = new SubscriptionController_1.SubscriptionController();
            await templateService.apiHandler({
                methodName: 'getAll',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSubscriptionController_getByOrganization = {
        organizationId: { "in": "path", "name": "organizationId", "required": true, "dataType": "string" },
    };
    app.get('/api/v1/subscriptions/organization/:organizationId', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(SubscriptionController_1.SubscriptionController)), ...((0, runtime_1.fetchMiddlewares)(SubscriptionController_1.SubscriptionController.prototype.getByOrganization)), async function SubscriptionController_getByOrganization(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsSubscriptionController_getByOrganization, request, response });
            const controller = new SubscriptionController_1.SubscriptionController();
            await templateService.apiHandler({
                methodName: 'getByOrganization',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSubscriptionController_getById = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
    };
    app.get('/api/v1/subscriptions/:id', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(SubscriptionController_1.SubscriptionController)), ...((0, runtime_1.fetchMiddlewares)(SubscriptionController_1.SubscriptionController.prototype.getById)), async function SubscriptionController_getById(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsSubscriptionController_getById, request, response });
            const controller = new SubscriptionController_1.SubscriptionController();
            await templateService.apiHandler({
                methodName: 'getById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSubscriptionController_create = {
        body: { "in": "body", "name": "body", "required": true, "ref": "Subscription" },
    };
    app.post('/api/v1/subscriptions', authenticateMiddleware([{ "jwt": ["admin"] }]), ...((0, runtime_1.fetchMiddlewares)(SubscriptionController_1.SubscriptionController)), ...((0, runtime_1.fetchMiddlewares)(SubscriptionController_1.SubscriptionController.prototype.create)), async function SubscriptionController_create(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsSubscriptionController_create, request, response });
            const controller = new SubscriptionController_1.SubscriptionController();
            await templateService.apiHandler({
                methodName: 'create',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSubscriptionController_update = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
        body: { "in": "body", "name": "body", "required": true, "ref": "Partial_Subscription_" },
    };
    app.put('/api/v1/subscriptions/:id', authenticateMiddleware([{ "jwt": ["admin"] }]), ...((0, runtime_1.fetchMiddlewares)(SubscriptionController_1.SubscriptionController)), ...((0, runtime_1.fetchMiddlewares)(SubscriptionController_1.SubscriptionController.prototype.update)), async function SubscriptionController_update(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsSubscriptionController_update, request, response });
            const controller = new SubscriptionController_1.SubscriptionController();
            await templateService.apiHandler({
                methodName: 'update',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSubscriptionController_delete = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
    };
    app.delete('/api/v1/subscriptions/:id', authenticateMiddleware([{ "jwt": ["master"] }]), ...((0, runtime_1.fetchMiddlewares)(SubscriptionController_1.SubscriptionController)), ...((0, runtime_1.fetchMiddlewares)(SubscriptionController_1.SubscriptionController.prototype.delete)), async function SubscriptionController_delete(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsSubscriptionController_delete, request, response });
            const controller = new SubscriptionController_1.SubscriptionController();
            await templateService.apiHandler({
                methodName: 'delete',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsSubscriptionController_validateSubscription = {
        organizationId: { "in": "path", "name": "organizationId", "required": true, "dataType": "string" },
        module: { "in": "path", "name": "module", "required": true, "ref": "ModuleType" },
    };
    app.get('/api/v1/subscriptions/validate/:organizationId/:module', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(SubscriptionController_1.SubscriptionController)), ...((0, runtime_1.fetchMiddlewares)(SubscriptionController_1.SubscriptionController.prototype.validateSubscription)), async function SubscriptionController_validateSubscription(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsSubscriptionController_validateSubscription, request, response });
            const controller = new SubscriptionController_1.SubscriptionController();
            await templateService.apiHandler({
                methodName: 'validateSubscription',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsPlanController_getAll = {};
    app.get('/api/v1/plans', authenticateMiddleware([{ "jwt": ["master"] }]), ...((0, runtime_1.fetchMiddlewares)(PlanController_1.PlanController)), ...((0, runtime_1.fetchMiddlewares)(PlanController_1.PlanController.prototype.getAll)), async function PlanController_getAll(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsPlanController_getAll, request, response });
            const controller = new PlanController_1.PlanController();
            await templateService.apiHandler({
                methodName: 'getAll',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsPlanController_getById = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
    };
    app.get('/api/v1/plans/:id', authenticateMiddleware([{ "jwt": ["master"] }]), ...((0, runtime_1.fetchMiddlewares)(PlanController_1.PlanController)), ...((0, runtime_1.fetchMiddlewares)(PlanController_1.PlanController.prototype.getById)), async function PlanController_getById(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsPlanController_getById, request, response });
            const controller = new PlanController_1.PlanController();
            await templateService.apiHandler({
                methodName: 'getById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsPlanController_create = {
        body: { "in": "body", "name": "body", "required": true, "ref": "Plan" },
    };
    app.post('/api/v1/plans', authenticateMiddleware([{ "jwt": ["master"] }]), ...((0, runtime_1.fetchMiddlewares)(PlanController_1.PlanController)), ...((0, runtime_1.fetchMiddlewares)(PlanController_1.PlanController.prototype.create)), async function PlanController_create(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsPlanController_create, request, response });
            const controller = new PlanController_1.PlanController();
            await templateService.apiHandler({
                methodName: 'create',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsPlanController_update = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
        body: { "in": "body", "name": "body", "required": true, "ref": "Partial_Plan_" },
    };
    app.put('/api/v1/plans/:id', authenticateMiddleware([{ "jwt": ["master"] }]), ...((0, runtime_1.fetchMiddlewares)(PlanController_1.PlanController)), ...((0, runtime_1.fetchMiddlewares)(PlanController_1.PlanController.prototype.update)), async function PlanController_update(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsPlanController_update, request, response });
            const controller = new PlanController_1.PlanController();
            await templateService.apiHandler({
                methodName: 'update',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsPlanController_delete = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
    };
    app.delete('/api/v1/plans/:id', authenticateMiddleware([{ "jwt": ["master"] }]), ...((0, runtime_1.fetchMiddlewares)(PlanController_1.PlanController)), ...((0, runtime_1.fetchMiddlewares)(PlanController_1.PlanController.prototype.delete)), async function PlanController_delete(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsPlanController_delete, request, response });
            const controller = new PlanController_1.PlanController();
            await templateService.apiHandler({
                methodName: 'delete',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsOrganizationController_getAll = {};
    app.get('/api/v1/organizations', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(OrganizationController_1.OrganizationController)), ...((0, runtime_1.fetchMiddlewares)(OrganizationController_1.OrganizationController.prototype.getAll)), async function OrganizationController_getAll(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsOrganizationController_getAll, request, response });
            const controller = new OrganizationController_1.OrganizationController();
            await templateService.apiHandler({
                methodName: 'getAll',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsOrganizationController_getById = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
    };
    app.get('/api/v1/organizations/:id', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(OrganizationController_1.OrganizationController)), ...((0, runtime_1.fetchMiddlewares)(OrganizationController_1.OrganizationController.prototype.getById)), async function OrganizationController_getById(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsOrganizationController_getById, request, response });
            const controller = new OrganizationController_1.OrganizationController();
            await templateService.apiHandler({
                methodName: 'getById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsOrganizationController_getCustomersByCompany = {
        companyId: { "in": "path", "name": "companyId", "required": true, "dataType": "string" },
    };
    app.get('/api/v1/organizations/company/:companyId/customers', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(OrganizationController_1.OrganizationController)), ...((0, runtime_1.fetchMiddlewares)(OrganizationController_1.OrganizationController.prototype.getCustomersByCompany)), async function OrganizationController_getCustomersByCompany(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsOrganizationController_getCustomersByCompany, request, response });
            const controller = new OrganizationController_1.OrganizationController();
            await templateService.apiHandler({
                methodName: 'getCustomersByCompany',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsOrganizationController_create = {
        body: { "in": "body", "name": "body", "required": true, "ref": "Organization" },
    };
    app.post('/api/v1/organizations', authenticateMiddleware([{ "jwt": ["admin"] }]), ...((0, runtime_1.fetchMiddlewares)(OrganizationController_1.OrganizationController)), ...((0, runtime_1.fetchMiddlewares)(OrganizationController_1.OrganizationController.prototype.create)), async function OrganizationController_create(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsOrganizationController_create, request, response });
            const controller = new OrganizationController_1.OrganizationController();
            await templateService.apiHandler({
                methodName: 'create',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsOrganizationController_update = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
        body: { "in": "body", "name": "body", "required": true, "ref": "Partial_Organization_" },
    };
    app.put('/api/v1/organizations/:id', authenticateMiddleware([{ "jwt": ["admin"] }]), ...((0, runtime_1.fetchMiddlewares)(OrganizationController_1.OrganizationController)), ...((0, runtime_1.fetchMiddlewares)(OrganizationController_1.OrganizationController.prototype.update)), async function OrganizationController_update(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsOrganizationController_update, request, response });
            const controller = new OrganizationController_1.OrganizationController();
            await templateService.apiHandler({
                methodName: 'update',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsOrganizationController_delete = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
    };
    app.delete('/api/v1/organizations/:id', authenticateMiddleware([{ "jwt": ["master"] }]), ...((0, runtime_1.fetchMiddlewares)(OrganizationController_1.OrganizationController)), ...((0, runtime_1.fetchMiddlewares)(OrganizationController_1.OrganizationController.prototype.delete)), async function OrganizationController_delete(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsOrganizationController_delete, request, response });
            const controller = new OrganizationController_1.OrganizationController();
            await templateService.apiHandler({
                methodName: 'delete',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsMachineController_getMachines = {
        req: { "in": "request", "name": "req", "required": true, "dataType": "object" },
    };
    app.get('/api/v1/machines', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(MachineController_1.MachineController)), ...((0, runtime_1.fetchMiddlewares)(MachineController_1.MachineController.prototype.getMachines)), async function MachineController_getMachines(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsMachineController_getMachines, request, response });
            const controller = new MachineController_1.MachineController();
            await templateService.apiHandler({
                methodName: 'getMachines',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsMachineController_getMachine = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
    };
    app.get('/api/v1/machines/:id', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(MachineController_1.MachineController)), ...((0, runtime_1.fetchMiddlewares)(MachineController_1.MachineController.prototype.getMachine)), async function MachineController_getMachine(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsMachineController_getMachine, request, response });
            const controller = new MachineController_1.MachineController();
            await templateService.apiHandler({
                methodName: 'getMachine',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsMachineController_getMachineByMachineId = {
        machineId: { "in": "path", "name": "machineId", "required": true, "dataType": "string" },
    };
    app.get('/api/v1/machines/by-machine-id/:machineId', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(MachineController_1.MachineController)), ...((0, runtime_1.fetchMiddlewares)(MachineController_1.MachineController.prototype.getMachineByMachineId)), async function MachineController_getMachineByMachineId(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsMachineController_getMachineByMachineId, request, response });
            const controller = new MachineController_1.MachineController();
            await templateService.apiHandler({
                methodName: 'getMachineByMachineId',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsMachineController_createMachine = {
        body: { "in": "body", "name": "body", "required": true, "ref": "Machine" },
    };
    app.post('/api/v1/machines', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(MachineController_1.MachineController)), ...((0, runtime_1.fetchMiddlewares)(MachineController_1.MachineController.prototype.createMachine)), async function MachineController_createMachine(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsMachineController_createMachine, request, response });
            const controller = new MachineController_1.MachineController();
            await templateService.apiHandler({
                methodName: 'createMachine',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsMachineController_upsertMachine = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
        body: { "in": "body", "name": "body", "required": true, "ref": "Machine" },
    };
    app.put('/api/v1/machines/:id', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(MachineController_1.MachineController)), ...((0, runtime_1.fetchMiddlewares)(MachineController_1.MachineController.prototype.upsertMachine)), async function MachineController_upsertMachine(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsMachineController_upsertMachine, request, response });
            const controller = new MachineController_1.MachineController();
            await templateService.apiHandler({
                methodName: 'upsertMachine',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsMachineController_deleteMachine = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
    };
    app.delete('/api/v1/machines/:id', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(MachineController_1.MachineController)), ...((0, runtime_1.fetchMiddlewares)(MachineController_1.MachineController.prototype.deleteMachine)), async function MachineController_deleteMachine(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsMachineController_deleteMachine, request, response });
            const controller = new MachineController_1.MachineController();
            await templateService.apiHandler({
                methodName: 'deleteMachine',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsCustomFieldController_getAll = {
        organizationId: { "in": "query", "name": "organizationId", "dataType": "string" },
    };
    app.get('/api/v1/custom-fields', authenticateMiddleware([{ "jwt": ["admin"] }]), ...((0, runtime_1.fetchMiddlewares)(CustomFieldController_1.CustomFieldController)), ...((0, runtime_1.fetchMiddlewares)(CustomFieldController_1.CustomFieldController.prototype.getAll)), async function CustomFieldController_getAll(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsCustomFieldController_getAll, request, response });
            const controller = new CustomFieldController_1.CustomFieldController();
            await templateService.apiHandler({
                methodName: 'getAll',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsCustomFieldController_getById = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
    };
    app.get('/api/v1/custom-fields/:id', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(CustomFieldController_1.CustomFieldController)), ...((0, runtime_1.fetchMiddlewares)(CustomFieldController_1.CustomFieldController.prototype.getById)), async function CustomFieldController_getById(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsCustomFieldController_getById, request, response });
            const controller = new CustomFieldController_1.CustomFieldController();
            await templateService.apiHandler({
                methodName: 'getById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsCustomFieldController_getByTarget = {
        targetCollection: { "in": "path", "name": "targetCollection", "required": true, "dataType": "string" },
        organizationId: { "in": "query", "name": "organizationId", "dataType": "string" },
    };
    app.get('/api/v1/custom-fields/target/:targetCollection', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(CustomFieldController_1.CustomFieldController)), ...((0, runtime_1.fetchMiddlewares)(CustomFieldController_1.CustomFieldController.prototype.getByTarget)), async function CustomFieldController_getByTarget(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsCustomFieldController_getByTarget, request, response });
            const controller = new CustomFieldController_1.CustomFieldController();
            await templateService.apiHandler({
                methodName: 'getByTarget',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsCustomFieldController_create = {
        body: { "in": "body", "name": "body", "required": true, "ref": "CustomField" },
    };
    app.post('/api/v1/custom-fields', authenticateMiddleware([{ "jwt": ["admin"] }]), ...((0, runtime_1.fetchMiddlewares)(CustomFieldController_1.CustomFieldController)), ...((0, runtime_1.fetchMiddlewares)(CustomFieldController_1.CustomFieldController.prototype.create)), async function CustomFieldController_create(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsCustomFieldController_create, request, response });
            const controller = new CustomFieldController_1.CustomFieldController();
            await templateService.apiHandler({
                methodName: 'create',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsCustomFieldController_update = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
        body: { "in": "body", "name": "body", "required": true, "ref": "Partial_CustomField_" },
    };
    app.put('/api/v1/custom-fields/:id', authenticateMiddleware([{ "jwt": ["admin"] }]), ...((0, runtime_1.fetchMiddlewares)(CustomFieldController_1.CustomFieldController)), ...((0, runtime_1.fetchMiddlewares)(CustomFieldController_1.CustomFieldController.prototype.update)), async function CustomFieldController_update(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsCustomFieldController_update, request, response });
            const controller = new CustomFieldController_1.CustomFieldController();
            await templateService.apiHandler({
                methodName: 'update',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsCustomFieldController_delete = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
    };
    app.delete('/api/v1/custom-fields/:id', authenticateMiddleware([{ "jwt": ["admin"] }]), ...((0, runtime_1.fetchMiddlewares)(CustomFieldController_1.CustomFieldController)), ...((0, runtime_1.fetchMiddlewares)(CustomFieldController_1.CustomFieldController.prototype.delete)), async function CustomFieldController_delete(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsCustomFieldController_delete, request, response });
            const controller = new CustomFieldController_1.CustomFieldController();
            await templateService.apiHandler({
                methodName: 'delete',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsCustomFieldController_getValues = {
        targetCollection: { "in": "path", "name": "targetCollection", "required": true, "dataType": "string" },
        targetDocumentId: { "in": "path", "name": "targetDocumentId", "required": true, "dataType": "string" },
    };
    app.get('/api/v1/custom-fields/values/:targetCollection/:targetDocumentId', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(CustomFieldController_1.CustomFieldController)), ...((0, runtime_1.fetchMiddlewares)(CustomFieldController_1.CustomFieldController.prototype.getValues)), async function CustomFieldController_getValues(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsCustomFieldController_getValues, request, response });
            const controller = new CustomFieldController_1.CustomFieldController();
            await templateService.apiHandler({
                methodName: 'getValues',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsCustomFieldController_setValue = {
        body: { "in": "body", "name": "body", "required": true, "ref": "CustomFieldValue" },
    };
    app.post('/api/v1/custom-fields/values', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(CustomFieldController_1.CustomFieldController)), ...((0, runtime_1.fetchMiddlewares)(CustomFieldController_1.CustomFieldController.prototype.setValue)), async function CustomFieldController_setValue(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsCustomFieldController_setValue, request, response });
            const controller = new CustomFieldController_1.CustomFieldController();
            await templateService.apiHandler({
                methodName: 'setValue',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsCustomFieldController_setValues = {
        body: { "in": "body", "name": "body", "required": true, "dataType": "array", "array": { "dataType": "refObject", "ref": "CustomFieldValue" } },
    };
    app.post('/api/v1/custom-fields/values/batch', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(CustomFieldController_1.CustomFieldController)), ...((0, runtime_1.fetchMiddlewares)(CustomFieldController_1.CustomFieldController.prototype.setValues)), async function CustomFieldController_setValues(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsCustomFieldController_setValues, request, response });
            const controller = new CustomFieldController_1.CustomFieldController();
            await templateService.apiHandler({
                methodName: 'setValues',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsCustomFieldController_deleteValue = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
    };
    app.delete('/api/v1/custom-fields/values/:id', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(CustomFieldController_1.CustomFieldController)), ...((0, runtime_1.fetchMiddlewares)(CustomFieldController_1.CustomFieldController.prototype.deleteValue)), async function CustomFieldController_deleteValue(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsCustomFieldController_deleteValue, request, response });
            const controller = new CustomFieldController_1.CustomFieldController();
            await templateService.apiHandler({
                methodName: 'deleteValue',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsAccessLevelController_getAll = {};
    app.get('/api/v1/access-levels', authenticateMiddleware([{ "jwt": ["master"] }]), ...((0, runtime_1.fetchMiddlewares)(AccessLevelController_1.AccessLevelController)), ...((0, runtime_1.fetchMiddlewares)(AccessLevelController_1.AccessLevelController.prototype.getAll)), async function AccessLevelController_getAll(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsAccessLevelController_getAll, request, response });
            const controller = new AccessLevelController_1.AccessLevelController();
            await templateService.apiHandler({
                methodName: 'getAll',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsAccessLevelController_getById = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
    };
    app.get('/api/v1/access-levels/:id', authenticateMiddleware([{ "jwt": ["master"] }]), ...((0, runtime_1.fetchMiddlewares)(AccessLevelController_1.AccessLevelController)), ...((0, runtime_1.fetchMiddlewares)(AccessLevelController_1.AccessLevelController.prototype.getById)), async function AccessLevelController_getById(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsAccessLevelController_getById, request, response });
            const controller = new AccessLevelController_1.AccessLevelController();
            await templateService.apiHandler({
                methodName: 'getById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsAccessLevelController_create = {
        body: { "in": "body", "name": "body", "required": true, "ref": "AccessLevel" },
    };
    app.post('/api/v1/access-levels', authenticateMiddleware([{ "jwt": ["master"] }]), ...((0, runtime_1.fetchMiddlewares)(AccessLevelController_1.AccessLevelController)), ...((0, runtime_1.fetchMiddlewares)(AccessLevelController_1.AccessLevelController.prototype.create)), async function AccessLevelController_create(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsAccessLevelController_create, request, response });
            const controller = new AccessLevelController_1.AccessLevelController();
            await templateService.apiHandler({
                methodName: 'create',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsAccessLevelController_update = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
        body: { "in": "body", "name": "body", "required": true, "ref": "Partial_AccessLevel_" },
    };
    app.put('/api/v1/access-levels/:id', authenticateMiddleware([{ "jwt": ["master"] }]), ...((0, runtime_1.fetchMiddlewares)(AccessLevelController_1.AccessLevelController)), ...((0, runtime_1.fetchMiddlewares)(AccessLevelController_1.AccessLevelController.prototype.update)), async function AccessLevelController_update(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsAccessLevelController_update, request, response });
            const controller = new AccessLevelController_1.AccessLevelController();
            await templateService.apiHandler({
                methodName: 'update',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsAccessLevelController_delete = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
    };
    app.delete('/api/v1/access-levels/:id', authenticateMiddleware([{ "jwt": ["master"] }]), ...((0, runtime_1.fetchMiddlewares)(AccessLevelController_1.AccessLevelController)), ...((0, runtime_1.fetchMiddlewares)(AccessLevelController_1.AccessLevelController.prototype.delete)), async function AccessLevelController_delete(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsAccessLevelController_delete, request, response });
            const controller = new AccessLevelController_1.AccessLevelController();
            await templateService.apiHandler({
                methodName: 'delete',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function authenticateMiddleware(security = []) {
        return async function runAuthenticationMiddleware(request, response, next) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            // keep track of failed auth attempts so we can hand back the most
            // recent one.  This behavior was previously existing so preserving it
            // here
            const failedAttempts = [];
            const pushAndRethrow = (error) => {
                failedAttempts.push(error);
                throw error;
            };
            const secMethodOrPromises = [];
            for (const secMethod of security) {
                if (Object.keys(secMethod).length > 1) {
                    const secMethodAndPromises = [];
                    for (const name in secMethod) {
                        secMethodAndPromises.push(expressAuthenticationRecasted(request, name, secMethod[name], response)
                            .catch(pushAndRethrow));
                    }
                    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
                    secMethodOrPromises.push(Promise.all(secMethodAndPromises)
                        .then(users => { return users[0]; }));
                }
                else {
                    for (const name in secMethod) {
                        secMethodOrPromises.push(expressAuthenticationRecasted(request, name, secMethod[name], response)
                            .catch(pushAndRethrow));
                    }
                }
            }
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            try {
                request['user'] = await Promise.any(secMethodOrPromises);
                // Response was sent in middleware, abort
                if (response.writableEnded) {
                    return;
                }
                next();
            }
            catch (err) {
                // Show most recent error as response
                const error = failedAttempts.pop();
                error.status = error.status || 401;
                // Response was sent in middleware, abort
                if (response.writableEnded) {
                    return;
                }
                next(error);
            }
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        };
    }
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
