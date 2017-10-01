import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import routes from "./routes";

const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
const dbURI = "mongodb://localhost/local";
mongoose.connect(dbURI, {
    useMongoClient: true
});

const app = express();
app.listen(3000, () => {
    app.use(bodyParser());
    app.use(cors());
    app.use("/api/", routes);
    console.log("Love wallet API listening on port 3000!");
});
