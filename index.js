const express = require("express");
const methodOverride = require("method-override");
const cors = require("cors");
require("dotenv").config();
import connectDatabase from "./src/config/db.connect.js";
const initAPIroute = require("./src/routes");
import { initUpdatePost, initUpdateReport } from "./src/config/initScheduledJobs.js";
import { updateExpiredPost } from "./src/services/post.service.js";

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
connectDatabase().then(() => {
    updateExpiredPost();
});

initUpdatePost();
initUpdateReport();

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
