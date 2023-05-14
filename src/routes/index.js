const testRouter = require("./test.router");
const companyRouter = require("./company.router");

function initAPIroute(app) {
    app.use("/api/v1/test", testRouter);
    app.use("/api/v1/company", companyRouter);
    return app.get("/", (req, res) => {
        res.send("API started and wait for your go!");
    });
}

module.exports = initAPIroute;
