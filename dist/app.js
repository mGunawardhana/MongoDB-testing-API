"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
//create express app
const app = (0, express_1.default)();
mongoose_1.default.connect("mongodb+srv://root:1234@testcluster.1sdqczd.mongodb.net/?retryWrites=true&w=majority").then(() => {
    console.log("Database Connected !");
    app.listen(4000, () => {
        console.log("Hello their ! ");
    });
}).catch((error) => {
    console.log("Failed to connect MongoDB " + error);
});
// //TODO : me port eke server eka up wenna kiyanwa
// app.listen(4000, () => {
//     console.log("Hello their ! ");
// });
//mongodb+srv://root:<1234>@testcluster.1sdqczd.mongodb.net/?retryWrites=true&w=majority
