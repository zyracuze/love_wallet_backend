const express = require("express");
const cors = require("cors")
const app = express();
const routes = require("./routes");
const db = require("./models/db");
app.listen(3000, function() {
app.use(cors());
app.use("/api/", routes);
  console.log("Love wallet API listening on port 3000!");
});
