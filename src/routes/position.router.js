const express = require("express");
const router = express.Router();

import { getAllPositions } from "../controllers/position.controller";

router.get("/all", getAllPositions);
module.exports = router;
