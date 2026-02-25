import { Schema, model, Document } from "mongoose";
import { ModificationSchema, IModification } from "../../core";

export interface Label {
  key: string;
  translations: Record<string, string>;
}

export interface ILabel extends Label {
  id?: string;
}

export interface ILabelDB extends Document, Label, IModification {}

const LabelSchema = new Schema<ILabelDB>(
  {
    key: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    translations: {
      type: Schema.Types.Mixed,
      required: true,
      default: {},
    },
    ...ModificationSchema,
  },
  { timestamps: true }
);

const LabelDB = model<ILabelDB>("Label", LabelSchema);

export default LabelDB;
