const express = require("express");
const router = express.Router();

import { getAllAcademicLevels } from "../controllers/academicLevel.controller";

router.get("/all", getAllAcademicLevels);
module.exports = router;
