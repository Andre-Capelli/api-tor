import { Schema, model, Document } from "mongoose";
import { ModificationSchema, IModification } from "../../core";

export interface AccessLevel {
  key: string;
  name: Record<string, string>;
  level: number;
  scope: string;
  description?: string;
  isSystem?: boolean;
  isActive?: boolean;
}

export interface IAccessLevel extends AccessLevel {
  id?: string;
}

export interface IAccessLevelDB extends Document, AccessLevel, IModification {}

const AccessLevelSchema = new Schema<IAccessLevelDB>(
  {
    key: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    name: {
      type: Schema.Types.Mixed,
      required: true,
    },
    level: {
      type: Number,
      required: true,
      unique: true,
    },
    scope: {
      type: String,
      required: true,
      enum: ["platform", "company"],
    },
    description: {
      type: String,
    },
    isSystem: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    ...ModificationSchema,
  },
  { timestamps: true }
);

const AccessLevelDB = model<IAccessLevelDB>("AccessLevel", AccessLevelSchema);

export default AccessLevelDB;
