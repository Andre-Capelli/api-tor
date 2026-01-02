import { Schema, model, Document } from "mongoose";
import { ModificationSchema, IModification } from "../../core";

// Antivirus Information interface
export interface AntivirusInformation {
  machineId: string;
  timestamp: Date;
  name: string;
  enabled: boolean;
  lastQuickScan?: Date | null;
  lastFullScan?: Date | null;
  hasThreats?: boolean | null;
}

// Antivirus Information with database ID
export interface IAntivirusInformation extends AntivirusInformation {
  id: string;
}

// Antivirus Information Mongoose Document
export interface IAntivirusInformationDB extends Document, AntivirusInformation, IModification {}

// Antivirus Information Schema
const AntivirusInformationSchema = new Schema<IAntivirusInformationDB>(
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
    enabled: {
      type: Boolean,
      required: true,
    },
    lastQuickScan: {
      type: Date,
      default: null,
    },
    lastFullScan: {
      type: Date,
      default: null,
    },
    hasThreats: {
      type: Boolean,
      default: null,
    },
  },
  { timestamps: true }
);

// Add modification tracking
AntivirusInformationSchema.add(ModificationSchema);

// Compound index for efficient queries
AntivirusInformationSchema.index({ machineId: 1, timestamp: -1 });

const AntivirusInformationDB = model<IAntivirusInformationDB>("AntivirusInformation", AntivirusInformationSchema);

export default AntivirusInformationDB;
