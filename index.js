const express = require("express");
const methodOverride = require("method-override");
const cors = require("cors");
require("dotenv").config();
import connectDatabase from "./src/config/db.connect.js";
import relationshipTester from "./src/seeders/relationshipTester.js";
const initAPIroute = require("./src/routes");

const app = express();

// Middleware mà Express đã build sẵn
app.use(
    cors({
        origin: process.env.CLIENT_URL,
        methods: ["POST", "GET", "PUT", "DELETE"],
    }),
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

initAPIroute(app);
connectDatabase();

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
