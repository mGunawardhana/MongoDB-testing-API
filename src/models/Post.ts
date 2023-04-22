import { Schema, model, Document } from "mongoose";

export interface IPost extends Document {
  title: string;
  description: string;
  hoursCount: number;
  lecturerName: string;
  tags: string[];
}

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    hoursCount: {
      type: String,
      required: true,
    },
    lecturerName: {
      type: String,
      required: true,
    },
    tags: {
      type: String,
      required: true,
    },
  },

  //timestamp true kare apita ewage updated date ekak tyaganna ppuluwan nisa
  { timestamps: true }
);

export const User = model<IPost>("Post", PostSchema);
