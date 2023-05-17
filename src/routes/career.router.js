const express = require("express");
const router = express.Router();

import { getAllCareers, createCareer } from "../controllers/career.controller";

router.get("/all", getAllCareers);
router.post("/create-career", createCareer);
module.exports = router;
