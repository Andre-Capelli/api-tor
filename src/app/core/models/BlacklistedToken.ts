import { Schema, model, Document } from "mongoose";

export interface BlacklistedToken {
  jti: string;
  expiresAt: Date;
}

export interface IBlacklistedTokenDB extends Document, BlacklistedToken {}

const BlacklistedTokenSchema = new Schema<IBlacklistedTokenDB>({
  jti: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  expiresAt: {
    type: Date,
    required: true,
    index: { expires: 0 },
  },
});

const BlacklistedTokenDB = model<IBlacklistedTokenDB>("BlacklistedToken", BlacklistedTokenSchema);

export default BlacklistedTokenDB;
