import express, { Router } from "express";
import CategoryController from "../controllers/CategoryController";

export default class CategoryRoutes {
    private router: Router = express.Router();
    private categoryController: CategoryController = new CategoryController();

    constructor() {
        this.configRoutes();
    }

    private configRoutes = (): void => {
        this.router.post("/", this.categoryController.createCategory);

        this.router.get("/", this.categoryController.retrieveAllCategory);

        this.router.put("/:id", this.categoryController.updateCategory);

        this.router.delete("/id", this.categoryController.deleteCategory);
    };

    public getRouter = () => {
        return this.router;
    };
}
