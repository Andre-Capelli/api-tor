import { Schema, Document } from "mongoose";
import { modConnection } from "../../../app/configs/mongodb/config";
import { ModificationSchema, IModification } from "../../../app/core";

// Disk interface
export interface Disk {
  index: number;
  model: string;
  serialNumber: string;
  firmwareRevision: string;
  sizeBytes: number;
  temperature: number;
  status: string;
  lastErrorCode?: string | null;
  errorCleared?: string | null;
  errorDescription?: string | null;
  errorMethodology?: string | null;
}

// Partition interface
export interface Partition {
  diskIndex: number;
  index: number;
  bootable: boolean;
  primaryPartition: boolean;
  volumeName: string;
  sizeBytes: number;
  freeSpaceBytes: number;
  usagePercentage: number;
  volumeLetter?: string | null;
  fileSystem?: string | null;
}

// Storage Information interface
export interface StorageInformation {
  machineId: string;
  timestamp: Date;
  disks: Disk[];
  partitions: Partition[];
}

// Storage Information with database ID
export interface IStorageInformation extends StorageInformation {
  id?: string;
}

// Storage Information Mongoose Document
export interface IStorageInformationDB extends Document, StorageInformation, IModification {}

// Disk Schema
const DiskSchema = new Schema<Disk>(
  {
    index: {
      type: Number,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    serialNumber: {
      type: String,
      required: true,
    },
    firmwareRevision: {
      type: String,
      required: true,
    },
    sizeBytes: {
      type: Number,
      required: true,
    },
    temperature: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    lastErrorCode: {
      type: String,
      default: null,
    },
    errorCleared: {
      type: String,
      default: null,
    },
    errorDescription: {
      type: String,
      default: null,
    },
    errorMethodology: {
      type: String,
      default: null,
    },
  },
  { _id: false }
);

// Partition Schema
const PartitionSchema = new Schema<Partition>(
  {
    diskIndex: {
      type: Number,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    bootable: {
      type: Boolean,
      required: true,
    },
    primaryPartition: {
      type: Boolean,
      required: true,
    },
    volumeName: {
      type: String,
      required: true,
    },
    sizeBytes: {
      type: Number,
      required: true,
    },
    freeSpaceBytes: {
      type: Number,
      required: true,
    },
    usagePercentage: {
      type: Number,
      required: true,
    },
    volumeLetter: {
      type: String,
      default: null,
    },
    fileSystem: {
      type: String,
      default: null,
    },
  },
  { _id: false }
);

// Storage Information Schema
const StorageInformationSchema = new Schema<IStorageInformationDB>(
  {
    machineId: {
      type: String,
      required: true,
      index: true,
    },
    timestamp: {
      type: Date,
      required: true,
      default: Date.now,
      index: true,
    },
    disks: {
      type: [DiskSchema],
      required: true,
    },
    partitions: {
      type: [PartitionSchema],
      required: true,
    },
  },
  { timestamps: true }
);

// Add modification tracking
StorageInformationSchema.add(ModificationSchema);

// Compound index for efficient queries
StorageInformationSchema.index({ machineId: 1, timestamp: -1 });

const StorageInformationDB = modConnection.model<IStorageInformationDB>("StorageInformation", StorageInformationSchema);

export default StorageInformationDB;
