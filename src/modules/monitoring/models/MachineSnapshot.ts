import { Schema, Document } from "mongoose";
import { modConnection } from "../../../app/configs/mongodb/config";
import { ModificationSchema, IModification } from "../../../app/core";

// This model represents a complete snapshot of machine data at a specific timestamp
// It aggregates all monitoring information in a single document for easier querying

export interface MachineSnapshot {
  machineId: string;
  timestamp: Date;
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
}

// MachineSnapshot with database ID
export interface IMachineSnapshot extends MachineSnapshot {
  id?: string;
}

// MachineSnapshot Mongoose Document
export interface IMachineSnapshotDB extends Document, MachineSnapshot, IModification {}

// MachineSnapshot Schema
const MachineSnapshotSchema = new Schema<IMachineSnapshotDB>(
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
    operatingSystem: {
      type: String,
      required: true,
    },
    operatingSystemVersion: {
      type: String,
      required: true,
    },
    operatingSystemArchitecture: {
      type: String,
      required: true,
    },
    operatingSystemDescription: {
      type: String,
      required: true,
    },
    computerName: {
      type: String,
      required: true,
    },
    domainName: {
      type: String,
    },
    workgroup: {
      type: String,
    },
    updatesPending: {
      type: Boolean,
      required: true,
    },
    uptimeSeconds: {
      type: Number,
      required: true,
    },
    loggedInUser: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Add modification tracking
MachineSnapshotSchema.add(ModificationSchema);

// Compound index for efficient queries
MachineSnapshotSchema.index({ machineId: 1, timestamp: -1 });

const MachineSnapshotDB = modConnection.model<IMachineSnapshotDB>("MachineSnapshot", MachineSnapshotSchema);

export default MachineSnapshotDB;
