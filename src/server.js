import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import routes from "./routes";

mongoose.Promise = global.Promise;
const dbURI = "mongodb://localhost/test";
mongoose.connect(dbURI, {
  useMongoClient: true
});

const app = express();
app.listen(3000, () => {
  app.use(cors());
  app.use("/api/", routes);
  console.log("Love wallet API listening on port 3000!");
});
