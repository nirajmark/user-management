const dotenv = require("dotenv").config();
const express = require("express");

const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const db = require("./db");

export = () => {
    let app = express();

    app.use(bodyParser.json());
    app.use(expressValidator());

    // const routes = require("../routes")(app);

    return app;
};