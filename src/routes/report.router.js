import express from "express";
import { getReport } from "../controllers/report.controller";
const router = express.Router();

router.get("/get-report", getReport);

module.exports = router;
