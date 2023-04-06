const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");

const initAPIroute = require("./routes/api");

const app = express();
const port = 8080;

// Middleware mà Express đã build sẵn
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
// app.use(morgan("combined"));

initAPIroute(app);

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
