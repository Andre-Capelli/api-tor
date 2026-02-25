import { ModificationSchema } from "../../core/schemas/Default";
import { IModification } from "../../core/types/Default";
import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcrypt";

export interface User extends IModification {
  name: string;
  email: string;
  password: string;
  isActive?: boolean;
  organizationId?: string;
  accessLevelId?: string;
}

export interface IUser extends User {
  id?: string;
}

export interface IUserDB extends User, Document {
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const UserSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      select: false, // Don't include password in queries by default
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    organizationId: {
      type: Schema.Types.ObjectId,
      ref: "Organization",
      default: null,
      index: true,
    },
    accessLevelId: {
      type: Schema.Types.ObjectId,
      ref: "AccessLevel",
      default: null,
    },
    ...ModificationSchema,
  },
  { timestamps: true }
);

// Hash password before saving
UserSchema.pre<IUserDB>("save", async function (next) {
  // Only hash the password if it has been modified (or is new)
  if (!this.isModified("password")) {
    return next();
  }

  try {
    // Generate salt and hash password
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error: any) {
    next(error);
  }
});

// Method to compare passwords
UserSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model<IUserDB>("User", UserSchema);
