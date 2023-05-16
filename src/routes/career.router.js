const express = require("express");
const router = express.Router();

import { getAllCareers } from "../controllers/career.controller";

router.get("/all", getAllCareers);
module.exports = router;
