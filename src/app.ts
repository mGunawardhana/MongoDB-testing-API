//

import { config } from "dotenv";
//dotenv configs
config();

// import { log } from "connect";
import express from "express";
import db from "mongoose";

//create express app
const app = express();

db.connect(process.env.MONGO_DB_URL!)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Database Connected !");
    });
  })
  .catch(() => {
    console.log("Failed to connect MongoDB ");
  });

//TODO : me port eke server eka up wenna kiyanwa
// app.listen(4000, () => {
//     console.log("Hello their ! ");
// });
