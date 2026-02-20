import { Schema, model, Document } from "mongoose";
import { ModificationSchema, IModification } from "../../../app/core";

// CPU Core interface
export interface CpuCore {
  coreId: number;
  temperature: number;
  load: number;
}

// CPU Information interface
export interface CpuInformation {
  machineId: string;
  timestamp: Date;
  name: string;
  temperature: number;
  load: number;
  power: number;
  cores: CpuCore[];
}

// CPU Information with database ID
export interface ICpuInformation extends CpuInformation {
  id?: string;
}

// CPU Information Mongoose Document
export interface ICpuInformationDB extends Document, CpuInformation, IModification {}

// CPU Core Schema
const CpuCoreSchema = new Schema<CpuCore>(
  {
    coreId: {
      type: Number,
      required: true,
    },
    temperature: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  { _id: false }
);

// CPU Information Schema
const CpuInformationSchema = new Schema<ICpuInformationDB>(
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
    temperature: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
    power: {
      type: Number,
      required: true,
    },
    cores: {
      type: [CpuCoreSchema],
      required: true,
    },
  },
  { timestamps: true }
);

// Add modification tracking
CpuInformationSchema.add(ModificationSchema);

// Compound index for efficient queries
CpuInformationSchema.index({ machineId: 1, timestamp: -1 });

const CpuInformationDB = model<ICpuInformationDB>("CpuInformation", CpuInformationSchema);

export default CpuInformationDB;
