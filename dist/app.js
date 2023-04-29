"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = require("body-parser");
//
const dotenv_1 = require("dotenv");
//dotenv configs
(0, dotenv_1.config)();
// import { log } from "connect";
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_2 = require("body-parser");
//create express app
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use((0, body_parser_2.urlencoded)({ extended: true }));
app.use("/", routes_1.default);
app.use((error, req, res) => {
    res.status(500).json({ message: error.message });
});
mongoose_1.default.connect(process.env.MONGO_DB_URL)
    .then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Database Connected ! PORT num -> " + `${process.env.PORT}`);
    });
})
    .catch(() => {
    console.log("Failed to connect MongoDB ");
});
//TODO : me port eke server eka up wenna kiyanwa
// app.listen(4000, () => {
//     console.log("Hello their ! ");
// });
