const express = require("express");
const router = express.Router();

import { getAllDistricts } from "../controllers/district.controller";

router.get("/all", getAllDistricts);
module.exports = router;
