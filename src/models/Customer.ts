import {Document, model, Schema} from "mongoose";

export interface ICustomer extends Document {
    customerName: string;
    customerAddress: string;
    customerContact: string;
    customerSalary: number;
}

const CustomerSchema = new Schema(
    {
        customerName: {
            type: String,
            required: true,
        },
        customerAddress: {
            type: String,
            required: true,
        },
        customerContact: {
            type: String,
            required: true,
        },
        customerSalary: {
            type: Number,
            required: true,
        },
    },

    {timestamps: true}
);

export const Customer = model<ICustomer>("Customer", CustomerSchema)