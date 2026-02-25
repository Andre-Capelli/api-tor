import { Schema, model, Document } from "mongoose";
import { ModificationSchema, IModification } from "../../core";

export interface SystemConfig {
  siteName: Record<string, string>;
  siteDescription: Record<string, string>;
  logo: string;
  logoDark: string;
  favicon: string;
  footerText: Record<string, string>;
  theme: Record<string, any>;
  metadata: Record<string, any>;
}

export interface ISystemConfig extends SystemConfig {
  id?: string;
}

export interface ISystemConfigDB extends Document, SystemConfig, IModification {}

const SystemConfigSchema = new Schema<ISystemConfigDB>(
  {
    siteName: { type: Schema.Types.Mixed, default: {} },
    siteDescription: { type: Schema.Types.Mixed, default: {} },
    logo: { type: String, default: "" },
    logoDark: { type: String, default: "" },
    favicon: { type: String, default: "" },
    footerText: { type: Schema.Types.Mixed, default: {} },
    theme: { type: Schema.Types.Mixed, default: {} },
    metadata: { type: Schema.Types.Mixed, default: {} },
    ...ModificationSchema,
  },
  { timestamps: true }
);

const SystemConfigDB = model<ISystemConfigDB>("SystemConfig", SystemConfigSchema);

export default SystemConfigDB;
