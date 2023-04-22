//
import express from "express";
import db from "mongoose";

//create express app
const app = express();


db.connect(
  "mongodb+srv://root:1234@testcluster.1sdqczd.mongodb.net/?retryWrites=true&w=majority"
).then(() => {
    console.log("Database Connected !");
    app.listen(4000, () => {
      console.log("Hello their ! ");
    });

}).catch((error) => {
    console.log("Failed to connect MongoDB "+ error);
});


// //TODO : me port eke server eka up wenna kiyanwa
// app.listen(4000, () => {
//     console.log("Hello their ! ");
// });

//mongodb+srv://root:<1234>@testcluster.1sdqczd.mongodb.net/?retryWrites=true&w=majority