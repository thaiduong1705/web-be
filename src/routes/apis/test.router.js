const express = require("express");
const router = express.Router();
const testController = require("../../controllers/test.controller");

// Đây là nơi sẽ gọi các thể loại [GET], [POST], [PUT], [DELETE] cho 1 đối tượng nào đó
router.get("/", testController.index);

module.exports = router;
