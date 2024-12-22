import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as path from "path";

import listRoute from "./routes/listRoutes/listRoute.js";
import bodyParser from "body-parser";
const app = express();

const PORT = process.env.PORT | 4000;

const CONNECTION_URL =
  "mongodb+srv://admin:8Fs18L5udvgGWBs7@cluster0.r9qov.mongodb.net/Test?retryWrites=true&w=majority";
app.use(express.static(path.resolve("./build")));
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: false }));
app.use("/lists", listRoute);

const dbConnect = async () => {
  try {
    await mongoose.connect(CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
  } catch (err) {
    console.log(err.message);
  }
};

dbConnect();
