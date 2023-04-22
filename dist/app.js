"use strict";
//
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
//dotenv configs
(0, dotenv_1.config)();
// import { log } from "connect";
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
//create express app
const app = (0, express_1.default)();
mongoose_1.default.connect(process.env.MONGO_DB_URL)
    .then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Database Connected !");
    });
})
    .catch(() => {
    console.log("Failed to connect MongoDB ");
});
// //TODO : me port eke server eka up wenna kiyanwa
// app.listen(4000, () => {
//     console.log("Hello their ! ");
// });
//mongodb+srv://root:<1234>@testcluster.1sdqczd.mongodb.net/?retryWrites=true&w=majority
