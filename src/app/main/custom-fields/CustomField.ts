import { Schema, model, Document } from "mongoose";
import { ModificationSchema, IModification } from "../../core";

export interface CustomField {
  targetCollection: string;
  fieldName: string;
  fieldType: string;
  required?: boolean;
  defaultValue?: any;
  options?: string[];
  description?: string;
  organizationId?: string;
  isActive?: boolean;
}

export interface ICustomField extends CustomField {
  id?: string;
}

export interface ICustomFieldDB extends Document, CustomField, IModification {}

const CustomFieldSchema = new Schema<ICustomFieldDB>(
  {
    targetCollection: {
      type: String,
      required: true,
      index: true,
    },
    fieldName: {
      type: String,
      required: true,
      trim: true,
    },
    fieldType: {
      type: String,
      required: true,
      enum: ["string", "number", "boolean", "date", "select"],
    },
    required: {
      type: Boolean,
      default: false,
    },
    defaultValue: {
      type: Schema.Types.Mixed,
    },
    options: {
      type: [String],
    },
    description: {
      type: String,
    },
    organizationId: {
      type: Schema.Types.ObjectId,
      ref: "Organization",
      default: null,
      index: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    ...ModificationSchema,
  },
  { timestamps: true }
);

CustomFieldSchema.index(
  { targetCollection: 1, fieldName: 1, organizationId: 1 },
  { unique: true }
);

const CustomFieldDB = model<ICustomFieldDB>("CustomField", CustomFieldSchema);

export default CustomFieldDB;
