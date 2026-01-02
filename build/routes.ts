/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import type { TsoaRoute } from '@tsoa/runtime';
import {  fetchMiddlewares, ExpressTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { UserController } from './../src/app/main/users/controllers/UserController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { AuthController } from './../src/app/main/users/controllers/AuthController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { TestController } from './../src/app/main/test/controllers/TestController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { StorageInformationController } from './../src/app/main/machines/controllers/StorageInformationController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { NetworkInformationController } from './../src/app/main/machines/controllers/NetworkInformationController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { MemoryInformationController } from './../src/app/main/machines/controllers/MemoryInformationController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { MachineController } from './../src/app/main/machines/controllers/MachineController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { CpuInformationController } from './../src/app/main/machines/controllers/CpuInformationController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { AntivirusInformationController } from './../src/app/main/machines/controllers/AntivirusInformationController';
import { expressAuthentication } from './../src/app/core/middlewares/authHandler';
// @ts-ignore - no great way to install types from subpackage
import type { Request as ExRequest, Response as ExResponse, RequestHandler, Router } from 'express';

const expressAuthenticationRecasted = expressAuthentication as (req: ExRequest, securityName: string, scopes?: string[], res?: ExResponse) => Promise<any>;


// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "IUser": {
        "dataType": "refObject",
        "properties": {
            "createdAt": {"dataType":"datetime"},
            "createdBy": {"dataType":"string"},
            "createdByName": {"dataType":"string"},
            "updatedAt": {"dataType":"datetime"},
            "updatedBy": {"dataType":"string"},
            "updatedByName": {"dataType":"string"},
            "name": {"dataType":"string","required":true},
            "email": {"dataType":"string","required":true},
            "password": {"dataType":"string","required":true},
            "role": {"dataType":"string"},
            "isActive": {"dataType":"boolean"},
            "id": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "User": {
        "dataType": "refObject",
        "properties": {
            "createdAt": {"dataType":"datetime"},
            "createdBy": {"dataType":"string"},
            "createdByName": {"dataType":"string"},
            "updatedAt": {"dataType":"datetime"},
            "updatedBy": {"dataType":"string"},
            "updatedByName": {"dataType":"string"},
            "name": {"dataType":"string","required":true},
            "email": {"dataType":"string","required":true},
            "password": {"dataType":"string","required":true},
            "role": {"dataType":"string"},
            "isActive": {"dataType":"boolean"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AuthResponse": {
        "dataType": "refObject",
        "properties": {
            "accessToken": {"dataType":"string","required":true},
            "refreshToken": {"dataType":"string","required":true},
            "user": {"dataType":"nestedObjectLiteral","nestedProperties":{"role":{"dataType":"string","required":true},"email":{"dataType":"string","required":true},"name":{"dataType":"string","required":true},"id":{"dataType":"string","required":true}},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "LoginRequest": {
        "dataType": "refObject",
        "properties": {
            "email": {"dataType":"string","required":true},
            "password": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "RegisterRequest": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "email": {"dataType":"string","required":true},
            "password": {"dataType":"string","required":true},
            "role": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "RefreshTokenRequest": {
        "dataType": "refObject",
        "properties": {
            "refreshToken": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TestResponse": {
        "dataType": "refObject",
        "properties": {
            "success": {"dataType":"boolean","required":true},
            "message": {"dataType":"string","required":true},
            "user": {"dataType":"nestedObjectLiteral","nestedProperties":{"role":{"dataType":"string"},"name":{"dataType":"string","required":true},"email":{"dataType":"string","required":true},"id":{"dataType":"string","required":true}}},
            "timestamp": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Disk": {
        "dataType": "refObject",
        "properties": {
            "index": {"dataType":"double","required":true},
            "model": {"dataType":"string","required":true},
            "serialNumber": {"dataType":"string","required":true},
            "firmwareRevision": {"dataType":"string","required":true},
            "sizeBytes": {"dataType":"double","required":true},
            "temperature": {"dataType":"double","required":true},
            "status": {"dataType":"string","required":true},
            "lastErrorCode": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}]},
            "errorCleared": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}]},
            "errorDescription": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}]},
            "errorMethodology": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}]},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partition": {
        "dataType": "refObject",
        "properties": {
            "diskIndex": {"dataType":"double","required":true},
            "index": {"dataType":"double","required":true},
            "bootable": {"dataType":"boolean","required":true},
            "primaryPartition": {"dataType":"boolean","required":true},
            "volumeName": {"dataType":"string","required":true},
            "sizeBytes": {"dataType":"double","required":true},
            "freeSpaceBytes": {"dataType":"double","required":true},
            "usagePercentage": {"dataType":"double","required":true},
            "volumeLetter": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}]},
            "fileSystem": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}]},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IStorageInformation": {
        "dataType": "refObject",
        "properties": {
            "machineId": {"dataType":"string","required":true},
            "timestamp": {"dataType":"datetime","required":true},
            "disks": {"dataType":"array","array":{"dataType":"refObject","ref":"Disk"},"required":true},
            "partitions": {"dataType":"array","array":{"dataType":"refObject","ref":"Partition"},"required":true},
            "id": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_StorageInformation.Exclude_keyofStorageInformation.machineId__": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"timestamp":{"dataType":"datetime","required":true},"disks":{"dataType":"array","array":{"dataType":"refObject","ref":"Disk"},"required":true},"partitions":{"dataType":"array","array":{"dataType":"refObject","ref":"Partition"},"required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Omit_StorageInformation.machineId_": {
        "dataType": "refAlias",
        "type": {"ref":"Pick_StorageInformation.Exclude_keyofStorageInformation.machineId__","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "INetworkInformation": {
        "dataType": "refObject",
        "properties": {
            "machineId": {"dataType":"string","required":true},
            "timestamp": {"dataType":"datetime","required":true},
            "name": {"dataType":"string","required":true},
            "bytesSent": {"dataType":"double","required":true},
            "bytesReceived": {"dataType":"double","required":true},
            "type": {"dataType":"string","required":true},
            "status": {"dataType":"string","required":true},
            "speed": {"dataType":"string","required":true},
            "ipAddress": {"dataType":"string","required":true},
            "id": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_NetworkInformation.Exclude_keyofNetworkInformation.machineId__": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"timestamp":{"dataType":"datetime","required":true},"name":{"dataType":"string","required":true},"bytesSent":{"dataType":"double","required":true},"bytesReceived":{"dataType":"double","required":true},"type":{"dataType":"string","required":true},"status":{"dataType":"string","required":true},"speed":{"dataType":"string","required":true},"ipAddress":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Omit_NetworkInformation.machineId_": {
        "dataType": "refAlias",
        "type": {"ref":"Pick_NetworkInformation.Exclude_keyofNetworkInformation.machineId__","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IMemoryInformation": {
        "dataType": "refObject",
        "properties": {
            "machineId": {"dataType":"string","required":true},
            "timestamp": {"dataType":"datetime","required":true},
            "usedMemoryGB": {"dataType":"double","required":true},
            "availableMemoryGB": {"dataType":"double","required":true},
            "totalMemoryGB": {"dataType":"double","required":true},
            "usagePercentage": {"dataType":"double","required":true},
            "id": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_MemoryInformation.Exclude_keyofMemoryInformation.machineId__": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"timestamp":{"dataType":"datetime","required":true},"usedMemoryGB":{"dataType":"double","required":true},"availableMemoryGB":{"dataType":"double","required":true},"totalMemoryGB":{"dataType":"double","required":true},"usagePercentage":{"dataType":"double","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Omit_MemoryInformation.machineId_": {
        "dataType": "refAlias",
        "type": {"ref":"Pick_MemoryInformation.Exclude_keyofMemoryInformation.machineId__","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IMachine": {
        "dataType": "refObject",
        "properties": {
            "machineId": {"dataType":"string","required":true},
            "computerName": {"dataType":"string","required":true},
            "operatingSystem": {"dataType":"string","required":true},
            "operatingSystemVersion": {"dataType":"string","required":true},
            "operatingSystemArchitecture": {"dataType":"string","required":true},
            "operatingSystemDescription": {"dataType":"string","required":true},
            "domainName": {"dataType":"string"},
            "workgroup": {"dataType":"string"},
            "isActive": {"dataType":"boolean","required":true},
            "lastSeen": {"dataType":"datetime"},
            "description": {"dataType":"string"},
            "location": {"dataType":"string"},
            "owner": {"dataType":"string"},
            "id": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Machine": {
        "dataType": "refObject",
        "properties": {
            "machineId": {"dataType":"string","required":true},
            "computerName": {"dataType":"string","required":true},
            "operatingSystem": {"dataType":"string","required":true},
            "operatingSystemVersion": {"dataType":"string","required":true},
            "operatingSystemArchitecture": {"dataType":"string","required":true},
            "operatingSystemDescription": {"dataType":"string","required":true},
            "domainName": {"dataType":"string"},
            "workgroup": {"dataType":"string"},
            "isActive": {"dataType":"boolean","required":true},
            "lastSeen": {"dataType":"datetime"},
            "description": {"dataType":"string"},
            "location": {"dataType":"string"},
            "owner": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CpuCore": {
        "dataType": "refObject",
        "properties": {
            "coreId": {"dataType":"double","required":true},
            "temperature": {"dataType":"double","required":true},
            "load": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_CpuInformation.Exclude_keyofCpuInformation.machineId-or-timestamp__": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"name":{"dataType":"string","required":true},"temperature":{"dataType":"double","required":true},"load":{"dataType":"double","required":true},"power":{"dataType":"double","required":true},"cores":{"dataType":"array","array":{"dataType":"refObject","ref":"CpuCore"},"required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Omit_CpuInformation.machineId-or-timestamp_": {
        "dataType": "refAlias",
        "type": {"ref":"Pick_CpuInformation.Exclude_keyofCpuInformation.machineId-or-timestamp__","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_MemoryInformation.Exclude_keyofMemoryInformation.machineId-or-timestamp__": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"usedMemoryGB":{"dataType":"double","required":true},"availableMemoryGB":{"dataType":"double","required":true},"totalMemoryGB":{"dataType":"double","required":true},"usagePercentage":{"dataType":"double","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Omit_MemoryInformation.machineId-or-timestamp_": {
        "dataType": "refAlias",
        "type": {"ref":"Pick_MemoryInformation.Exclude_keyofMemoryInformation.machineId-or-timestamp__","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_StorageInformation.Exclude_keyofStorageInformation.machineId-or-timestamp__": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"disks":{"dataType":"array","array":{"dataType":"refObject","ref":"Disk"},"required":true},"partitions":{"dataType":"array","array":{"dataType":"refObject","ref":"Partition"},"required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Omit_StorageInformation.machineId-or-timestamp_": {
        "dataType": "refAlias",
        "type": {"ref":"Pick_StorageInformation.Exclude_keyofStorageInformation.machineId-or-timestamp__","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_AntivirusInformation.Exclude_keyofAntivirusInformation.machineId-or-timestamp__": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"name":{"dataType":"string","required":true},"enabled":{"dataType":"boolean","required":true},"lastQuickScan":{"dataType":"datetime"},"lastFullScan":{"dataType":"datetime"},"hasThreats":{"dataType":"boolean"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Omit_AntivirusInformation.machineId-or-timestamp_": {
        "dataType": "refAlias",
        "type": {"ref":"Pick_AntivirusInformation.Exclude_keyofAntivirusInformation.machineId-or-timestamp__","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_NetworkInformation.Exclude_keyofNetworkInformation.machineId-or-timestamp__": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"name":{"dataType":"string","required":true},"bytesSent":{"dataType":"double","required":true},"bytesReceived":{"dataType":"double","required":true},"type":{"dataType":"string","required":true},"status":{"dataType":"string","required":true},"speed":{"dataType":"string","required":true},"ipAddress":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Omit_NetworkInformation.machineId-or-timestamp_": {
        "dataType": "refAlias",
        "type": {"ref":"Pick_NetworkInformation.Exclude_keyofNetworkInformation.machineId-or-timestamp__","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "FullMachineData": {
        "dataType": "refObject",
        "properties": {
            "timestamp": {"dataType":"string","required":true},
            "cpuInformation": {"dataType":"array","array":{"dataType":"refAlias","ref":"Omit_CpuInformation.machineId-or-timestamp_"},"required":true},
            "memoryInformation": {"ref":"Omit_MemoryInformation.machineId-or-timestamp_","required":true},
            "storageInformation": {"ref":"Omit_StorageInformation.machineId-or-timestamp_","required":true},
            "antivirusInformation": {"dataType":"array","array":{"dataType":"refAlias","ref":"Omit_AntivirusInformation.machineId-or-timestamp_"},"required":true},
            "networkInformation": {"dataType":"array","array":{"dataType":"refAlias","ref":"Omit_NetworkInformation.machineId-or-timestamp_"},"required":true},
            "operatingSystem": {"dataType":"string","required":true},
            "operatingSystemVersion": {"dataType":"string","required":true},
            "operatingSystemArchitecture": {"dataType":"string","required":true},
            "operatingSystemDescription": {"dataType":"string","required":true},
            "computerName": {"dataType":"string","required":true},
            "domainName": {"dataType":"string"},
            "workgroup": {"dataType":"string"},
            "updatesPending": {"dataType":"boolean","required":true},
            "uptimeSeconds": {"dataType":"double","required":true},
            "loggedInUser": {"dataType":"string","required":true},
            "machineId": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ICpuInformation": {
        "dataType": "refObject",
        "properties": {
            "machineId": {"dataType":"string","required":true},
            "timestamp": {"dataType":"datetime","required":true},
            "name": {"dataType":"string","required":true},
            "temperature": {"dataType":"double","required":true},
            "load": {"dataType":"double","required":true},
            "power": {"dataType":"double","required":true},
            "cores": {"dataType":"array","array":{"dataType":"refObject","ref":"CpuCore"},"required":true},
            "id": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_CpuInformation.Exclude_keyofCpuInformation.machineId__": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"timestamp":{"dataType":"datetime","required":true},"name":{"dataType":"string","required":true},"temperature":{"dataType":"double","required":true},"load":{"dataType":"double","required":true},"power":{"dataType":"double","required":true},"cores":{"dataType":"array","array":{"dataType":"refObject","ref":"CpuCore"},"required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Omit_CpuInformation.machineId_": {
        "dataType": "refAlias",
        "type": {"ref":"Pick_CpuInformation.Exclude_keyofCpuInformation.machineId__","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IAntivirusInformation": {
        "dataType": "refObject",
        "properties": {
            "machineId": {"dataType":"string","required":true},
            "timestamp": {"dataType":"datetime","required":true},
            "name": {"dataType":"string","required":true},
            "enabled": {"dataType":"boolean","required":true},
            "lastQuickScan": {"dataType":"union","subSchemas":[{"dataType":"datetime"},{"dataType":"enum","enums":[null]}]},
            "lastFullScan": {"dataType":"union","subSchemas":[{"dataType":"datetime"},{"dataType":"enum","enums":[null]}]},
            "hasThreats": {"dataType":"union","subSchemas":[{"dataType":"boolean"},{"dataType":"enum","enums":[null]}]},
            "id": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_AntivirusInformation.Exclude_keyofAntivirusInformation.machineId__": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"timestamp":{"dataType":"datetime","required":true},"name":{"dataType":"string","required":true},"enabled":{"dataType":"boolean","required":true},"lastQuickScan":{"dataType":"datetime"},"lastFullScan":{"dataType":"datetime"},"hasThreats":{"dataType":"boolean"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Omit_AntivirusInformation.machineId_": {
        "dataType": "refAlias",
        "type": {"ref":"Pick_AntivirusInformation.Exclude_keyofAntivirusInformation.machineId__","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new ExpressTemplateService(models, {"noImplicitAdditionalProperties":"throw-on-extras","bodyCoercion":true});

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa




export function RegisterRoutes(app: Router) {

    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################


    
        const argsUserController_getUsers: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/users',
            ...(fetchMiddlewares<RequestHandler>(UserController)),
            ...(fetchMiddlewares<RequestHandler>(UserController.prototype.getUsers)),

            async function UserController_getUsers(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsUserController_getUsers, request, response });

                const controller = new UserController();

              await templateService.apiHandler({
                methodName: 'getUsers',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsUserController_getUser: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.get('/users/:id',
            ...(fetchMiddlewares<RequestHandler>(UserController)),
            ...(fetchMiddlewares<RequestHandler>(UserController.prototype.getUser)),

            async function UserController_getUser(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsUserController_getUser, request, response });

                const controller = new UserController();

              await templateService.apiHandler({
                methodName: 'getUser',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsUserController_createUser: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"ref":"User"},
        };
        app.post('/users',
            ...(fetchMiddlewares<RequestHandler>(UserController)),
            ...(fetchMiddlewares<RequestHandler>(UserController.prototype.createUser)),

            async function UserController_createUser(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsUserController_createUser, request, response });

                const controller = new UserController();

              await templateService.apiHandler({
                methodName: 'createUser',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsUserController_upsertUser: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
                body: {"in":"body","name":"body","required":true,"ref":"IUser"},
        };
        app.put('/users/:id',
            ...(fetchMiddlewares<RequestHandler>(UserController)),
            ...(fetchMiddlewares<RequestHandler>(UserController.prototype.upsertUser)),

            async function UserController_upsertUser(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsUserController_upsertUser, request, response });

                const controller = new UserController();

              await templateService.apiHandler({
                methodName: 'upsertUser',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsUserController_deleteUser: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.delete('/users/:id',
            ...(fetchMiddlewares<RequestHandler>(UserController)),
            ...(fetchMiddlewares<RequestHandler>(UserController.prototype.deleteUser)),

            async function UserController_deleteUser(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsUserController_deleteUser, request, response });

                const controller = new UserController();

              await templateService.apiHandler({
                methodName: 'deleteUser',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAuthController_login: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"ref":"LoginRequest"},
        };
        app.post('/auth/login',
            ...(fetchMiddlewares<RequestHandler>(AuthController)),
            ...(fetchMiddlewares<RequestHandler>(AuthController.prototype.login)),

            async function AuthController_login(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAuthController_login, request, response });

                const controller = new AuthController();

              await templateService.apiHandler({
                methodName: 'login',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAuthController_register: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"ref":"RegisterRequest"},
        };
        app.post('/auth/register',
            ...(fetchMiddlewares<RequestHandler>(AuthController)),
            ...(fetchMiddlewares<RequestHandler>(AuthController.prototype.register)),

            async function AuthController_register(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAuthController_register, request, response });

                const controller = new AuthController();

              await templateService.apiHandler({
                methodName: 'register',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAuthController_refreshToken: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"ref":"RefreshTokenRequest"},
        };
        app.post('/auth/refresh',
            ...(fetchMiddlewares<RequestHandler>(AuthController)),
            ...(fetchMiddlewares<RequestHandler>(AuthController.prototype.refreshToken)),

            async function AuthController_refreshToken(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAuthController_refreshToken, request, response });

                const controller = new AuthController();

              await templateService.apiHandler({
                methodName: 'refreshToken',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsTestController_publicEndpoint: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/test/public',
            ...(fetchMiddlewares<RequestHandler>(TestController)),
            ...(fetchMiddlewares<RequestHandler>(TestController.prototype.publicEndpoint)),

            async function TestController_publicEndpoint(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTestController_publicEndpoint, request, response });

                const controller = new TestController();

              await templateService.apiHandler({
                methodName: 'publicEndpoint',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsTestController_protectedEndpoint: Record<string, TsoaRoute.ParameterSchema> = {
                req: {"in":"request","name":"req","required":true,"dataType":"object"},
        };
        app.get('/test/protected',
            authenticateMiddleware([{"jwt":[]}]),
            ...(fetchMiddlewares<RequestHandler>(TestController)),
            ...(fetchMiddlewares<RequestHandler>(TestController.prototype.protectedEndpoint)),

            async function TestController_protectedEndpoint(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTestController_protectedEndpoint, request, response });

                const controller = new TestController();

              await templateService.apiHandler({
                methodName: 'protectedEndpoint',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsTestController_adminEndpoint: Record<string, TsoaRoute.ParameterSchema> = {
                req: {"in":"request","name":"req","required":true,"dataType":"object"},
        };
        app.get('/test/admin',
            authenticateMiddleware([{"jwt":["admin"]}]),
            ...(fetchMiddlewares<RequestHandler>(TestController)),
            ...(fetchMiddlewares<RequestHandler>(TestController.prototype.adminEndpoint)),

            async function TestController_adminEndpoint(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTestController_adminEndpoint, request, response });

                const controller = new TestController();

              await templateService.apiHandler({
                methodName: 'adminEndpoint',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsTestController_moderatorEndpoint: Record<string, TsoaRoute.ParameterSchema> = {
                req: {"in":"request","name":"req","required":true,"dataType":"object"},
        };
        app.get('/test/moderator',
            authenticateMiddleware([{"jwt":["moderator","admin"]}]),
            ...(fetchMiddlewares<RequestHandler>(TestController)),
            ...(fetchMiddlewares<RequestHandler>(TestController.prototype.moderatorEndpoint)),

            async function TestController_moderatorEndpoint(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTestController_moderatorEndpoint, request, response });

                const controller = new TestController();

              await templateService.apiHandler({
                methodName: 'moderatorEndpoint',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsTestController_validateToken: Record<string, TsoaRoute.ParameterSchema> = {
                req: {"in":"request","name":"req","required":true,"dataType":"object"},
        };
        app.get('/test/validate-token',
            authenticateMiddleware([{"jwt":[]}]),
            ...(fetchMiddlewares<RequestHandler>(TestController)),
            ...(fetchMiddlewares<RequestHandler>(TestController.prototype.validateToken)),

            async function TestController_validateToken(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTestController_validateToken, request, response });

                const controller = new TestController();

              await templateService.apiHandler({
                methodName: 'validateToken',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsStorageInformationController_getStorageInformationByMachineId: Record<string, TsoaRoute.ParameterSchema> = {
                machineId: {"in":"path","name":"machineId","required":true,"dataType":"string"},
                limit: {"in":"query","name":"limit","dataType":"double"},
        };
        app.get('/storage-information/machine/:machineId',
            ...(fetchMiddlewares<RequestHandler>(StorageInformationController)),
            ...(fetchMiddlewares<RequestHandler>(StorageInformationController.prototype.getStorageInformationByMachineId)),

            async function StorageInformationController_getStorageInformationByMachineId(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsStorageInformationController_getStorageInformationByMachineId, request, response });

                const controller = new StorageInformationController();

              await templateService.apiHandler({
                methodName: 'getStorageInformationByMachineId',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsStorageInformationController_getStorageInformation: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.get('/storage-information/:id',
            ...(fetchMiddlewares<RequestHandler>(StorageInformationController)),
            ...(fetchMiddlewares<RequestHandler>(StorageInformationController.prototype.getStorageInformation)),

            async function StorageInformationController_getStorageInformation(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsStorageInformationController_getStorageInformation, request, response });

                const controller = new StorageInformationController();

              await templateService.apiHandler({
                methodName: 'getStorageInformation',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsStorageInformationController_getLatestStorageInformation: Record<string, TsoaRoute.ParameterSchema> = {
                machineId: {"in":"path","name":"machineId","required":true,"dataType":"string"},
        };
        app.get('/storage-information/machine/:machineId/latest',
            ...(fetchMiddlewares<RequestHandler>(StorageInformationController)),
            ...(fetchMiddlewares<RequestHandler>(StorageInformationController.prototype.getLatestStorageInformation)),

            async function StorageInformationController_getLatestStorageInformation(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsStorageInformationController_getLatestStorageInformation, request, response });

                const controller = new StorageInformationController();

              await templateService.apiHandler({
                methodName: 'getLatestStorageInformation',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsStorageInformationController_createStorageInformation: Record<string, TsoaRoute.ParameterSchema> = {
                machineId: {"in":"path","name":"machineId","required":true,"dataType":"string"},
                body: {"in":"body","name":"body","required":true,"ref":"Omit_StorageInformation.machineId_"},
        };
        app.post('/storage-information/machine/:machineId',
            ...(fetchMiddlewares<RequestHandler>(StorageInformationController)),
            ...(fetchMiddlewares<RequestHandler>(StorageInformationController.prototype.createStorageInformation)),

            async function StorageInformationController_createStorageInformation(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsStorageInformationController_createStorageInformation, request, response });

                const controller = new StorageInformationController();

              await templateService.apiHandler({
                methodName: 'createStorageInformation',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsStorageInformationController_createStorageInformationBatch: Record<string, TsoaRoute.ParameterSchema> = {
                machineId: {"in":"path","name":"machineId","required":true,"dataType":"string"},
                body: {"in":"body","name":"body","required":true,"dataType":"array","array":{"dataType":"refAlias","ref":"Omit_StorageInformation.machineId_"}},
        };
        app.post('/storage-information/machine/:machineId/batch',
            ...(fetchMiddlewares<RequestHandler>(StorageInformationController)),
            ...(fetchMiddlewares<RequestHandler>(StorageInformationController.prototype.createStorageInformationBatch)),

            async function StorageInformationController_createStorageInformationBatch(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsStorageInformationController_createStorageInformationBatch, request, response });

                const controller = new StorageInformationController();

              await templateService.apiHandler({
                methodName: 'createStorageInformationBatch',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsStorageInformationController_getStorageInformationByDateRange: Record<string, TsoaRoute.ParameterSchema> = {
                machineId: {"in":"path","name":"machineId","required":true,"dataType":"string"},
                startDate: {"in":"query","name":"startDate","required":true,"dataType":"string"},
                endDate: {"in":"query","name":"endDate","required":true,"dataType":"string"},
        };
        app.get('/storage-information/machine/:machineId/range',
            ...(fetchMiddlewares<RequestHandler>(StorageInformationController)),
            ...(fetchMiddlewares<RequestHandler>(StorageInformationController.prototype.getStorageInformationByDateRange)),

            async function StorageInformationController_getStorageInformationByDateRange(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsStorageInformationController_getStorageInformationByDateRange, request, response });

                const controller = new StorageInformationController();

              await templateService.apiHandler({
                methodName: 'getStorageInformationByDateRange',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsStorageInformationController_deleteStorageInformation: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.delete('/storage-information/:id',
            ...(fetchMiddlewares<RequestHandler>(StorageInformationController)),
            ...(fetchMiddlewares<RequestHandler>(StorageInformationController.prototype.deleteStorageInformation)),

            async function StorageInformationController_deleteStorageInformation(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsStorageInformationController_deleteStorageInformation, request, response });

                const controller = new StorageInformationController();

              await templateService.apiHandler({
                methodName: 'deleteStorageInformation',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsStorageInformationController_deleteStorageInformationByMachineId: Record<string, TsoaRoute.ParameterSchema> = {
                machineId: {"in":"path","name":"machineId","required":true,"dataType":"string"},
        };
        app.delete('/storage-information/machine/:machineId',
            ...(fetchMiddlewares<RequestHandler>(StorageInformationController)),
            ...(fetchMiddlewares<RequestHandler>(StorageInformationController.prototype.deleteStorageInformationByMachineId)),

            async function StorageInformationController_deleteStorageInformationByMachineId(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsStorageInformationController_deleteStorageInformationByMachineId, request, response });

                const controller = new StorageInformationController();

              await templateService.apiHandler({
                methodName: 'deleteStorageInformationByMachineId',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsNetworkInformationController_getNetworkInformationByMachineId: Record<string, TsoaRoute.ParameterSchema> = {
                machineId: {"in":"path","name":"machineId","required":true,"dataType":"string"},
                limit: {"in":"query","name":"limit","dataType":"double"},
        };
        app.get('/network-information/machine/:machineId',
            ...(fetchMiddlewares<RequestHandler>(NetworkInformationController)),
            ...(fetchMiddlewares<RequestHandler>(NetworkInformationController.prototype.getNetworkInformationByMachineId)),

            async function NetworkInformationController_getNetworkInformationByMachineId(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsNetworkInformationController_getNetworkInformationByMachineId, request, response });

                const controller = new NetworkInformationController();

              await templateService.apiHandler({
                methodName: 'getNetworkInformationByMachineId',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsNetworkInformationController_getLatestNetworkInformation: Record<string, TsoaRoute.ParameterSchema> = {
                machineId: {"in":"path","name":"machineId","required":true,"dataType":"string"},
        };
        app.get('/network-information/machine/:machineId/latest',
            ...(fetchMiddlewares<RequestHandler>(NetworkInformationController)),
            ...(fetchMiddlewares<RequestHandler>(NetworkInformationController.prototype.getLatestNetworkInformation)),

            async function NetworkInformationController_getLatestNetworkInformation(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsNetworkInformationController_getLatestNetworkInformation, request, response });

                const controller = new NetworkInformationController();

              await templateService.apiHandler({
                methodName: 'getLatestNetworkInformation',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsNetworkInformationController_createNetworkInformation: Record<string, TsoaRoute.ParameterSchema> = {
                machineId: {"in":"path","name":"machineId","required":true,"dataType":"string"},
                body: {"in":"body","name":"body","required":true,"ref":"Omit_NetworkInformation.machineId_"},
        };
        app.post('/network-information/machine/:machineId',
            ...(fetchMiddlewares<RequestHandler>(NetworkInformationController)),
            ...(fetchMiddlewares<RequestHandler>(NetworkInformationController.prototype.createNetworkInformation)),

            async function NetworkInformationController_createNetworkInformation(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsNetworkInformationController_createNetworkInformation, request, response });

                const controller = new NetworkInformationController();

              await templateService.apiHandler({
                methodName: 'createNetworkInformation',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsNetworkInformationController_createNetworkInformationBatch: Record<string, TsoaRoute.ParameterSchema> = {
                machineId: {"in":"path","name":"machineId","required":true,"dataType":"string"},
                body: {"in":"body","name":"body","required":true,"dataType":"array","array":{"dataType":"refAlias","ref":"Omit_NetworkInformation.machineId_"}},
        };
        app.post('/network-information/machine/:machineId/batch',
            ...(fetchMiddlewares<RequestHandler>(NetworkInformationController)),
            ...(fetchMiddlewares<RequestHandler>(NetworkInformationController.prototype.createNetworkInformationBatch)),

            async function NetworkInformationController_createNetworkInformationBatch(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsNetworkInformationController_createNetworkInformationBatch, request, response });

                const controller = new NetworkInformationController();

              await templateService.apiHandler({
                methodName: 'createNetworkInformationBatch',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsNetworkInformationController_deleteNetworkInformation: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.delete('/network-information/:id',
            ...(fetchMiddlewares<RequestHandler>(NetworkInformationController)),
            ...(fetchMiddlewares<RequestHandler>(NetworkInformationController.prototype.deleteNetworkInformation)),

            async function NetworkInformationController_deleteNetworkInformation(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsNetworkInformationController_deleteNetworkInformation, request, response });

                const controller = new NetworkInformationController();

              await templateService.apiHandler({
                methodName: 'deleteNetworkInformation',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsMemoryInformationController_getMemoryInformationByMachineId: Record<string, TsoaRoute.ParameterSchema> = {
                machineId: {"in":"path","name":"machineId","required":true,"dataType":"string"},
                limit: {"in":"query","name":"limit","dataType":"double"},
        };
        app.get('/memory-information/machine/:machineId',
            ...(fetchMiddlewares<RequestHandler>(MemoryInformationController)),
            ...(fetchMiddlewares<RequestHandler>(MemoryInformationController.prototype.getMemoryInformationByMachineId)),

            async function MemoryInformationController_getMemoryInformationByMachineId(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsMemoryInformationController_getMemoryInformationByMachineId, request, response });

                const controller = new MemoryInformationController();

              await templateService.apiHandler({
                methodName: 'getMemoryInformationByMachineId',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsMemoryInformationController_getLatestMemoryInformation: Record<string, TsoaRoute.ParameterSchema> = {
                machineId: {"in":"path","name":"machineId","required":true,"dataType":"string"},
        };
        app.get('/memory-information/machine/:machineId/latest',
            ...(fetchMiddlewares<RequestHandler>(MemoryInformationController)),
            ...(fetchMiddlewares<RequestHandler>(MemoryInformationController.prototype.getLatestMemoryInformation)),

            async function MemoryInformationController_getLatestMemoryInformation(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsMemoryInformationController_getLatestMemoryInformation, request, response });

                const controller = new MemoryInformationController();

              await templateService.apiHandler({
                methodName: 'getLatestMemoryInformation',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsMemoryInformationController_createMemoryInformation: Record<string, TsoaRoute.ParameterSchema> = {
                machineId: {"in":"path","name":"machineId","required":true,"dataType":"string"},
                body: {"in":"body","name":"body","required":true,"ref":"Omit_MemoryInformation.machineId_"},
        };
        app.post('/memory-information/machine/:machineId',
            ...(fetchMiddlewares<RequestHandler>(MemoryInformationController)),
            ...(fetchMiddlewares<RequestHandler>(MemoryInformationController.prototype.createMemoryInformation)),

            async function MemoryInformationController_createMemoryInformation(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsMemoryInformationController_createMemoryInformation, request, response });

                const controller = new MemoryInformationController();

              await templateService.apiHandler({
                methodName: 'createMemoryInformation',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsMemoryInformationController_createMemoryInformationBatch: Record<string, TsoaRoute.ParameterSchema> = {
                machineId: {"in":"path","name":"machineId","required":true,"dataType":"string"},
                body: {"in":"body","name":"body","required":true,"dataType":"array","array":{"dataType":"refAlias","ref":"Omit_MemoryInformation.machineId_"}},
        };
        app.post('/memory-information/machine/:machineId/batch',
            ...(fetchMiddlewares<RequestHandler>(MemoryInformationController)),
            ...(fetchMiddlewares<RequestHandler>(MemoryInformationController.prototype.createMemoryInformationBatch)),

            async function MemoryInformationController_createMemoryInformationBatch(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsMemoryInformationController_createMemoryInformationBatch, request, response });

                const controller = new MemoryInformationController();

              await templateService.apiHandler({
                methodName: 'createMemoryInformationBatch',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsMemoryInformationController_deleteMemoryInformation: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.delete('/memory-information/:id',
            ...(fetchMiddlewares<RequestHandler>(MemoryInformationController)),
            ...(fetchMiddlewares<RequestHandler>(MemoryInformationController.prototype.deleteMemoryInformation)),

            async function MemoryInformationController_deleteMemoryInformation(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsMemoryInformationController_deleteMemoryInformation, request, response });

                const controller = new MemoryInformationController();

              await templateService.apiHandler({
                methodName: 'deleteMemoryInformation',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsMachineController_getMachines: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/machines',
            ...(fetchMiddlewares<RequestHandler>(MachineController)),
            ...(fetchMiddlewares<RequestHandler>(MachineController.prototype.getMachines)),

            async function MachineController_getMachines(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsMachineController_getMachines, request, response });

                const controller = new MachineController();

              await templateService.apiHandler({
                methodName: 'getMachines',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsMachineController_getMachine: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.get('/machines/:id',
            ...(fetchMiddlewares<RequestHandler>(MachineController)),
            ...(fetchMiddlewares<RequestHandler>(MachineController.prototype.getMachine)),

            async function MachineController_getMachine(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsMachineController_getMachine, request, response });

                const controller = new MachineController();

              await templateService.apiHandler({
                methodName: 'getMachine',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsMachineController_getMachineByMachineId: Record<string, TsoaRoute.ParameterSchema> = {
                machineId: {"in":"path","name":"machineId","required":true,"dataType":"string"},
        };
        app.get('/machines/by-machine-id/:machineId',
            ...(fetchMiddlewares<RequestHandler>(MachineController)),
            ...(fetchMiddlewares<RequestHandler>(MachineController.prototype.getMachineByMachineId)),

            async function MachineController_getMachineByMachineId(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsMachineController_getMachineByMachineId, request, response });

                const controller = new MachineController();

              await templateService.apiHandler({
                methodName: 'getMachineByMachineId',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsMachineController_createMachine: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"ref":"Machine"},
        };
        app.post('/machines',
            ...(fetchMiddlewares<RequestHandler>(MachineController)),
            ...(fetchMiddlewares<RequestHandler>(MachineController.prototype.createMachine)),

            async function MachineController_createMachine(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsMachineController_createMachine, request, response });

                const controller = new MachineController();

              await templateService.apiHandler({
                methodName: 'createMachine',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsMachineController_upsertMachine: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
                body: {"in":"body","name":"body","required":true,"ref":"IMachine"},
        };
        app.put('/machines/:id',
            ...(fetchMiddlewares<RequestHandler>(MachineController)),
            ...(fetchMiddlewares<RequestHandler>(MachineController.prototype.upsertMachine)),

            async function MachineController_upsertMachine(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsMachineController_upsertMachine, request, response });

                const controller = new MachineController();

              await templateService.apiHandler({
                methodName: 'upsertMachine',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsMachineController_deleteMachine: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.delete('/machines/:id',
            ...(fetchMiddlewares<RequestHandler>(MachineController)),
            ...(fetchMiddlewares<RequestHandler>(MachineController.prototype.deleteMachine)),

            async function MachineController_deleteMachine(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsMachineController_deleteMachine, request, response });

                const controller = new MachineController();

              await templateService.apiHandler({
                methodName: 'deleteMachine',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsMachineController_receiveSnapshot: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"ref":"FullMachineData"},
        };
        app.post('/machines/snapshot',
            ...(fetchMiddlewares<RequestHandler>(MachineController)),
            ...(fetchMiddlewares<RequestHandler>(MachineController.prototype.receiveSnapshot)),

            async function MachineController_receiveSnapshot(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsMachineController_receiveSnapshot, request, response });

                const controller = new MachineController();

              await templateService.apiHandler({
                methodName: 'receiveSnapshot',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsMachineController_getLatestSnapshot: Record<string, TsoaRoute.ParameterSchema> = {
                machineId: {"in":"path","name":"machineId","required":true,"dataType":"string"},
        };
        app.get('/machines/:machineId/latest',
            ...(fetchMiddlewares<RequestHandler>(MachineController)),
            ...(fetchMiddlewares<RequestHandler>(MachineController.prototype.getLatestSnapshot)),

            async function MachineController_getLatestSnapshot(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsMachineController_getLatestSnapshot, request, response });

                const controller = new MachineController();

              await templateService.apiHandler({
                methodName: 'getLatestSnapshot',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsMachineController_getMachineHistory: Record<string, TsoaRoute.ParameterSchema> = {
                machineId: {"in":"path","name":"machineId","required":true,"dataType":"string"},
                startDate: {"in":"query","name":"startDate","dataType":"string"},
                endDate: {"in":"query","name":"endDate","dataType":"string"},
        };
        app.get('/machines/:machineId/history',
            ...(fetchMiddlewares<RequestHandler>(MachineController)),
            ...(fetchMiddlewares<RequestHandler>(MachineController.prototype.getMachineHistory)),

            async function MachineController_getMachineHistory(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsMachineController_getMachineHistory, request, response });

                const controller = new MachineController();

              await templateService.apiHandler({
                methodName: 'getMachineHistory',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsCpuInformationController_getCpuInformationByMachineId: Record<string, TsoaRoute.ParameterSchema> = {
                machineId: {"in":"path","name":"machineId","required":true,"dataType":"string"},
                limit: {"in":"query","name":"limit","dataType":"double"},
        };
        app.get('/cpu-information/machine/:machineId',
            ...(fetchMiddlewares<RequestHandler>(CpuInformationController)),
            ...(fetchMiddlewares<RequestHandler>(CpuInformationController.prototype.getCpuInformationByMachineId)),

            async function CpuInformationController_getCpuInformationByMachineId(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsCpuInformationController_getCpuInformationByMachineId, request, response });

                const controller = new CpuInformationController();

              await templateService.apiHandler({
                methodName: 'getCpuInformationByMachineId',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsCpuInformationController_getCpuInformation: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.get('/cpu-information/:id',
            ...(fetchMiddlewares<RequestHandler>(CpuInformationController)),
            ...(fetchMiddlewares<RequestHandler>(CpuInformationController.prototype.getCpuInformation)),

            async function CpuInformationController_getCpuInformation(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsCpuInformationController_getCpuInformation, request, response });

                const controller = new CpuInformationController();

              await templateService.apiHandler({
                methodName: 'getCpuInformation',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsCpuInformationController_getLatestCpuInformation: Record<string, TsoaRoute.ParameterSchema> = {
                machineId: {"in":"path","name":"machineId","required":true,"dataType":"string"},
        };
        app.get('/cpu-information/machine/:machineId/latest',
            ...(fetchMiddlewares<RequestHandler>(CpuInformationController)),
            ...(fetchMiddlewares<RequestHandler>(CpuInformationController.prototype.getLatestCpuInformation)),

            async function CpuInformationController_getLatestCpuInformation(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsCpuInformationController_getLatestCpuInformation, request, response });

                const controller = new CpuInformationController();

              await templateService.apiHandler({
                methodName: 'getLatestCpuInformation',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsCpuInformationController_createCpuInformation: Record<string, TsoaRoute.ParameterSchema> = {
                machineId: {"in":"path","name":"machineId","required":true,"dataType":"string"},
                body: {"in":"body","name":"body","required":true,"ref":"Omit_CpuInformation.machineId_"},
        };
        app.post('/cpu-information/machine/:machineId',
            ...(fetchMiddlewares<RequestHandler>(CpuInformationController)),
            ...(fetchMiddlewares<RequestHandler>(CpuInformationController.prototype.createCpuInformation)),

            async function CpuInformationController_createCpuInformation(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsCpuInformationController_createCpuInformation, request, response });

                const controller = new CpuInformationController();

              await templateService.apiHandler({
                methodName: 'createCpuInformation',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsCpuInformationController_createCpuInformationBatch: Record<string, TsoaRoute.ParameterSchema> = {
                machineId: {"in":"path","name":"machineId","required":true,"dataType":"string"},
                body: {"in":"body","name":"body","required":true,"dataType":"array","array":{"dataType":"refAlias","ref":"Omit_CpuInformation.machineId_"}},
        };
        app.post('/cpu-information/machine/:machineId/batch',
            ...(fetchMiddlewares<RequestHandler>(CpuInformationController)),
            ...(fetchMiddlewares<RequestHandler>(CpuInformationController.prototype.createCpuInformationBatch)),

            async function CpuInformationController_createCpuInformationBatch(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsCpuInformationController_createCpuInformationBatch, request, response });

                const controller = new CpuInformationController();

              await templateService.apiHandler({
                methodName: 'createCpuInformationBatch',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsCpuInformationController_getCpuInformationByDateRange: Record<string, TsoaRoute.ParameterSchema> = {
                machineId: {"in":"path","name":"machineId","required":true,"dataType":"string"},
                startDate: {"in":"query","name":"startDate","required":true,"dataType":"string"},
                endDate: {"in":"query","name":"endDate","required":true,"dataType":"string"},
        };
        app.get('/cpu-information/machine/:machineId/range',
            ...(fetchMiddlewares<RequestHandler>(CpuInformationController)),
            ...(fetchMiddlewares<RequestHandler>(CpuInformationController.prototype.getCpuInformationByDateRange)),

            async function CpuInformationController_getCpuInformationByDateRange(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsCpuInformationController_getCpuInformationByDateRange, request, response });

                const controller = new CpuInformationController();

              await templateService.apiHandler({
                methodName: 'getCpuInformationByDateRange',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsCpuInformationController_deleteCpuInformation: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.delete('/cpu-information/:id',
            ...(fetchMiddlewares<RequestHandler>(CpuInformationController)),
            ...(fetchMiddlewares<RequestHandler>(CpuInformationController.prototype.deleteCpuInformation)),

            async function CpuInformationController_deleteCpuInformation(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsCpuInformationController_deleteCpuInformation, request, response });

                const controller = new CpuInformationController();

              await templateService.apiHandler({
                methodName: 'deleteCpuInformation',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsCpuInformationController_deleteCpuInformationByMachineId: Record<string, TsoaRoute.ParameterSchema> = {
                machineId: {"in":"path","name":"machineId","required":true,"dataType":"string"},
        };
        app.delete('/cpu-information/machine/:machineId',
            ...(fetchMiddlewares<RequestHandler>(CpuInformationController)),
            ...(fetchMiddlewares<RequestHandler>(CpuInformationController.prototype.deleteCpuInformationByMachineId)),

            async function CpuInformationController_deleteCpuInformationByMachineId(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsCpuInformationController_deleteCpuInformationByMachineId, request, response });

                const controller = new CpuInformationController();

              await templateService.apiHandler({
                methodName: 'deleteCpuInformationByMachineId',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAntivirusInformationController_getAntivirusInformationByMachineId: Record<string, TsoaRoute.ParameterSchema> = {
                machineId: {"in":"path","name":"machineId","required":true,"dataType":"string"},
                limit: {"in":"query","name":"limit","dataType":"double"},
        };
        app.get('/antivirus-information/machine/:machineId',
            ...(fetchMiddlewares<RequestHandler>(AntivirusInformationController)),
            ...(fetchMiddlewares<RequestHandler>(AntivirusInformationController.prototype.getAntivirusInformationByMachineId)),

            async function AntivirusInformationController_getAntivirusInformationByMachineId(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAntivirusInformationController_getAntivirusInformationByMachineId, request, response });

                const controller = new AntivirusInformationController();

              await templateService.apiHandler({
                methodName: 'getAntivirusInformationByMachineId',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAntivirusInformationController_getLatestAntivirusInformation: Record<string, TsoaRoute.ParameterSchema> = {
                machineId: {"in":"path","name":"machineId","required":true,"dataType":"string"},
        };
        app.get('/antivirus-information/machine/:machineId/latest',
            ...(fetchMiddlewares<RequestHandler>(AntivirusInformationController)),
            ...(fetchMiddlewares<RequestHandler>(AntivirusInformationController.prototype.getLatestAntivirusInformation)),

            async function AntivirusInformationController_getLatestAntivirusInformation(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAntivirusInformationController_getLatestAntivirusInformation, request, response });

                const controller = new AntivirusInformationController();

              await templateService.apiHandler({
                methodName: 'getLatestAntivirusInformation',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAntivirusInformationController_createAntivirusInformation: Record<string, TsoaRoute.ParameterSchema> = {
                machineId: {"in":"path","name":"machineId","required":true,"dataType":"string"},
                body: {"in":"body","name":"body","required":true,"ref":"Omit_AntivirusInformation.machineId_"},
        };
        app.post('/antivirus-information/machine/:machineId',
            ...(fetchMiddlewares<RequestHandler>(AntivirusInformationController)),
            ...(fetchMiddlewares<RequestHandler>(AntivirusInformationController.prototype.createAntivirusInformation)),

            async function AntivirusInformationController_createAntivirusInformation(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAntivirusInformationController_createAntivirusInformation, request, response });

                const controller = new AntivirusInformationController();

              await templateService.apiHandler({
                methodName: 'createAntivirusInformation',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAntivirusInformationController_createAntivirusInformationBatch: Record<string, TsoaRoute.ParameterSchema> = {
                machineId: {"in":"path","name":"machineId","required":true,"dataType":"string"},
                body: {"in":"body","name":"body","required":true,"dataType":"array","array":{"dataType":"refAlias","ref":"Omit_AntivirusInformation.machineId_"}},
        };
        app.post('/antivirus-information/machine/:machineId/batch',
            ...(fetchMiddlewares<RequestHandler>(AntivirusInformationController)),
            ...(fetchMiddlewares<RequestHandler>(AntivirusInformationController.prototype.createAntivirusInformationBatch)),

            async function AntivirusInformationController_createAntivirusInformationBatch(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAntivirusInformationController_createAntivirusInformationBatch, request, response });

                const controller = new AntivirusInformationController();

              await templateService.apiHandler({
                methodName: 'createAntivirusInformationBatch',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAntivirusInformationController_deleteAntivirusInformation: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.delete('/antivirus-information/:id',
            ...(fetchMiddlewares<RequestHandler>(AntivirusInformationController)),
            ...(fetchMiddlewares<RequestHandler>(AntivirusInformationController.prototype.deleteAntivirusInformation)),

            async function AntivirusInformationController_deleteAntivirusInformation(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAntivirusInformationController_deleteAntivirusInformation, request, response });

                const controller = new AntivirusInformationController();

              await templateService.apiHandler({
                methodName: 'deleteAntivirusInformation',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function authenticateMiddleware(security: TsoaRoute.Security[] = []) {
        return async function runAuthenticationMiddleware(request: any, response: any, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            // keep track of failed auth attempts so we can hand back the most
            // recent one.  This behavior was previously existing so preserving it
            // here
            const failedAttempts: any[] = [];
            const pushAndRethrow = (error: any) => {
                failedAttempts.push(error);
                throw error;
            };

            const secMethodOrPromises: Promise<any>[] = [];
            for (const secMethod of security) {
                if (Object.keys(secMethod).length > 1) {
                    const secMethodAndPromises: Promise<any>[] = [];

                    for (const name in secMethod) {
                        secMethodAndPromises.push(
                            expressAuthenticationRecasted(request, name, secMethod[name], response)
                                .catch(pushAndRethrow)
                        );
                    }

                    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

                    secMethodOrPromises.push(Promise.all(secMethodAndPromises)
                        .then(users => { return users[0]; }));
                } else {
                    for (const name in secMethod) {
                        secMethodOrPromises.push(
                            expressAuthenticationRecasted(request, name, secMethod[name], response)
                                .catch(pushAndRethrow)
                        );
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
            catch(err) {
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
        }
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
