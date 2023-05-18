const express = require("express");
const router = express.Router();

import { getAllAcademicLevels, createAcademicLevel } from "../controllers/academicLevel.controller";

router.get("/all", getAllAcademicLevels);
router.post("create-academic-level", createAcademicLevel);
module.exports = router;
