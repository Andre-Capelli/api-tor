import { Schema, model, Document } from "mongoose";
import { ModificationSchema, IModification } from "../../../app/core";

// Network Information interface
export interface NetworkInformation {
  machineId: string;
  timestamp: Date;
  name: string;
  bytesSent: number;
  bytesReceived: number;
  type: string;
  status: string;
  speed: string;
  ipAddress: string;
}

// Network Information with database ID
export interface INetworkInformation extends NetworkInformation {
  id?: string;
}

// Network Information Mongoose Document
export interface INetworkInformationDB extends Document, NetworkInformation, IModification {}

// Network Information Schema
const NetworkInformationSchema = new Schema<INetworkInformationDB>(
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
    name: {
      type: String,
      required: true,
    },
    bytesSent: {
      type: Number,
      required: true,
    },
    bytesReceived: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    speed: {
      type: String,
      required: true,
    },
    ipAddress: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Add modification tracking
NetworkInformationSchema.add(ModificationSchema);

// Compound index for efficient queries
NetworkInformationSchema.index({ machineId: 1, timestamp: -1 });

const NetworkInformationDB = model<INetworkInformationDB>("NetworkInformation", NetworkInformationSchema);

export default NetworkInformationDB;
