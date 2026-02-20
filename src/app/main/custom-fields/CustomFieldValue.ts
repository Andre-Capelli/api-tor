import { Schema, model, Document } from "mongoose";
import { ModificationSchema, IModification } from "../../core";

export interface CustomFieldValue {
  customFieldId: string;
  targetCollection: string;
  targetDocumentId: string;
  fieldName: string;
  value: any;
}

export interface ICustomFieldValue extends CustomFieldValue {
  id?: string;
}

export interface ICustomFieldValueDB extends Document, CustomFieldValue, IModification {}

const CustomFieldValueSchema = new Schema(
  {
    customFieldId: {
      type: Schema.Types.ObjectId,
      ref: "CustomField",
      required: true,
      index: true,
    },
    targetCollection: {
      type: String,
      required: true,
    },
    targetDocumentId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    fieldName: {
      type: String,
      required: true,
    },
    value: {
      type: Schema.Types.Mixed,
      required: true,
    },
    ...ModificationSchema,
  },
  { timestamps: true }
);

CustomFieldValueSchema.index(
  { targetDocumentId: 1, customFieldId: 1 },
  { unique: true }
);

CustomFieldValueSchema.index({ targetCollection: 1, targetDocumentId: 1 });

const CustomFieldValueDB = model<ICustomFieldValueDB>("CustomFieldValue", CustomFieldValueSchema);

export default CustomFieldValueDB;
