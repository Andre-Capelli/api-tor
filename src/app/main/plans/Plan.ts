import { Schema, model, Document } from "mongoose";
import { ModificationSchema, IModification } from "../../core";

export type ModuleType = "cpu" | "memory" | "storage" | "network" | "antivirus";

export interface Plan {
  name: string;
  description?: string;
  maxMachines: number;
  allowedModules: ModuleType[];
  billingPeriod: string;
  price: number;
  isActive?: boolean;
}

export interface IPlan extends Plan {
  id?: string;
}

export interface IPlanDB extends Document, Plan, IModification {}

const PlanSchema = new Schema<IPlanDB>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
    },
    maxMachines: {
      type: Number,
      required: true,
      min: 1,
    },
    allowedModules: {
      type: [String],
      required: true,
      enum: ["cpu", "memory", "storage", "network", "antivirus"],
    },
    billingPeriod: {
      type: String,
      required: true,
      enum: ["monthly", "yearly"],
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    ...ModificationSchema,
  },
  { timestamps: true }
);

const PlanDB = model<IPlanDB>("Plan", PlanSchema);

export default PlanDB;
