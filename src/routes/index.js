const testRouter = require("./test.router");
const companyRouter = require("./company.router");
const insertRouter = require("./insert.router");
function initAPIroute(app) {
    app.use("/api/v1/test", testRouter);
    app.use("/api/v1/company", companyRouter);
    app.use("/api/v1/insert", insertRouter);
    return app.get("/", (req, res) => {
        res.send("API started and wait for your go!");
    });
}

module.exports = initAPIroute;
