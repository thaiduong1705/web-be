const express = require("express");
const path = require("path");
const route = require("./routes");
const morgan = require("morgan");

const app = express();
const port = 8080;

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

// app.use(morgan("combined"));

route(app);

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);
