import { Request, RequestHandler, Response } from "express";

export default class CategoryController {
    createCategory: RequestHandler = async (
        req: Request,
        res: Response
    ): Promise<Response> => {
        return res;
    };

    retrieveAllCategory: RequestHandler = async (
        req: Request,
        res: Response
    ): Promise<Response> => {
        return res;
    };

    updateCategory: RequestHandler = async (
        req: Request,
        res: Response
    ): Promise<Response> => {
        return res;
    };

    deleteCategory: RequestHandler = async (
        req: Request,
        res: Response
    ): Promise<Response> => {
        return res;
    };
}
