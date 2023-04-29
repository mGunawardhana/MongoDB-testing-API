import express, { Router } from "express";
import CustomerController from "../controllers/CustomerController";

export default class PostRoutes {
    private router: Router = express.Router();
    private customerController: CustomerController = new CustomerController();

    constructor() {
        this.configRoutes();
    }

    private configRoutes = (): void => {
        this.router.post("/", this.customerController.createCustomer);

        this.router.get("/", this.customerController.retrieveAllCustomers);

        this.router.put("/:id", this.customerController.updateCustomer);

        this.router.delete("/id", this.customerController.deleteCustomer);
    };

    public getRouter = () => {
        return this.router;
    };
}
