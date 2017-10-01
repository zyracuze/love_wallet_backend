const express = require("express");
const dotenv = require('dotenv').config();

app = express();

app.set('port', process.env.PORT);

// Connect Database
require('./config/database.js');

const routes = require("./routes");
app.use('/api/', routes)

const port = app.get('port');

app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
