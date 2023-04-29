import express, {Router} from "express";
import ItemController from "../controllers/ItemController";

export default class ItemRoutes {
    private router: Router = express.Router();
    private itemController: ItemController = new ItemController();

    constructor() {
        this.configRoutes();
    }

    public getRouter = () => {
        return this.router;
    };

    private configRoutes = (): void => {
        this.router.post("/", this.itemController.createItem);

        this.router.get("/", this.itemController.retrieveAllItems);

        this.router.put("/:id", this.itemController.updateItem);

        this.router.delete("/id", this.itemController.deleteItem);
    };
}
