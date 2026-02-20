import { Schema, model, Document } from "mongoose";
import { ModificationSchema, IModification } from "../../core";

export interface Organization {
  name: string;
  type: string;
  parentId?: string;
  document?: string;
  email?: string;
  phone?: string;
  isActive?: boolean;
}

export interface IOrganization extends Organization {
  id?: string;
}

export interface IOrganizationDB extends Document, Organization, IModification {}

const OrganizationSchema = new Schema<IOrganizationDB>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["company", "customer"],
    },
    parentId: {
      type: Schema.Types.ObjectId,
      ref: "Organization",
      default: null,
      index: true,
    },
    document: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    ...ModificationSchema,
  },
  { timestamps: true }
);

OrganizationSchema.index({ type: 1 });

const OrganizationDB = model<IOrganizationDB>("Organization", OrganizationSchema);

export default OrganizationDB;
