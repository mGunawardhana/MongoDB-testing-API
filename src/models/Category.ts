import {Document, model, Schema} from "mongoose";
export interface ICategory extends Document {
    categoryName:string;
}
const CategoryScheme = new Schema(
    {
        categoryName:{
            type:String,
            required:true,
        },
    } ,

    {timestamps:true}
);

export const Category = model<ICategory>("Category", CategoryScheme)