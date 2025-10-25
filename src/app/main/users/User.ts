import { ModificationSchema } from "../../core/schemas/Default";
import { IModification } from "../../core/types/Default";
// import { ModificationSchema } from "@core/schemas";
// import { IModification } from "@core/types";
import mongoose, { Document, Schema } from "mongoose";

export interface User extends IModification {
  name: string;
  email: string;
}

export interface IUser extends User {
  id: string;
}

export interface IUserDB extends User, Document {}

const UserSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  ...ModificationSchema,
});

export default mongoose.model<IUserDB>("User", UserSchema);
