import { timeStamp } from "console";
import { Schema, model } from "mongoose";

export interface ITag extends Document {
  text: string;
}

const TagsSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Tag = model<ITag>("Tag", TagsSchema);
