import {Request, RequestHandler, Response} from "express";
import {Category} from "../models/Category";

export default class CategoryController {
    createCategory: RequestHandler = async (
        req: Request,
        res: Response
    ): Promise<Response> => {
        try {
            const {categoryName} = req.body;
            let category = await Category.findOne({categoryName: categoryName});
            // let newCategory = null;
            if (!category) {
                category = new Category({categoryName: categoryName});
                category = await category.save();
                return res
                    .status(200)
                    .json({message: "New category added!", responseDate: category});
            }else{
                return res.status(500).json({message: "Already exists !"});
            }



        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(500).json({message: error.message});
            } else {
                return res.status(500).json({message: "unknown error occurred!"});
            }
        }
        // return res;
    };

    retrieveAllCategory: RequestHandler = async (
        req: Request,
        res: Response
    ): Promise<Response> => {
        try {
            let categories = await Category.find();
            return res
                .status(200)
                .json({message: "load categories!", responseDate: categories});
        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(500).json({message: error.message});
            } else {
                return res.status(500).json({message: "unknown error occurred!"});
            }
        }
        // return res;
    };

    updateCategory: RequestHandler = async (
        req: Request,
        res: Response
    ): Promise<Response> => {
        try {
            const {id} = req.params;

            let updatedCategory = await Category.findByIdAndUpdate(id, req.body, {new: true});
            //metana illana resp eka aluten illana eka denawa new true karama
            return res
                .status(200)
                .json({message: "New category Updated!", responseDate: updatedCategory});
        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(500).json({message: error.message});
            } else {
                return res.status(500).json({message: "unknown error occurred!"});
            }
        }


        // return res;
    };

    deleteCategory: RequestHandler = async (
        req: Request,
        res: Response
    ): Promise<Response> => {
        try {
            const {id} = req.params;
            let isDeleted = await Category.findByIdAndDelete(id);
            if (!isDeleted) {
                throw new Error("Failed to delete Category!")
            }
            return res.status(200).json({message: "Category deleted !", responseData: isDeleted})

        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(500).json({message: error.message});
            } else {
                return res.status(500).json({message: "unknown error occurred!"});
            }
        }
    };
}
