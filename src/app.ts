import { json } from "body-parser";
//

import { config } from "dotenv";
//dotenv configs
config();

// import { log } from "connect";
import express, { Request, Response } from "express";
import routes from "./routes";
import db from "mongoose";

import { urlencoded } from "body-parser";
import { error } from "console";

//create express app
const app = express();

app.use(json());

app.use(urlencoded({ extended: true }));

app.use("/", routes);

app.use((error: Error, req: Request, res: Response) => {
  res.status(500).json({ message: error.message });
});

db.connect(process.env.MONGO_DB_URL!)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Database Connected ! PORT num -> "+`${process.env.PORT}`);
    });
  })
  .catch(() => {
    console.log("Failed to connect MongoDB ");
  });

//TODO : me port eke server eka up wenna kiyanwa
// app.listen(4000, () => {
//     console.log("Hello their ! ");
// });
