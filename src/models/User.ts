import {Document, model, Schema} from "mongoose";

export interface IUser extends Document {
    email: string;
    password: string;
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

    //timestamp true kare apita ewage updated date ekak tyaganna ppuluwan nisa
    {timestamps: true}
);

export const User = model<IUser>("User", UserSchema);
