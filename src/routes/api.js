const express = require("express");
const fs = require("fs");

const testRouter = require("./apis/test.router");
const companyRouter = require("./apis/company.router");

const router = express.Router();
function initAPIroute(app) {
    // đoạn này khai báo route để lấy dữ liệu tương ứng (/post, /company, /user,...)
    // const files = fs.readFileSync("./apis").filter(file => file.endsWith(".js"))
    router.use("/test", testRouter);
    router.use("/company", companyRouter);
    // đây là trang đầu tiên để test xem có chạy được web không
    router.get("/", (req, res) => {
        res.status(200).json({
            message: "API started and wait for your go!",
        });
    });
    return app.use("/api", router);
}

module.exports = initAPIroute;
