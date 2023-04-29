import { Request, RequestHandler, Response } from "express";

export default class CustomerController {
    createCustomer: RequestHandler = async (
        req: Request,
        res: Response
    ): Promise<Response> => {
        return res;
    };

    retrieveAllCustomers: RequestHandler = async (
        req: Request,
        res: Response
    ): Promise<Response> => {
        return res;
    };

    updateCustomer: RequestHandler = async (
        req: Request,
        res: Response
    ): Promise<Response> => {
        return res;
    };

    deleteCustomer: RequestHandler = async (
        req: Request,
        res: Response
    ): Promise<Response> => {
        return res;
    };
}
