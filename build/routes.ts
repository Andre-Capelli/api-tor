/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import type { TsoaRoute } from '@tsoa/runtime';
import {  fetchMiddlewares, ExpressTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { StorageInformationController } from './../src/modules/monitoring/controllers/StorageInformationController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { NetworkInformationController } from './../src/modules/monitoring/controllers/NetworkInformationController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { MonitoringController } from './../src/modules/monitoring/controllers/MonitoringController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { MemoryInformationController } from './../src/modules/monitoring/controllers/MemoryInformationController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { CpuInformationController } from './../src/modules/monitoring/controllers/CpuInformationController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { AntivirusInformationController } from './../src/modules/monitoring/controllers/AntivirusInformationController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { UserController } from './../src/app/main/users/controllers/UserController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { AuthController } from './../src/app/main/users/controllers/AuthController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { TestController } from './../src/app/main/test/controllers/TestController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { SystemController } from './../src/app/main/system/controllers/SystemController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { SubscriptionController } from './../src/app/main/subscriptions/controllers/SubscriptionController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { PlanController } from './../src/app/main/plans/controllers/PlanController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { OrganizationController } from './../src/app/main/organizations/controllers/OrganizationController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { MachineController } from './../src/app/main/machines/controllers/MachineController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { LanguageController } from './../src/app/main/languages/controllers/LanguageController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { LabelController } from './../src/app/main/labels/controllers/LabelController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { CustomFieldController } from './../src/app/main/custom-fields/controllers/CustomFieldController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { SystemConfigController } from './../src/app/main/config/controllers/SystemConfigController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { AccessLevelController } from './../src/app/main/access-levels/controllers/AccessLevelController';
import { expressAuthentication } from './../src/app/core/middlewares/authHandler';
// @ts-ignore - no great way to install types from subpackage
import type { Request as ExRequest, Response as ExResponse, RequestHandler, Router } from 'express';

const expressAuthenticationRecasted = expressAuthentication as (req: ExRequest, securityName: string, scopes?: string[], res?: ExResponse) => Promise<any>;


// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
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
            "id": {"dataType":"string"},
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
            "id": {"dataType":"string"},
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
    "IMemoryInformation": {
        "dataType": "refObject",
        "properties": {
            "machineId": {"dataType":"string","required":true},
            "timestamp": {"dataType":"datetime","required":true},
            "usedMemoryGB": {"dataType":"double","required":true},
            "availableMemoryGB": {"dataType":"double","required":true},
            "totalMemoryGB": {"dataType":"double","required":true},
            "usagePercentage": {"dataType":"double","required":true},
            "id": {"dataType":"string"},
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
            "id": {"dataType":"string"},
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
            "id": {"dataType":"string"},
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
            "isActive": {"dataType":"boolean"},
            "organizationId": {"dataType":"string"},
            "accessLevelId": {"dataType":"string"},
            "id": {"dataType":"string"},
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
            "isActive": {"dataType":"boolean"},
            "organizationId": {"dataType":"string"},
            "accessLevelId": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AuthResponse": {
        "dataType": "refObject",
        "properties": {
            "accessToken": {"dataType":"string","required":true},
            "refreshToken": {"dataType":"string","required":true},
            "user": {"dataType":"nestedObjectLiteral","nestedProperties":{"organizationType":{"dataType":"string"},"organizationId":{"dataType":"string"},"accessLevel":{"dataType":"double"},"accessLevelName":{"dataType":"string"},"email":{"dataType":"string","required":true},"name":{"dataType":"string","required":true},"id":{"dataType":"string","required":true}},"required":true},
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
            "organizationId": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "RefreshTokenRequest": {
        "dataType": "refObject",
        "properties": {
            "refreshToken": {"dataType":"string","required":true},
            "accessToken": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TestResponse": {
        "dataType": "refObject",
        "properties": {
            "success": {"dataType":"boolean","required":true},
            "message": {"dataType":"string","required":true},
            "user": {"dataType":"nestedObjectLiteral","nestedProperties":{"accessLevelName":{"dataType":"string"},"name":{"dataType":"string","required":true},"email":{"dataType":"string","required":true},"id":{"dataType":"string","required":true}}},
            "timestamp": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Record_string.string_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{},"additionalProperties":{"dataType":"string"},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Record_string.any_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{},"additionalProperties":{"dataType":"any"},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ResolvedSystemConfig": {
        "dataType": "refObject",
        "properties": {
            "siteName": {"dataType":"string","required":true},
            "siteDescription": {"dataType":"string","required":true},
            "logo": {"dataType":"string","required":true},
            "logoDark": {"dataType":"string","required":true},
            "favicon": {"dataType":"string","required":true},
            "footerText": {"dataType":"string","required":true},
            "theme": {"ref":"Record_string.any_","required":true},
            "metadata": {"ref":"Record_string.any_","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SystemBundle": {
        "dataType": "refObject",
        "properties": {
            "languages": {"dataType":"array","array":{"dataType":"any"},"required":true},
            "labels": {"ref":"Record_string.string_","required":true},
            "config": {"ref":"ResolvedSystemConfig","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ISubscription": {
        "dataType": "refObject",
        "properties": {
            "organizationId": {"dataType":"string","required":true},
            "planId": {"dataType":"string","required":true},
            "status": {"dataType":"string"},
            "startDate": {"dataType":"datetime","required":true},
            "endDate": {"dataType":"datetime","required":true},
            "autoRenew": {"dataType":"boolean"},
            "id": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Subscription": {
        "dataType": "refObject",
        "properties": {
            "organizationId": {"dataType":"string","required":true},
            "planId": {"dataType":"string","required":true},
            "status": {"dataType":"string"},
            "startDate": {"dataType":"datetime","required":true},
            "endDate": {"dataType":"datetime","required":true},
            "autoRenew": {"dataType":"boolean"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_Subscription_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"organizationId":{"dataType":"string"},"planId":{"dataType":"string"},"status":{"dataType":"string"},"startDate":{"dataType":"datetime"},"endDate":{"dataType":"datetime"},"autoRenew":{"dataType":"boolean"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ModuleType": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["cpu"]},{"dataType":"enum","enums":["memory"]},{"dataType":"enum","enums":["storage"]},{"dataType":"enum","enums":["network"]},{"dataType":"enum","enums":["antivirus"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IPlan": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "description": {"dataType":"string"},
            "maxMachines": {"dataType":"double","required":true},
            "allowedModules": {"dataType":"array","array":{"dataType":"refAlias","ref":"ModuleType"},"required":true},
            "billingPeriod": {"dataType":"string","required":true},
            "price": {"dataType":"double","required":true},
            "isActive": {"dataType":"boolean"},
            "id": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Plan": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "description": {"dataType":"string"},
            "maxMachines": {"dataType":"double","required":true},
            "allowedModules": {"dataType":"array","array":{"dataType":"refAlias","ref":"ModuleType"},"required":true},
            "billingPeriod": {"dataType":"string","required":true},
            "price": {"dataType":"double","required":true},
            "isActive": {"dataType":"boolean"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_Plan_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"name":{"dataType":"string"},"description":{"dataType":"string"},"maxMachines":{"dataType":"double"},"allowedModules":{"dataType":"array","array":{"dataType":"refAlias","ref":"ModuleType"}},"billingPeriod":{"dataType":"string"},"price":{"dataType":"double"},"isActive":{"dataType":"boolean"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IOrganization": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "type": {"dataType":"string","required":true},
            "parentId": {"dataType":"string"},
            "document": {"dataType":"string"},
            "email": {"dataType":"string"},
            "phone": {"dataType":"string"},
            "isActive": {"dataType":"boolean"},
            "id": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Organization": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "type": {"dataType":"string","required":true},
            "parentId": {"dataType":"string"},
            "document": {"dataType":"string"},
            "email": {"dataType":"string"},
            "phone": {"dataType":"string"},
            "isActive": {"dataType":"boolean"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_Organization_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"name":{"dataType":"string"},"type":{"dataType":"string"},"parentId":{"dataType":"string"},"document":{"dataType":"string"},"email":{"dataType":"string"},"phone":{"dataType":"string"},"isActive":{"dataType":"boolean"}},"validators":{}},
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
            "organizationId": {"dataType":"string"},
            "id": {"dataType":"string"},
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
            "organizationId": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ILanguage": {
        "dataType": "refObject",
        "properties": {
            "code": {"dataType":"string","required":true},
            "name": {"dataType":"string","required":true},
            "nativeName": {"dataType":"string","required":true},
            "isAvailable": {"dataType":"boolean","required":true},
            "isDefault": {"dataType":"boolean","required":true},
            "isActive": {"dataType":"boolean","required":true},
            "id": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Language": {
        "dataType": "refObject",
        "properties": {
            "code": {"dataType":"string","required":true},
            "name": {"dataType":"string","required":true},
            "nativeName": {"dataType":"string","required":true},
            "isAvailable": {"dataType":"boolean","required":true},
            "isDefault": {"dataType":"boolean","required":true},
            "isActive": {"dataType":"boolean","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_Language_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"code":{"dataType":"string"},"name":{"dataType":"string"},"nativeName":{"dataType":"string"},"isAvailable":{"dataType":"boolean"},"isDefault":{"dataType":"boolean"},"isActive":{"dataType":"boolean"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ILabel": {
        "dataType": "refObject",
        "properties": {
            "key": {"dataType":"string","required":true},
            "translations": {"ref":"Record_string.string_","required":true},
            "id": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Label": {
        "dataType": "refObject",
        "properties": {
            "key": {"dataType":"string","required":true},
            "translations": {"ref":"Record_string.string_","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BatchLabelRequest": {
        "dataType": "refObject",
        "properties": {
            "items": {"dataType":"array","array":{"dataType":"refObject","ref":"Label"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_Label_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"key":{"dataType":"string"},"translations":{"ref":"Record_string.string_"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BatchLabelUpsertRequest": {
        "dataType": "refObject",
        "properties": {
            "items": {"dataType":"array","array":{"dataType":"nestedObjectLiteral","nestedProperties":{"translations":{"ref":"Record_string.string_","required":true},"key":{"dataType":"string","required":true}}},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ICustomField": {
        "dataType": "refObject",
        "properties": {
            "targetCollection": {"dataType":"string","required":true},
            "fieldName": {"dataType":"string","required":true},
            "fieldType": {"dataType":"string","required":true},
            "required": {"dataType":"boolean"},
            "defaultValue": {"dataType":"any"},
            "options": {"dataType":"array","array":{"dataType":"string"}},
            "description": {"dataType":"string"},
            "organizationId": {"dataType":"string"},
            "isActive": {"dataType":"boolean"},
            "id": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CustomField": {
        "dataType": "refObject",
        "properties": {
            "targetCollection": {"dataType":"string","required":true},
            "fieldName": {"dataType":"string","required":true},
            "fieldType": {"dataType":"string","required":true},
            "required": {"dataType":"boolean"},
            "defaultValue": {"dataType":"any"},
            "options": {"dataType":"array","array":{"dataType":"string"}},
            "description": {"dataType":"string"},
            "organizationId": {"dataType":"string"},
            "isActive": {"dataType":"boolean"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_CustomField_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"targetCollection":{"dataType":"string"},"fieldName":{"dataType":"string"},"fieldType":{"dataType":"string"},"required":{"dataType":"boolean"},"defaultValue":{"dataType":"any"},"options":{"dataType":"array","array":{"dataType":"string"}},"description":{"dataType":"string"},"organizationId":{"dataType":"string"},"isActive":{"dataType":"boolean"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ICustomFieldValue": {
        "dataType": "refObject",
        "properties": {
            "customFieldId": {"dataType":"string","required":true},
            "targetCollection": {"dataType":"string","required":true},
            "targetDocumentId": {"dataType":"string","required":true},
            "fieldName": {"dataType":"string","required":true},
            "value": {"dataType":"any","required":true},
            "id": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CustomFieldValue": {
        "dataType": "refObject",
        "properties": {
            "customFieldId": {"dataType":"string","required":true},
            "targetCollection": {"dataType":"string","required":true},
            "targetDocumentId": {"dataType":"string","required":true},
            "fieldName": {"dataType":"string","required":true},
            "value": {"dataType":"any","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ISystemConfig": {
        "dataType": "refObject",
        "properties": {
            "siteName": {"ref":"Record_string.string_","required":true},
            "siteDescription": {"ref":"Record_string.string_","required":true},
            "logo": {"dataType":"string","required":true},
            "logoDark": {"dataType":"string","required":true},
            "favicon": {"dataType":"string","required":true},
            "footerText": {"ref":"Record_string.string_","required":true},
            "theme": {"ref":"Record_string.any_","required":true},
            "metadata": {"ref":"Record_string.any_","required":true},
            "id": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_SystemConfig_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"siteName":{"ref":"Record_string.string_"},"siteDescription":{"ref":"Record_string.string_"},"logo":{"dataType":"string"},"logoDark":{"dataType":"string"},"favicon":{"dataType":"string"},"footerText":{"ref":"Record_string.string_"},"theme":{"ref":"Record_string.any_"},"metadata":{"ref":"Record_string.any_"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IAccessLevel": {
        "dataType": "refObject",
        "properties": {
            "key": {"dataType":"string","required":true},
            "name": {"ref":"Record_string.string_","required":true},
            "level": {"dataType":"double","required":true},
            "scope": {"dataType":"string","required":true},
            "description": {"dataType":"string"},
            "isSystem": {"dataType":"boolean"},
            "isActive": {"dataType":"boolean"},
            "id": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AccessLevel": {
        "dataType": "refObject",
        "properties": {
            "key": {"dataType":"string","required":true},
            "name": {"ref":"Record_string.string_","required":true},
            "level": {"dataType":"double","required":true},
            "scope": {"dataType":"string","required":true},
            "description": {"dataType":"string"},
            "isSystem": {"dataType":"boolean"},
            "isActive": {"dataType":"boolean"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_AccessLevel_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"key":{"dataType":"string"},"name":{"ref":"Record_string.string_"},"level":{"dataType":"double"},"scope":{"dataType":"string"},"description":{"dataType":"string"},"isSystem":{"dataType":"boolean"},"isActive":{"dataType":"boolean"}},"validators":{}},
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


    
        const argsStorageInformationController_getStorageInformationByMachineId: Record<string, TsoaRoute.ParameterSchema> = {
                machineId: {"in":"path","name":"machineId","required":true,"dataType":"string"},
                limit: {"in":"query","name":"limit","dataType":"double"},
        };
        app.get('/api/v1/monitoring/storage-information/machine/:machineId',
            authenticateMiddleware([{"jwt":[]}]),
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
        app.get('/api/v1/monitoring/storage-information/:id',
            authenticateMiddleware([{"jwt":[]}]),
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
        app.get('/api/v1/monitoring/storage-information/machine/:machineId/latest',
            authenticateMiddleware([{"jwt":[]}]),
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
        app.post('/api/v1/monitoring/storage-information/machine/:machineId',
            authenticateMiddleware([{"jwt":[]}]),
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
        app.post('/api/v1/monitoring/storage-information/machine/:machineId/batch',
            authenticateMiddleware([{"jwt":[]}]),
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
        app.get('/api/v1/monitoring/storage-information/machine/:machineId/range',
            authenticateMiddleware([{"jwt":[]}]),
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
        app.delete('/api/v1/monitoring/storage-information/:id',
            authenticateMiddleware([{"jwt":[]}]),
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
        app.delete('/api/v1/monitoring/storage-information/machine/:machineId',
            authenticateMiddleware([{"jwt":[]}]),
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
        app.get('/api/v1/monitoring/network-information/machine/:machineId',
            authenticateMiddleware([{"jwt":[]}]),
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
        app.get('/api/v1/monitoring/network-information/machine/:machineId/latest',
            authenticateMiddleware([{"jwt":[]}]),
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
        app.post('/api/v1/monitoring/network-information/machine/:machineId',
            authenticateMiddleware([{"jwt":[]}]),
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
        app.post('/api/v1/monitoring/network-information/machine/:machineId/batch',
            authenticateMiddleware([{"jwt":[]}]),
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
        app.delete('/api/v1/monitoring/network-information/:id',
            authenticateMiddleware([{"jwt":[]}]),
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
        const argsMonitoringController_receiveSnapshot: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"ref":"FullMachineData"},
                req: {"in":"request","name":"req","required":true,"dataType":"object"},
        };
        app.post('/api/v1/monitoring/snapshot',
            authenticateMiddleware([{"jwt":[]}]),
            ...(fetchMiddlewares<RequestHandler>(MonitoringController)),
            ...(fetchMiddlewares<RequestHandler>(MonitoringController.prototype.receiveSnapshot)),

            async function MonitoringController_receiveSnapshot(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsMonitoringController_receiveSnapshot, request, response });

                const controller = new MonitoringController();

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
        const argsMonitoringController_getLatestSnapshot: Record<string, TsoaRoute.ParameterSchema> = {
                machineId: {"in":"path","name":"machineId","required":true,"dataType":"string"},
        };
        app.get('/api/v1/monitoring/:machineId/latest',
            authenticateMiddleware([{"jwt":[]}]),
            ...(fetchMiddlewares<RequestHandler>(MonitoringController)),
            ...(fetchMiddlewares<RequestHandler>(MonitoringController.prototype.getLatestSnapshot)),

            async function MonitoringController_getLatestSnapshot(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsMonitoringController_getLatestSnapshot, request, response });

                const controller = new MonitoringController();

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
        const argsMonitoringController_getMachineHistory: Record<string, TsoaRoute.ParameterSchema> = {
                machineId: {"in":"path","name":"machineId","required":true,"dataType":"string"},
                startDate: {"in":"query","name":"startDate","dataType":"string"},
                endDate: {"in":"query","name":"endDate","dataType":"string"},
        };
        app.get('/api/v1/monitoring/:machineId/history',
            authenticateMiddleware([{"jwt":[]}]),
            ...(fetchMiddlewares<RequestHandler>(MonitoringController)),
            ...(fetchMiddlewares<RequestHandler>(MonitoringController.prototype.getMachineHistory)),

            async function MonitoringController_getMachineHistory(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsMonitoringController_getMachineHistory, request, response });

                const controller = new MonitoringController();

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
        const argsMemoryInformationController_getMemoryInformationByMachineId: Record<string, TsoaRoute.ParameterSchema> = {
                machineId: {"in":"path","name":"machineId","required":true,"dataType":"string"},
                limit: {"in":"query","name":"limit","dataType":"double"},
        };
        app.get('/api/v1/monitoring/memory-information/machine/:machineId',
            authenticateMiddleware([{"jwt":[]}]),
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
        app.get('/api/v1/monitoring/memory-information/machine/:machineId/latest',
            authenticateMiddleware([{"jwt":[]}]),
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
        app.post('/api/v1/monitoring/memory-information/machine/:machineId',
            authenticateMiddleware([{"jwt":[]}]),
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
        app.post('/api/v1/monitoring/memory-information/machine/:machineId/batch',
            authenticateMiddleware([{"jwt":[]}]),
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
        app.delete('/api/v1/monitoring/memory-information/:id',
            authenticateMiddleware([{"jwt":[]}]),
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
        const argsCpuInformationController_getCpuInformationByMachineId: Record<string, TsoaRoute.ParameterSchema> = {
                machineId: {"in":"path","name":"machineId","required":true,"dataType":"string"},
                limit: {"in":"query","name":"limit","dataType":"double"},
        };
        app.get('/api/v1/monitoring/cpu-information/machine/:machineId',
            authenticateMiddleware([{"jwt":[]}]),
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
        app.get('/api/v1/monitoring/cpu-information/:id',
            authenticateMiddleware([{"jwt":[]}]),
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
        app.get('/api/v1/monitoring/cpu-information/machine/:machineId/latest',
            authenticateMiddleware([{"jwt":[]}]),
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
        app.post('/api/v1/monitoring/cpu-information/machine/:machineId',
            authenticateMiddleware([{"jwt":[]}]),
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
        app.post('/api/v1/monitoring/cpu-information/machine/:machineId/batch',
            authenticateMiddleware([{"jwt":[]}]),
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
        app.get('/api/v1/monitoring/cpu-information/machine/:machineId/range',
            authenticateMiddleware([{"jwt":[]}]),
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
        app.delete('/api/v1/monitoring/cpu-information/:id',
            authenticateMiddleware([{"jwt":[]}]),
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
        app.delete('/api/v1/monitoring/cpu-information/machine/:machineId',
            authenticateMiddleware([{"jwt":[]}]),
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
        app.get('/api/v1/monitoring/antivirus-information/machine/:machineId',
            authenticateMiddleware([{"jwt":[]}]),
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
        app.get('/api/v1/monitoring/antivirus-information/machine/:machineId/latest',
            authenticateMiddleware([{"jwt":[]}]),
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
        app.post('/api/v1/monitoring/antivirus-information/machine/:machineId',
            authenticateMiddleware([{"jwt":[]}]),
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
        app.post('/api/v1/monitoring/antivirus-information/machine/:machineId/batch',
            authenticateMiddleware([{"jwt":[]}]),
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
        app.delete('/api/v1/monitoring/antivirus-information/:id',
            authenticateMiddleware([{"jwt":[]}]),
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
        const argsUserController_getUsers: Record<string, TsoaRoute.ParameterSchema> = {
                req: {"in":"request","name":"req","required":true,"dataType":"object"},
        };
        app.get('/api/v1/users',
            authenticateMiddleware([{"jwt":["admin"]}]),
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
        app.get('/api/v1/users/:id',
            authenticateMiddleware([{"jwt":["admin"]}]),
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
        app.post('/api/v1/users',
            authenticateMiddleware([{"jwt":["admin"]}]),
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
                body: {"in":"body","name":"body","required":true,"ref":"User"},
        };
        app.put('/api/v1/users/:id',
            authenticateMiddleware([{"jwt":["admin"]}]),
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
        app.delete('/api/v1/users/:id',
            authenticateMiddleware([{"jwt":["admin"]}]),
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
        app.post('/api/v1/auth/login',
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
        app.post('/api/v1/auth/register',
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
        app.post('/api/v1/auth/refresh',
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
        app.get('/api/v1/test/public',
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
        app.get('/api/v1/test/protected',
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
        app.get('/api/v1/test/admin',
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
        app.get('/api/v1/test/moderator',
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
        app.get('/api/v1/test/validate-token',
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
        const argsSystemController_getSystemBundle: Record<string, TsoaRoute.ParameterSchema> = {
                lang: {"in":"query","name":"lang","dataType":"string"},
        };
        app.get('/api/v1/system',
            ...(fetchMiddlewares<RequestHandler>(SystemController)),
            ...(fetchMiddlewares<RequestHandler>(SystemController.prototype.getSystemBundle)),

            async function SystemController_getSystemBundle(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsSystemController_getSystemBundle, request, response });

                const controller = new SystemController();

              await templateService.apiHandler({
                methodName: 'getSystemBundle',
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
        const argsSubscriptionController_getAll: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/api/v1/subscriptions',
            authenticateMiddleware([{"jwt":["master"]}]),
            ...(fetchMiddlewares<RequestHandler>(SubscriptionController)),
            ...(fetchMiddlewares<RequestHandler>(SubscriptionController.prototype.getAll)),

            async function SubscriptionController_getAll(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsSubscriptionController_getAll, request, response });

                const controller = new SubscriptionController();

              await templateService.apiHandler({
                methodName: 'getAll',
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
        const argsSubscriptionController_getByOrganization: Record<string, TsoaRoute.ParameterSchema> = {
                organizationId: {"in":"path","name":"organizationId","required":true,"dataType":"string"},
        };
        app.get('/api/v1/subscriptions/organization/:organizationId',
            authenticateMiddleware([{"jwt":[]}]),
            ...(fetchMiddlewares<RequestHandler>(SubscriptionController)),
            ...(fetchMiddlewares<RequestHandler>(SubscriptionController.prototype.getByOrganization)),

            async function SubscriptionController_getByOrganization(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsSubscriptionController_getByOrganization, request, response });

                const controller = new SubscriptionController();

              await templateService.apiHandler({
                methodName: 'getByOrganization',
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
        const argsSubscriptionController_getById: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.get('/api/v1/subscriptions/:id',
            authenticateMiddleware([{"jwt":[]}]),
            ...(fetchMiddlewares<RequestHandler>(SubscriptionController)),
            ...(fetchMiddlewares<RequestHandler>(SubscriptionController.prototype.getById)),

            async function SubscriptionController_getById(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsSubscriptionController_getById, request, response });

                const controller = new SubscriptionController();

              await templateService.apiHandler({
                methodName: 'getById',
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
        const argsSubscriptionController_create: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"ref":"Subscription"},
        };
        app.post('/api/v1/subscriptions',
            authenticateMiddleware([{"jwt":["admin"]}]),
            ...(fetchMiddlewares<RequestHandler>(SubscriptionController)),
            ...(fetchMiddlewares<RequestHandler>(SubscriptionController.prototype.create)),

            async function SubscriptionController_create(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsSubscriptionController_create, request, response });

                const controller = new SubscriptionController();

              await templateService.apiHandler({
                methodName: 'create',
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
        const argsSubscriptionController_update: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
                body: {"in":"body","name":"body","required":true,"ref":"Partial_Subscription_"},
        };
        app.put('/api/v1/subscriptions/:id',
            authenticateMiddleware([{"jwt":["admin"]}]),
            ...(fetchMiddlewares<RequestHandler>(SubscriptionController)),
            ...(fetchMiddlewares<RequestHandler>(SubscriptionController.prototype.update)),

            async function SubscriptionController_update(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsSubscriptionController_update, request, response });

                const controller = new SubscriptionController();

              await templateService.apiHandler({
                methodName: 'update',
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
        const argsSubscriptionController_delete: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.delete('/api/v1/subscriptions/:id',
            authenticateMiddleware([{"jwt":["master"]}]),
            ...(fetchMiddlewares<RequestHandler>(SubscriptionController)),
            ...(fetchMiddlewares<RequestHandler>(SubscriptionController.prototype.delete)),

            async function SubscriptionController_delete(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsSubscriptionController_delete, request, response });

                const controller = new SubscriptionController();

              await templateService.apiHandler({
                methodName: 'delete',
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
        const argsSubscriptionController_validateSubscription: Record<string, TsoaRoute.ParameterSchema> = {
                organizationId: {"in":"path","name":"organizationId","required":true,"dataType":"string"},
                module: {"in":"path","name":"module","required":true,"ref":"ModuleType"},
        };
        app.get('/api/v1/subscriptions/validate/:organizationId/:module',
            authenticateMiddleware([{"jwt":[]}]),
            ...(fetchMiddlewares<RequestHandler>(SubscriptionController)),
            ...(fetchMiddlewares<RequestHandler>(SubscriptionController.prototype.validateSubscription)),

            async function SubscriptionController_validateSubscription(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsSubscriptionController_validateSubscription, request, response });

                const controller = new SubscriptionController();

              await templateService.apiHandler({
                methodName: 'validateSubscription',
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
        const argsPlanController_getAll: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/api/v1/plans',
            authenticateMiddleware([{"jwt":["master"]}]),
            ...(fetchMiddlewares<RequestHandler>(PlanController)),
            ...(fetchMiddlewares<RequestHandler>(PlanController.prototype.getAll)),

            async function PlanController_getAll(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsPlanController_getAll, request, response });

                const controller = new PlanController();

              await templateService.apiHandler({
                methodName: 'getAll',
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
        const argsPlanController_getById: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.get('/api/v1/plans/:id',
            authenticateMiddleware([{"jwt":["master"]}]),
            ...(fetchMiddlewares<RequestHandler>(PlanController)),
            ...(fetchMiddlewares<RequestHandler>(PlanController.prototype.getById)),

            async function PlanController_getById(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsPlanController_getById, request, response });

                const controller = new PlanController();

              await templateService.apiHandler({
                methodName: 'getById',
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
        const argsPlanController_create: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"ref":"Plan"},
        };
        app.post('/api/v1/plans',
            authenticateMiddleware([{"jwt":["master"]}]),
            ...(fetchMiddlewares<RequestHandler>(PlanController)),
            ...(fetchMiddlewares<RequestHandler>(PlanController.prototype.create)),

            async function PlanController_create(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsPlanController_create, request, response });

                const controller = new PlanController();

              await templateService.apiHandler({
                methodName: 'create',
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
        const argsPlanController_update: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
                body: {"in":"body","name":"body","required":true,"ref":"Partial_Plan_"},
        };
        app.put('/api/v1/plans/:id',
            authenticateMiddleware([{"jwt":["master"]}]),
            ...(fetchMiddlewares<RequestHandler>(PlanController)),
            ...(fetchMiddlewares<RequestHandler>(PlanController.prototype.update)),

            async function PlanController_update(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsPlanController_update, request, response });

                const controller = new PlanController();

              await templateService.apiHandler({
                methodName: 'update',
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
        const argsPlanController_delete: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.delete('/api/v1/plans/:id',
            authenticateMiddleware([{"jwt":["master"]}]),
            ...(fetchMiddlewares<RequestHandler>(PlanController)),
            ...(fetchMiddlewares<RequestHandler>(PlanController.prototype.delete)),

            async function PlanController_delete(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsPlanController_delete, request, response });

                const controller = new PlanController();

              await templateService.apiHandler({
                methodName: 'delete',
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
        const argsOrganizationController_getAll: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/api/v1/organizations',
            authenticateMiddleware([{"jwt":[]}]),
            ...(fetchMiddlewares<RequestHandler>(OrganizationController)),
            ...(fetchMiddlewares<RequestHandler>(OrganizationController.prototype.getAll)),

            async function OrganizationController_getAll(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsOrganizationController_getAll, request, response });

                const controller = new OrganizationController();

              await templateService.apiHandler({
                methodName: 'getAll',
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
        const argsOrganizationController_getById: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.get('/api/v1/organizations/:id',
            authenticateMiddleware([{"jwt":[]}]),
            ...(fetchMiddlewares<RequestHandler>(OrganizationController)),
            ...(fetchMiddlewares<RequestHandler>(OrganizationController.prototype.getById)),

            async function OrganizationController_getById(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsOrganizationController_getById, request, response });

                const controller = new OrganizationController();

              await templateService.apiHandler({
                methodName: 'getById',
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
        const argsOrganizationController_getCustomersByCompany: Record<string, TsoaRoute.ParameterSchema> = {
                companyId: {"in":"path","name":"companyId","required":true,"dataType":"string"},
        };
        app.get('/api/v1/organizations/company/:companyId/customers',
            authenticateMiddleware([{"jwt":[]}]),
            ...(fetchMiddlewares<RequestHandler>(OrganizationController)),
            ...(fetchMiddlewares<RequestHandler>(OrganizationController.prototype.getCustomersByCompany)),

            async function OrganizationController_getCustomersByCompany(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsOrganizationController_getCustomersByCompany, request, response });

                const controller = new OrganizationController();

              await templateService.apiHandler({
                methodName: 'getCustomersByCompany',
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
        const argsOrganizationController_create: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"ref":"Organization"},
        };
        app.post('/api/v1/organizations',
            authenticateMiddleware([{"jwt":["admin"]}]),
            ...(fetchMiddlewares<RequestHandler>(OrganizationController)),
            ...(fetchMiddlewares<RequestHandler>(OrganizationController.prototype.create)),

            async function OrganizationController_create(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsOrganizationController_create, request, response });

                const controller = new OrganizationController();

              await templateService.apiHandler({
                methodName: 'create',
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
        const argsOrganizationController_update: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
                body: {"in":"body","name":"body","required":true,"ref":"Partial_Organization_"},
        };
        app.put('/api/v1/organizations/:id',
            authenticateMiddleware([{"jwt":["admin"]}]),
            ...(fetchMiddlewares<RequestHandler>(OrganizationController)),
            ...(fetchMiddlewares<RequestHandler>(OrganizationController.prototype.update)),

            async function OrganizationController_update(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsOrganizationController_update, request, response });

                const controller = new OrganizationController();

              await templateService.apiHandler({
                methodName: 'update',
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
        const argsOrganizationController_delete: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.delete('/api/v1/organizations/:id',
            authenticateMiddleware([{"jwt":["master"]}]),
            ...(fetchMiddlewares<RequestHandler>(OrganizationController)),
            ...(fetchMiddlewares<RequestHandler>(OrganizationController.prototype.delete)),

            async function OrganizationController_delete(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsOrganizationController_delete, request, response });

                const controller = new OrganizationController();

              await templateService.apiHandler({
                methodName: 'delete',
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
                req: {"in":"request","name":"req","required":true,"dataType":"object"},
        };
        app.get('/api/v1/machines',
            authenticateMiddleware([{"jwt":[]}]),
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
        app.get('/api/v1/machines/:id',
            authenticateMiddleware([{"jwt":[]}]),
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
        app.get('/api/v1/machines/by-machine-id/:machineId',
            authenticateMiddleware([{"jwt":[]}]),
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
        app.post('/api/v1/machines',
            authenticateMiddleware([{"jwt":[]}]),
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
                body: {"in":"body","name":"body","required":true,"ref":"Machine"},
        };
        app.put('/api/v1/machines/:id',
            authenticateMiddleware([{"jwt":[]}]),
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
        app.delete('/api/v1/machines/:id',
            authenticateMiddleware([{"jwt":[]}]),
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
        const argsLanguageController_getAll: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/api/v1/languages',
            authenticateMiddleware([{"jwt":["master"]}]),
            ...(fetchMiddlewares<RequestHandler>(LanguageController)),
            ...(fetchMiddlewares<RequestHandler>(LanguageController.prototype.getAll)),

            async function LanguageController_getAll(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsLanguageController_getAll, request, response });

                const controller = new LanguageController();

              await templateService.apiHandler({
                methodName: 'getAll',
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
        const argsLanguageController_getById: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.get('/api/v1/languages/:id',
            authenticateMiddleware([{"jwt":["master"]}]),
            ...(fetchMiddlewares<RequestHandler>(LanguageController)),
            ...(fetchMiddlewares<RequestHandler>(LanguageController.prototype.getById)),

            async function LanguageController_getById(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsLanguageController_getById, request, response });

                const controller = new LanguageController();

              await templateService.apiHandler({
                methodName: 'getById',
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
        const argsLanguageController_create: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"ref":"Language"},
        };
        app.post('/api/v1/languages',
            authenticateMiddleware([{"jwt":["master"]}]),
            ...(fetchMiddlewares<RequestHandler>(LanguageController)),
            ...(fetchMiddlewares<RequestHandler>(LanguageController.prototype.create)),

            async function LanguageController_create(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsLanguageController_create, request, response });

                const controller = new LanguageController();

              await templateService.apiHandler({
                methodName: 'create',
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
        const argsLanguageController_update: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
                body: {"in":"body","name":"body","required":true,"ref":"Partial_Language_"},
        };
        app.put('/api/v1/languages/:id',
            authenticateMiddleware([{"jwt":["master"]}]),
            ...(fetchMiddlewares<RequestHandler>(LanguageController)),
            ...(fetchMiddlewares<RequestHandler>(LanguageController.prototype.update)),

            async function LanguageController_update(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsLanguageController_update, request, response });

                const controller = new LanguageController();

              await templateService.apiHandler({
                methodName: 'update',
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
        const argsLanguageController_delete: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.delete('/api/v1/languages/:id',
            authenticateMiddleware([{"jwt":["master"]}]),
            ...(fetchMiddlewares<RequestHandler>(LanguageController)),
            ...(fetchMiddlewares<RequestHandler>(LanguageController.prototype.delete)),

            async function LanguageController_delete(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsLanguageController_delete, request, response });

                const controller = new LanguageController();

              await templateService.apiHandler({
                methodName: 'delete',
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
        const argsLabelController_getAll: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/api/v1/labels',
            authenticateMiddleware([{"jwt":["master"]}]),
            ...(fetchMiddlewares<RequestHandler>(LabelController)),
            ...(fetchMiddlewares<RequestHandler>(LabelController.prototype.getAll)),

            async function LabelController_getAll(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsLabelController_getAll, request, response });

                const controller = new LabelController();

              await templateService.apiHandler({
                methodName: 'getAll',
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
        const argsLabelController_getById: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.get('/api/v1/labels/:id',
            authenticateMiddleware([{"jwt":["master"]}]),
            ...(fetchMiddlewares<RequestHandler>(LabelController)),
            ...(fetchMiddlewares<RequestHandler>(LabelController.prototype.getById)),

            async function LabelController_getById(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsLabelController_getById, request, response });

                const controller = new LabelController();

              await templateService.apiHandler({
                methodName: 'getById',
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
        const argsLabelController_create: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"ref":"Label"},
        };
        app.post('/api/v1/labels',
            authenticateMiddleware([{"jwt":["master"]}]),
            ...(fetchMiddlewares<RequestHandler>(LabelController)),
            ...(fetchMiddlewares<RequestHandler>(LabelController.prototype.create)),

            async function LabelController_create(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsLabelController_create, request, response });

                const controller = new LabelController();

              await templateService.apiHandler({
                methodName: 'create',
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
        const argsLabelController_createBatch: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"ref":"BatchLabelRequest"},
        };
        app.post('/api/v1/labels/batch',
            authenticateMiddleware([{"jwt":["master"]}]),
            ...(fetchMiddlewares<RequestHandler>(LabelController)),
            ...(fetchMiddlewares<RequestHandler>(LabelController.prototype.createBatch)),

            async function LabelController_createBatch(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsLabelController_createBatch, request, response });

                const controller = new LabelController();

              await templateService.apiHandler({
                methodName: 'createBatch',
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
        const argsLabelController_update: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
                body: {"in":"body","name":"body","required":true,"ref":"Partial_Label_"},
        };
        app.put('/api/v1/labels/:id',
            authenticateMiddleware([{"jwt":["master"]}]),
            ...(fetchMiddlewares<RequestHandler>(LabelController)),
            ...(fetchMiddlewares<RequestHandler>(LabelController.prototype.update)),

            async function LabelController_update(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsLabelController_update, request, response });

                const controller = new LabelController();

              await templateService.apiHandler({
                methodName: 'update',
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
        const argsLabelController_upsertBatch: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"ref":"BatchLabelUpsertRequest"},
        };
        app.put('/api/v1/labels/batch',
            authenticateMiddleware([{"jwt":["master"]}]),
            ...(fetchMiddlewares<RequestHandler>(LabelController)),
            ...(fetchMiddlewares<RequestHandler>(LabelController.prototype.upsertBatch)),

            async function LabelController_upsertBatch(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsLabelController_upsertBatch, request, response });

                const controller = new LabelController();

              await templateService.apiHandler({
                methodName: 'upsertBatch',
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
        const argsLabelController_delete: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.delete('/api/v1/labels/:id',
            authenticateMiddleware([{"jwt":["master"]}]),
            ...(fetchMiddlewares<RequestHandler>(LabelController)),
            ...(fetchMiddlewares<RequestHandler>(LabelController.prototype.delete)),

            async function LabelController_delete(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsLabelController_delete, request, response });

                const controller = new LabelController();

              await templateService.apiHandler({
                methodName: 'delete',
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
        const argsCustomFieldController_getAll: Record<string, TsoaRoute.ParameterSchema> = {
                organizationId: {"in":"query","name":"organizationId","dataType":"string"},
        };
        app.get('/api/v1/custom-fields',
            authenticateMiddleware([{"jwt":["admin"]}]),
            ...(fetchMiddlewares<RequestHandler>(CustomFieldController)),
            ...(fetchMiddlewares<RequestHandler>(CustomFieldController.prototype.getAll)),

            async function CustomFieldController_getAll(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsCustomFieldController_getAll, request, response });

                const controller = new CustomFieldController();

              await templateService.apiHandler({
                methodName: 'getAll',
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
        const argsCustomFieldController_getById: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.get('/api/v1/custom-fields/:id',
            authenticateMiddleware([{"jwt":[]}]),
            ...(fetchMiddlewares<RequestHandler>(CustomFieldController)),
            ...(fetchMiddlewares<RequestHandler>(CustomFieldController.prototype.getById)),

            async function CustomFieldController_getById(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsCustomFieldController_getById, request, response });

                const controller = new CustomFieldController();

              await templateService.apiHandler({
                methodName: 'getById',
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
        const argsCustomFieldController_getByTarget: Record<string, TsoaRoute.ParameterSchema> = {
                targetCollection: {"in":"path","name":"targetCollection","required":true,"dataType":"string"},
                organizationId: {"in":"query","name":"organizationId","dataType":"string"},
        };
        app.get('/api/v1/custom-fields/target/:targetCollection',
            authenticateMiddleware([{"jwt":[]}]),
            ...(fetchMiddlewares<RequestHandler>(CustomFieldController)),
            ...(fetchMiddlewares<RequestHandler>(CustomFieldController.prototype.getByTarget)),

            async function CustomFieldController_getByTarget(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsCustomFieldController_getByTarget, request, response });

                const controller = new CustomFieldController();

              await templateService.apiHandler({
                methodName: 'getByTarget',
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
        const argsCustomFieldController_create: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"ref":"CustomField"},
        };
        app.post('/api/v1/custom-fields',
            authenticateMiddleware([{"jwt":["admin"]}]),
            ...(fetchMiddlewares<RequestHandler>(CustomFieldController)),
            ...(fetchMiddlewares<RequestHandler>(CustomFieldController.prototype.create)),

            async function CustomFieldController_create(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsCustomFieldController_create, request, response });

                const controller = new CustomFieldController();

              await templateService.apiHandler({
                methodName: 'create',
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
        const argsCustomFieldController_update: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
                body: {"in":"body","name":"body","required":true,"ref":"Partial_CustomField_"},
        };
        app.put('/api/v1/custom-fields/:id',
            authenticateMiddleware([{"jwt":["admin"]}]),
            ...(fetchMiddlewares<RequestHandler>(CustomFieldController)),
            ...(fetchMiddlewares<RequestHandler>(CustomFieldController.prototype.update)),

            async function CustomFieldController_update(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsCustomFieldController_update, request, response });

                const controller = new CustomFieldController();

              await templateService.apiHandler({
                methodName: 'update',
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
        const argsCustomFieldController_delete: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.delete('/api/v1/custom-fields/:id',
            authenticateMiddleware([{"jwt":["admin"]}]),
            ...(fetchMiddlewares<RequestHandler>(CustomFieldController)),
            ...(fetchMiddlewares<RequestHandler>(CustomFieldController.prototype.delete)),

            async function CustomFieldController_delete(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsCustomFieldController_delete, request, response });

                const controller = new CustomFieldController();

              await templateService.apiHandler({
                methodName: 'delete',
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
        const argsCustomFieldController_getValues: Record<string, TsoaRoute.ParameterSchema> = {
                targetCollection: {"in":"path","name":"targetCollection","required":true,"dataType":"string"},
                targetDocumentId: {"in":"path","name":"targetDocumentId","required":true,"dataType":"string"},
        };
        app.get('/api/v1/custom-fields/values/:targetCollection/:targetDocumentId',
            authenticateMiddleware([{"jwt":[]}]),
            ...(fetchMiddlewares<RequestHandler>(CustomFieldController)),
            ...(fetchMiddlewares<RequestHandler>(CustomFieldController.prototype.getValues)),

            async function CustomFieldController_getValues(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsCustomFieldController_getValues, request, response });

                const controller = new CustomFieldController();

              await templateService.apiHandler({
                methodName: 'getValues',
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
        const argsCustomFieldController_setValue: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"ref":"CustomFieldValue"},
        };
        app.post('/api/v1/custom-fields/values',
            authenticateMiddleware([{"jwt":[]}]),
            ...(fetchMiddlewares<RequestHandler>(CustomFieldController)),
            ...(fetchMiddlewares<RequestHandler>(CustomFieldController.prototype.setValue)),

            async function CustomFieldController_setValue(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsCustomFieldController_setValue, request, response });

                const controller = new CustomFieldController();

              await templateService.apiHandler({
                methodName: 'setValue',
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
        const argsCustomFieldController_setValues: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"dataType":"array","array":{"dataType":"refObject","ref":"CustomFieldValue"}},
        };
        app.post('/api/v1/custom-fields/values/batch',
            authenticateMiddleware([{"jwt":[]}]),
            ...(fetchMiddlewares<RequestHandler>(CustomFieldController)),
            ...(fetchMiddlewares<RequestHandler>(CustomFieldController.prototype.setValues)),

            async function CustomFieldController_setValues(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsCustomFieldController_setValues, request, response });

                const controller = new CustomFieldController();

              await templateService.apiHandler({
                methodName: 'setValues',
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
        const argsCustomFieldController_deleteValue: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.delete('/api/v1/custom-fields/values/:id',
            authenticateMiddleware([{"jwt":[]}]),
            ...(fetchMiddlewares<RequestHandler>(CustomFieldController)),
            ...(fetchMiddlewares<RequestHandler>(CustomFieldController.prototype.deleteValue)),

            async function CustomFieldController_deleteValue(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsCustomFieldController_deleteValue, request, response });

                const controller = new CustomFieldController();

              await templateService.apiHandler({
                methodName: 'deleteValue',
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
        const argsSystemConfigController_get: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/api/v1/config',
            authenticateMiddleware([{"jwt":["master"]}]),
            ...(fetchMiddlewares<RequestHandler>(SystemConfigController)),
            ...(fetchMiddlewares<RequestHandler>(SystemConfigController.prototype.get)),

            async function SystemConfigController_get(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsSystemConfigController_get, request, response });

                const controller = new SystemConfigController();

              await templateService.apiHandler({
                methodName: 'get',
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
        const argsSystemConfigController_upsert: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"ref":"Partial_SystemConfig_"},
        };
        app.put('/api/v1/config',
            authenticateMiddleware([{"jwt":["master"]}]),
            ...(fetchMiddlewares<RequestHandler>(SystemConfigController)),
            ...(fetchMiddlewares<RequestHandler>(SystemConfigController.prototype.upsert)),

            async function SystemConfigController_upsert(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsSystemConfigController_upsert, request, response });

                const controller = new SystemConfigController();

              await templateService.apiHandler({
                methodName: 'upsert',
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
        const argsAccessLevelController_getAll: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/api/v1/access-levels',
            authenticateMiddleware([{"jwt":["master"]}]),
            ...(fetchMiddlewares<RequestHandler>(AccessLevelController)),
            ...(fetchMiddlewares<RequestHandler>(AccessLevelController.prototype.getAll)),

            async function AccessLevelController_getAll(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAccessLevelController_getAll, request, response });

                const controller = new AccessLevelController();

              await templateService.apiHandler({
                methodName: 'getAll',
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
        const argsAccessLevelController_getById: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.get('/api/v1/access-levels/:id',
            authenticateMiddleware([{"jwt":["master"]}]),
            ...(fetchMiddlewares<RequestHandler>(AccessLevelController)),
            ...(fetchMiddlewares<RequestHandler>(AccessLevelController.prototype.getById)),

            async function AccessLevelController_getById(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAccessLevelController_getById, request, response });

                const controller = new AccessLevelController();

              await templateService.apiHandler({
                methodName: 'getById',
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
        const argsAccessLevelController_create: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"ref":"AccessLevel"},
        };
        app.post('/api/v1/access-levels',
            authenticateMiddleware([{"jwt":["master"]}]),
            ...(fetchMiddlewares<RequestHandler>(AccessLevelController)),
            ...(fetchMiddlewares<RequestHandler>(AccessLevelController.prototype.create)),

            async function AccessLevelController_create(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAccessLevelController_create, request, response });

                const controller = new AccessLevelController();

              await templateService.apiHandler({
                methodName: 'create',
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
        const argsAccessLevelController_update: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
                body: {"in":"body","name":"body","required":true,"ref":"Partial_AccessLevel_"},
        };
        app.put('/api/v1/access-levels/:id',
            authenticateMiddleware([{"jwt":["master"]}]),
            ...(fetchMiddlewares<RequestHandler>(AccessLevelController)),
            ...(fetchMiddlewares<RequestHandler>(AccessLevelController.prototype.update)),

            async function AccessLevelController_update(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAccessLevelController_update, request, response });

                const controller = new AccessLevelController();

              await templateService.apiHandler({
                methodName: 'update',
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
        const argsAccessLevelController_delete: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.delete('/api/v1/access-levels/:id',
            authenticateMiddleware([{"jwt":["master"]}]),
            ...(fetchMiddlewares<RequestHandler>(AccessLevelController)),
            ...(fetchMiddlewares<RequestHandler>(AccessLevelController.prototype.delete)),

            async function AccessLevelController_delete(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAccessLevelController_delete, request, response });

                const controller = new AccessLevelController();

              await templateService.apiHandler({
                methodName: 'delete',
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
