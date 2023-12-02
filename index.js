const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

require("dotenv").config();

const db = require("./models");
const mainRouter = require("./routes");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

const app = express();
const port = process.env.PORT || 5000;

// Middleware mà Express đã build sẵn
app.use(cookieParser());
app.use(
    cors({
        origin: [process.env.ADMIN_URL, process.env.CLIENT_URL],
        methods: ["POST", "GET", "PUT", "DELETE"],
    }),
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/v1", mainRouter);

app.use(notFound);
app.use(errorHandlerMiddleware);

const startServer = async () => {
    try {
        //await db.sequelize.sync();
        await db.sequelize.authenticate();
        console.log("Connected to database");
        app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
    } catch (error) {
        console.log(error);
        await db.sequelize.close();
    }
};

startServer();
