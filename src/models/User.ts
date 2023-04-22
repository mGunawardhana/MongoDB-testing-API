import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  email: String;
  password: String;
}

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
); //timestamp true kare apita ewage updated date ekak tyaganna ppuluwan nisa

export const User = model<IUser>("User", UserSchema);
