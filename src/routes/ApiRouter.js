const express = require("express");
const { route } = require("./SiteRouter");
const router = express.Router();

const testApiRouter = require("./Api/test.router");

router.use("/test", testApiRouter);

module.exports = router;
