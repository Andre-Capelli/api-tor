import { Schema, model, Document } from "mongoose";
import { ModificationSchema, IModification } from "../../core";

export interface Subscription {
  organizationId: string;
  planId: string;
  status?: string;
  startDate: Date;
  endDate: Date;
  autoRenew?: boolean;
}

export interface ISubscription extends Subscription {
  id?: string;
}

export interface ISubscriptionDB extends Document, Subscription, IModification {}

const SubscriptionSchema = new Schema(
  {
    organizationId: {
      type: Schema.Types.ObjectId,
      ref: "Organization",
      required: true,
      index: true,
    },
    planId: {
      type: Schema.Types.ObjectId,
      ref: "Plan",
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["active", "inactive", "suspended", "expired"],
      default: "active",
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    autoRenew: {
      type: Boolean,
      default: false,
    },
    ...ModificationSchema,
  },
  { timestamps: true }
);

SubscriptionSchema.index({ organizationId: 1, status: 1 });

const SubscriptionDB = model<ISubscriptionDB>("Subscription", SubscriptionSchema);

export default SubscriptionDB;
