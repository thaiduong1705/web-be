const express = require("express");
const router = express.Router();

import { getAllCareers, createCareer, getCareerById } from "../controllers/career.controller";

router.get("/all", getAllCareers);
router.get("/get-career/:id", getCareerById);
router.post("/create-career", createCareer);
module.exports = router;
