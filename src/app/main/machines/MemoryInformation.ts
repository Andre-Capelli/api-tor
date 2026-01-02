import { Schema, model, Document } from "mongoose";
import { ModificationSchema, IModification } from "../../core";

// Memory Information interface
export interface MemoryInformation {
  machineId: string;
  timestamp: Date;
  usedMemoryGB: number;
  availableMemoryGB: number;
  totalMemoryGB: number;
  usagePercentage: number;
}

// Memory Information with database ID
export interface IMemoryInformation extends MemoryInformation {
  id: string;
}

// Memory Information Mongoose Document
export interface IMemoryInformationDB extends Document, MemoryInformation, IModification {}

// Memory Information Schema
const MemoryInformationSchema = new Schema<IMemoryInformationDB>(
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
    usedMemoryGB: {
      type: Number,
      required: true,
    },
    availableMemoryGB: {
      type: Number,
      required: true,
    },
    totalMemoryGB: {
      type: Number,
      required: true,
    },
    usagePercentage: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

// Add modification tracking
MemoryInformationSchema.add(ModificationSchema);

// Compound index for efficient queries
MemoryInformationSchema.index({ machineId: 1, timestamp: -1 });

const MemoryInformationDB = model<IMemoryInformationDB>("MemoryInformation", MemoryInformationSchema);

export default MemoryInformationDB;
