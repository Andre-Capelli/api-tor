"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterRoutes = RegisterRoutes;
const runtime_1 = require("@tsoa/runtime");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const UserController_1 = require("./../src/app/main/users/controllers/UserController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const AuthController_1 = require("./../src/app/main/users/controllers/AuthController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const TestController_1 = require("./../src/app/main/test/controllers/TestController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const StorageInformationController_1 = require("./../src/app/main/machines/controllers/StorageInformationController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const NetworkInformationController_1 = require("./../src/app/main/machines/controllers/NetworkInformationController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const MemoryInformationController_1 = require("./../src/app/main/machines/controllers/MemoryInformationController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const MachineController_1 = require("./../src/app/main/machines/controllers/MachineController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const CpuInformationController_1 = require("./../src/app/main/machines/controllers/CpuInformationController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const AntivirusInformationController_1 = require("./../src/app/main/machines/controllers/AntivirusInformationController");
const authHandler_1 = require("./../src/app/core/middlewares/authHandler");
const expressAuthenticationRecasted = authHandler_1.expressAuthentication;
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const models = {
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
            "id": { "dataType": "string", "required": true },
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
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AuthResponse": {
        "dataType": "refObject",
        "properties": {
            "accessToken": { "dataType": "string", "required": true },
            "refreshToken": { "dataType": "string", "required": true },
            "user": { "dataType": "nestedObjectLiteral", "nestedProperties": { "role": { "dataType": "string", "required": true }, "email": { "dataType": "string", "required": true }, "name": { "dataType": "string", "required": true }, "id": { "dataType": "string", "required": true } }, "required": true },
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
            "role": { "dataType": "string" },
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
            "id": { "dataType": "string", "required": true },
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
            "id": { "dataType": "string", "required": true },
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
    "IMemoryInformation": {
        "dataType": "refObject",
        "properties": {
            "machineId": { "dataType": "string", "required": true },
            "timestamp": { "dataType": "datetime", "required": true },
            "usedMemoryGB": { "dataType": "double", "required": true },
            "availableMemoryGB": { "dataType": "double", "required": true },
            "totalMemoryGB": { "dataType": "double", "required": true },
            "usagePercentage": { "dataType": "double", "required": true },
            "id": { "dataType": "string", "required": true },
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
            "id": { "dataType": "string", "required": true },
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
        },
        "additionalProperties": false,
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
            "id": { "dataType": "string", "required": true },
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
            "id": { "dataType": "string", "required": true },
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
};
const templateService = new runtime_1.ExpressTemplateService(models, { "noImplicitAdditionalProperties": "throw-on-extras", "bodyCoercion": true });
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
function RegisterRoutes(app) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
    const argsUserController_getUsers = {};
    app.get('/users', ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController)), ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController.prototype.getUsers)), async function UserController_getUsers(request, response, next) {
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
    app.get('/users/:id', ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController)), ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController.prototype.getUser)), async function UserController_getUser(request, response, next) {
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
    app.post('/users', ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController)), ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController.prototype.createUser)), async function UserController_createUser(request, response, next) {
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
        body: { "in": "body", "name": "body", "required": true, "ref": "IUser" },
    };
    app.put('/users/:id', ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController)), ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController.prototype.upsertUser)), async function UserController_upsertUser(request, response, next) {
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
    app.delete('/users/:id', ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController)), ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController.prototype.deleteUser)), async function UserController_deleteUser(request, response, next) {
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
    app.post('/auth/login', ...((0, runtime_1.fetchMiddlewares)(AuthController_1.AuthController)), ...((0, runtime_1.fetchMiddlewares)(AuthController_1.AuthController.prototype.login)), async function AuthController_login(request, response, next) {
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
    app.post('/auth/register', ...((0, runtime_1.fetchMiddlewares)(AuthController_1.AuthController)), ...((0, runtime_1.fetchMiddlewares)(AuthController_1.AuthController.prototype.register)), async function AuthController_register(request, response, next) {
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
    app.post('/auth/refresh', ...((0, runtime_1.fetchMiddlewares)(AuthController_1.AuthController)), ...((0, runtime_1.fetchMiddlewares)(AuthController_1.AuthController.prototype.refreshToken)), async function AuthController_refreshToken(request, response, next) {
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
    app.get('/test/public', ...((0, runtime_1.fetchMiddlewares)(TestController_1.TestController)), ...((0, runtime_1.fetchMiddlewares)(TestController_1.TestController.prototype.publicEndpoint)), async function TestController_publicEndpoint(request, response, next) {
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
    app.get('/test/protected', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(TestController_1.TestController)), ...((0, runtime_1.fetchMiddlewares)(TestController_1.TestController.prototype.protectedEndpoint)), async function TestController_protectedEndpoint(request, response, next) {
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
    app.get('/test/admin', authenticateMiddleware([{ "jwt": ["admin"] }]), ...((0, runtime_1.fetchMiddlewares)(TestController_1.TestController)), ...((0, runtime_1.fetchMiddlewares)(TestController_1.TestController.prototype.adminEndpoint)), async function TestController_adminEndpoint(request, response, next) {
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
    app.get('/test/moderator', authenticateMiddleware([{ "jwt": ["moderator", "admin"] }]), ...((0, runtime_1.fetchMiddlewares)(TestController_1.TestController)), ...((0, runtime_1.fetchMiddlewares)(TestController_1.TestController.prototype.moderatorEndpoint)), async function TestController_moderatorEndpoint(request, response, next) {
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
    app.get('/test/validate-token', authenticateMiddleware([{ "jwt": [] }]), ...((0, runtime_1.fetchMiddlewares)(TestController_1.TestController)), ...((0, runtime_1.fetchMiddlewares)(TestController_1.TestController.prototype.validateToken)), async function TestController_validateToken(request, response, next) {
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
    const argsStorageInformationController_getStorageInformationByMachineId = {
        machineId: { "in": "path", "name": "machineId", "required": true, "dataType": "string" },
        limit: { "in": "query", "name": "limit", "dataType": "double" },
    };
    app.get('/storage-information/machine/:machineId', ...((0, runtime_1.fetchMiddlewares)(StorageInformationController_1.StorageInformationController)), ...((0, runtime_1.fetchMiddlewares)(StorageInformationController_1.StorageInformationController.prototype.getStorageInformationByMachineId)), async function StorageInformationController_getStorageInformationByMachineId(request, response, next) {
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
    app.get('/storage-information/:id', ...((0, runtime_1.fetchMiddlewares)(StorageInformationController_1.StorageInformationController)), ...((0, runtime_1.fetchMiddlewares)(StorageInformationController_1.StorageInformationController.prototype.getStorageInformation)), async function StorageInformationController_getStorageInformation(request, response, next) {
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
    app.get('/storage-information/machine/:machineId/latest', ...((0, runtime_1.fetchMiddlewares)(StorageInformationController_1.StorageInformationController)), ...((0, runtime_1.fetchMiddlewares)(StorageInformationController_1.StorageInformationController.prototype.getLatestStorageInformation)), async function StorageInformationController_getLatestStorageInformation(request, response, next) {
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
    app.post('/storage-information/machine/:machineId', ...((0, runtime_1.fetchMiddlewares)(StorageInformationController_1.StorageInformationController)), ...((0, runtime_1.fetchMiddlewares)(StorageInformationController_1.StorageInformationController.prototype.createStorageInformation)), async function StorageInformationController_createStorageInformation(request, response, next) {
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
    app.post('/storage-information/machine/:machineId/batch', ...((0, runtime_1.fetchMiddlewares)(StorageInformationController_1.StorageInformationController)), ...((0, runtime_1.fetchMiddlewares)(StorageInformationController_1.StorageInformationController.prototype.createStorageInformationBatch)), async function StorageInformationController_createStorageInformationBatch(request, response, next) {
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
    app.get('/storage-information/machine/:machineId/range', ...((0, runtime_1.fetchMiddlewares)(StorageInformationController_1.StorageInformationController)), ...((0, runtime_1.fetchMiddlewares)(StorageInformationController_1.StorageInformationController.prototype.getStorageInformationByDateRange)), async function StorageInformationController_getStorageInformationByDateRange(request, response, next) {
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
    app.delete('/storage-information/:id', ...((0, runtime_1.fetchMiddlewares)(StorageInformationController_1.StorageInformationController)), ...((0, runtime_1.fetchMiddlewares)(StorageInformationController_1.StorageInformationController.prototype.deleteStorageInformation)), async function StorageInformationController_deleteStorageInformation(request, response, next) {
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
    app.delete('/storage-information/machine/:machineId', ...((0, runtime_1.fetchMiddlewares)(StorageInformationController_1.StorageInformationController)), ...((0, runtime_1.fetchMiddlewares)(StorageInformationController_1.StorageInformationController.prototype.deleteStorageInformationByMachineId)), async function StorageInformationController_deleteStorageInformationByMachineId(request, response, next) {
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
    app.get('/network-information/machine/:machineId', ...((0, runtime_1.fetchMiddlewares)(NetworkInformationController_1.NetworkInformationController)), ...((0, runtime_1.fetchMiddlewares)(NetworkInformationController_1.NetworkInformationController.prototype.getNetworkInformationByMachineId)), async function NetworkInformationController_getNetworkInformationByMachineId(request, response, next) {
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
    app.get('/network-information/machine/:machineId/latest', ...((0, runtime_1.fetchMiddlewares)(NetworkInformationController_1.NetworkInformationController)), ...((0, runtime_1.fetchMiddlewares)(NetworkInformationController_1.NetworkInformationController.prototype.getLatestNetworkInformation)), async function NetworkInformationController_getLatestNetworkInformation(request, response, next) {
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
    app.post('/network-information/machine/:machineId', ...((0, runtime_1.fetchMiddlewares)(NetworkInformationController_1.NetworkInformationController)), ...((0, runtime_1.fetchMiddlewares)(NetworkInformationController_1.NetworkInformationController.prototype.createNetworkInformation)), async function NetworkInformationController_createNetworkInformation(request, response, next) {
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
    app.post('/network-information/machine/:machineId/batch', ...((0, runtime_1.fetchMiddlewares)(NetworkInformationController_1.NetworkInformationController)), ...((0, runtime_1.fetchMiddlewares)(NetworkInformationController_1.NetworkInformationController.prototype.createNetworkInformationBatch)), async function NetworkInformationController_createNetworkInformationBatch(request, response, next) {
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
    app.delete('/network-information/:id', ...((0, runtime_1.fetchMiddlewares)(NetworkInformationController_1.NetworkInformationController)), ...((0, runtime_1.fetchMiddlewares)(NetworkInformationController_1.NetworkInformationController.prototype.deleteNetworkInformation)), async function NetworkInformationController_deleteNetworkInformation(request, response, next) {
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
    const argsMemoryInformationController_getMemoryInformationByMachineId = {
        machineId: { "in": "path", "name": "machineId", "required": true, "dataType": "string" },
        limit: { "in": "query", "name": "limit", "dataType": "double" },
    };
    app.get('/memory-information/machine/:machineId', ...((0, runtime_1.fetchMiddlewares)(MemoryInformationController_1.MemoryInformationController)), ...((0, runtime_1.fetchMiddlewares)(MemoryInformationController_1.MemoryInformationController.prototype.getMemoryInformationByMachineId)), async function MemoryInformationController_getMemoryInformationByMachineId(request, response, next) {
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
    app.get('/memory-information/machine/:machineId/latest', ...((0, runtime_1.fetchMiddlewares)(MemoryInformationController_1.MemoryInformationController)), ...((0, runtime_1.fetchMiddlewares)(MemoryInformationController_1.MemoryInformationController.prototype.getLatestMemoryInformation)), async function MemoryInformationController_getLatestMemoryInformation(request, response, next) {
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
    app.post('/memory-information/machine/:machineId', ...((0, runtime_1.fetchMiddlewares)(MemoryInformationController_1.MemoryInformationController)), ...((0, runtime_1.fetchMiddlewares)(MemoryInformationController_1.MemoryInformationController.prototype.createMemoryInformation)), async function MemoryInformationController_createMemoryInformation(request, response, next) {
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
    app.post('/memory-information/machine/:machineId/batch', ...((0, runtime_1.fetchMiddlewares)(MemoryInformationController_1.MemoryInformationController)), ...((0, runtime_1.fetchMiddlewares)(MemoryInformationController_1.MemoryInformationController.prototype.createMemoryInformationBatch)), async function MemoryInformationController_createMemoryInformationBatch(request, response, next) {
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
    app.delete('/memory-information/:id', ...((0, runtime_1.fetchMiddlewares)(MemoryInformationController_1.MemoryInformationController)), ...((0, runtime_1.fetchMiddlewares)(MemoryInformationController_1.MemoryInformationController.prototype.deleteMemoryInformation)), async function MemoryInformationController_deleteMemoryInformation(request, response, next) {
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
    const argsMachineController_getMachines = {};
    app.get('/machines', ...((0, runtime_1.fetchMiddlewares)(MachineController_1.MachineController)), ...((0, runtime_1.fetchMiddlewares)(MachineController_1.MachineController.prototype.getMachines)), async function MachineController_getMachines(request, response, next) {
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
    app.get('/machines/:id', ...((0, runtime_1.fetchMiddlewares)(MachineController_1.MachineController)), ...((0, runtime_1.fetchMiddlewares)(MachineController_1.MachineController.prototype.getMachine)), async function MachineController_getMachine(request, response, next) {
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
    app.get('/machines/by-machine-id/:machineId', ...((0, runtime_1.fetchMiddlewares)(MachineController_1.MachineController)), ...((0, runtime_1.fetchMiddlewares)(MachineController_1.MachineController.prototype.getMachineByMachineId)), async function MachineController_getMachineByMachineId(request, response, next) {
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
    app.post('/machines', ...((0, runtime_1.fetchMiddlewares)(MachineController_1.MachineController)), ...((0, runtime_1.fetchMiddlewares)(MachineController_1.MachineController.prototype.createMachine)), async function MachineController_createMachine(request, response, next) {
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
        body: { "in": "body", "name": "body", "required": true, "ref": "IMachine" },
    };
    app.put('/machines/:id', ...((0, runtime_1.fetchMiddlewares)(MachineController_1.MachineController)), ...((0, runtime_1.fetchMiddlewares)(MachineController_1.MachineController.prototype.upsertMachine)), async function MachineController_upsertMachine(request, response, next) {
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
    app.delete('/machines/:id', ...((0, runtime_1.fetchMiddlewares)(MachineController_1.MachineController)), ...((0, runtime_1.fetchMiddlewares)(MachineController_1.MachineController.prototype.deleteMachine)), async function MachineController_deleteMachine(request, response, next) {
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
    const argsMachineController_receiveSnapshot = {
        body: { "in": "body", "name": "body", "required": true, "ref": "FullMachineData" },
    };
    app.post('/machines/snapshot', ...((0, runtime_1.fetchMiddlewares)(MachineController_1.MachineController)), ...((0, runtime_1.fetchMiddlewares)(MachineController_1.MachineController.prototype.receiveSnapshot)), async function MachineController_receiveSnapshot(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsMachineController_receiveSnapshot, request, response });
            const controller = new MachineController_1.MachineController();
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
    const argsMachineController_getLatestSnapshot = {
        machineId: { "in": "path", "name": "machineId", "required": true, "dataType": "string" },
    };
    app.get('/machines/:machineId/latest', ...((0, runtime_1.fetchMiddlewares)(MachineController_1.MachineController)), ...((0, runtime_1.fetchMiddlewares)(MachineController_1.MachineController.prototype.getLatestSnapshot)), async function MachineController_getLatestSnapshot(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsMachineController_getLatestSnapshot, request, response });
            const controller = new MachineController_1.MachineController();
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
    const argsMachineController_getMachineHistory = {
        machineId: { "in": "path", "name": "machineId", "required": true, "dataType": "string" },
        startDate: { "in": "query", "name": "startDate", "dataType": "string" },
        endDate: { "in": "query", "name": "endDate", "dataType": "string" },
    };
    app.get('/machines/:machineId/history', ...((0, runtime_1.fetchMiddlewares)(MachineController_1.MachineController)), ...((0, runtime_1.fetchMiddlewares)(MachineController_1.MachineController.prototype.getMachineHistory)), async function MachineController_getMachineHistory(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsMachineController_getMachineHistory, request, response });
            const controller = new MachineController_1.MachineController();
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
    const argsCpuInformationController_getCpuInformationByMachineId = {
        machineId: { "in": "path", "name": "machineId", "required": true, "dataType": "string" },
        limit: { "in": "query", "name": "limit", "dataType": "double" },
    };
    app.get('/cpu-information/machine/:machineId', ...((0, runtime_1.fetchMiddlewares)(CpuInformationController_1.CpuInformationController)), ...((0, runtime_1.fetchMiddlewares)(CpuInformationController_1.CpuInformationController.prototype.getCpuInformationByMachineId)), async function CpuInformationController_getCpuInformationByMachineId(request, response, next) {
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
    app.get('/cpu-information/:id', ...((0, runtime_1.fetchMiddlewares)(CpuInformationController_1.CpuInformationController)), ...((0, runtime_1.fetchMiddlewares)(CpuInformationController_1.CpuInformationController.prototype.getCpuInformation)), async function CpuInformationController_getCpuInformation(request, response, next) {
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
    app.get('/cpu-information/machine/:machineId/latest', ...((0, runtime_1.fetchMiddlewares)(CpuInformationController_1.CpuInformationController)), ...((0, runtime_1.fetchMiddlewares)(CpuInformationController_1.CpuInformationController.prototype.getLatestCpuInformation)), async function CpuInformationController_getLatestCpuInformation(request, response, next) {
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
    app.post('/cpu-information/machine/:machineId', ...((0, runtime_1.fetchMiddlewares)(CpuInformationController_1.CpuInformationController)), ...((0, runtime_1.fetchMiddlewares)(CpuInformationController_1.CpuInformationController.prototype.createCpuInformation)), async function CpuInformationController_createCpuInformation(request, response, next) {
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
    app.post('/cpu-information/machine/:machineId/batch', ...((0, runtime_1.fetchMiddlewares)(CpuInformationController_1.CpuInformationController)), ...((0, runtime_1.fetchMiddlewares)(CpuInformationController_1.CpuInformationController.prototype.createCpuInformationBatch)), async function CpuInformationController_createCpuInformationBatch(request, response, next) {
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
    app.get('/cpu-information/machine/:machineId/range', ...((0, runtime_1.fetchMiddlewares)(CpuInformationController_1.CpuInformationController)), ...((0, runtime_1.fetchMiddlewares)(CpuInformationController_1.CpuInformationController.prototype.getCpuInformationByDateRange)), async function CpuInformationController_getCpuInformationByDateRange(request, response, next) {
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
    app.delete('/cpu-information/:id', ...((0, runtime_1.fetchMiddlewares)(CpuInformationController_1.CpuInformationController)), ...((0, runtime_1.fetchMiddlewares)(CpuInformationController_1.CpuInformationController.prototype.deleteCpuInformation)), async function CpuInformationController_deleteCpuInformation(request, response, next) {
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
    app.delete('/cpu-information/machine/:machineId', ...((0, runtime_1.fetchMiddlewares)(CpuInformationController_1.CpuInformationController)), ...((0, runtime_1.fetchMiddlewares)(CpuInformationController_1.CpuInformationController.prototype.deleteCpuInformationByMachineId)), async function CpuInformationController_deleteCpuInformationByMachineId(request, response, next) {
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
    app.get('/antivirus-information/machine/:machineId', ...((0, runtime_1.fetchMiddlewares)(AntivirusInformationController_1.AntivirusInformationController)), ...((0, runtime_1.fetchMiddlewares)(AntivirusInformationController_1.AntivirusInformationController.prototype.getAntivirusInformationByMachineId)), async function AntivirusInformationController_getAntivirusInformationByMachineId(request, response, next) {
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
    app.get('/antivirus-information/machine/:machineId/latest', ...((0, runtime_1.fetchMiddlewares)(AntivirusInformationController_1.AntivirusInformationController)), ...((0, runtime_1.fetchMiddlewares)(AntivirusInformationController_1.AntivirusInformationController.prototype.getLatestAntivirusInformation)), async function AntivirusInformationController_getLatestAntivirusInformation(request, response, next) {
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
    app.post('/antivirus-information/machine/:machineId', ...((0, runtime_1.fetchMiddlewares)(AntivirusInformationController_1.AntivirusInformationController)), ...((0, runtime_1.fetchMiddlewares)(AntivirusInformationController_1.AntivirusInformationController.prototype.createAntivirusInformation)), async function AntivirusInformationController_createAntivirusInformation(request, response, next) {
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
    app.post('/antivirus-information/machine/:machineId/batch', ...((0, runtime_1.fetchMiddlewares)(AntivirusInformationController_1.AntivirusInformationController)), ...((0, runtime_1.fetchMiddlewares)(AntivirusInformationController_1.AntivirusInformationController.prototype.createAntivirusInformationBatch)), async function AntivirusInformationController_createAntivirusInformationBatch(request, response, next) {
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
    app.delete('/antivirus-information/:id', ...((0, runtime_1.fetchMiddlewares)(AntivirusInformationController_1.AntivirusInformationController)), ...((0, runtime_1.fetchMiddlewares)(AntivirusInformationController_1.AntivirusInformationController.prototype.deleteAntivirusInformation)), async function AntivirusInformationController_deleteAntivirusInformation(request, response, next) {
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
