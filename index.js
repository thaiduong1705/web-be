const express = require("express");
const methodOverride = require("method-override");
const cors = require("cors");
require("dotenv").config();
import connectDatabase from "./src/config/db.connect.js";
const initAPIroute = require("./src/routes");
import { initUpdatePost, initUpdateReport } from "./src/config/initScheduledJobs.js";
import db from "./src/models/index.js";
import { updateExpiredPost } from "./src/services/post.service.js";

const app = express();

// Middleware mà Express đã build sẵn
app.use(
    cors({
        origin: [process.env.CLIENT_URL, process.env.CLIENT_URL],
        methods: ["POST", "GET", "PUT", "DELETE"],
    }),
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

initAPIroute(app);

const port = process.env.PORT || 8080;

const startServer = async () => {
    try {
        await db.sequelize.sync();
        console.log("Connected to database");
        app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
    } catch (error) {
        console.log(error);
    }
};

startServer();
