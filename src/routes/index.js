const testRouter = require("./test.router");
const authRouter = require("./auth.router");
const careerRouter = require("./career.router");
const companyRouter = require("./company.router");
const insertRouter = require("./insert.router");
const postRouter = require("./post.router");
const academicLevelRouter = require("./academicLevel.router");
const districtRouter = require("./district.router");
const positionRouter = require("./position.router");
const workingTypeRouter = require("./workingType.router");
const candidateRouter = require("./candidate.router");

function initAPIroute(app) {
    app.use("/api/v1/test", testRouter);
    app.use("/api/v1/auth", authRouter);
    app.use("/api/v1/company", companyRouter);
    app.use("/api/v1/career", careerRouter);
    app.use("/api/v1/insert", insertRouter);
    app.use("/api/v1/post", postRouter);
    app.use("/api/v1/academic-level", academicLevelRouter);
    app.use("/api/v1/district", districtRouter);
    app.use("/api/v1/position", positionRouter);
    app.use("/api/v1/working-type", workingTypeRouter);
    app.use("/api/v1/candidate", candidateRouter);
    return app.get("/", (req, res) => {
        res.send("API started and wait for your go!");
    });
}

module.exports = initAPIroute;
