import { Schema, model, Document } from "mongoose";
import { ModificationSchema, IModification } from "../../core";

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  isAvailable: boolean;
  isDefault: boolean;
  isActive: boolean;
}

export interface ILanguage extends Language {
  id?: string;
}

export interface ILanguageDB extends Document, Language, IModification {}

const LanguageSchema = new Schema<ILanguageDB>(
  {
    code: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    nativeName: {
      type: String,
      required: true,
      trim: true,
    },
    isAvailable: {
      type: Boolean,
      default: false,
    },
    isDefault: {
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

const LanguageDB = model<ILanguageDB>("Language", LanguageSchema);

export default LanguageDB;
