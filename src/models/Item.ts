import {Document, model, Schema} from "mongoose";

export interface IItem extends Document {
    itemCode: string;
    itemName: string;
    itemQty: number;
    itemPrice: number;
}

const ItemScheme = new Schema(
    {
        itemCode: {
            type: String,
            required: true,
        },
        itemName: {
            type: String,
            required: true,
        },
        itemQty: {
            type: Number,
            required: true,
        },
        itemPrice: {
            type: Number,
            required: true,
        },
    },

    {timestamps: true}
);

export const Item = model<IItem>("Item", ItemScheme)