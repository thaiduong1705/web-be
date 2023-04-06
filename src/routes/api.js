const express = require("express");

const testRouter = require("./Api/test.router");
const router = express.Router();

function initAPIroute(app) {
    // đoạn này khai báo route để lấy dữ liệu tương ứng (/post, /company, /user,...)
    router.use("/test", testRouter);

    // đây là trang đầu tiên để test xem có chạy được web không
    router.get("/", (req, res) => {
        res.status(200).json({
            message: "API started and wait for your go!",
        });
    });
    return app.use("/api", router);
}

module.exports = initAPIroute;
