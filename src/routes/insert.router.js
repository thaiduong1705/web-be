const express = require("express");
const router = express.Router();
import * as insertController from "../controllers/insert.controller";

router.post("/", insertController.register);

module.exports = router;
