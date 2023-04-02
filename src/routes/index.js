const siteRouter = require("./SiteRouter");
const apiRouter = require("./ApiRouter");
function route(app) {
    app.use("/api", apiRouter);
    app.use("/", siteRouter);
}

module.exports = route;
