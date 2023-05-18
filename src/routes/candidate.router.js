const express = require("express");
const router = express.Router();

import { getAllCandidates } from "../controllers/candidate.controller";

router.get("/all", getAllCandidates);

module.exports = router;
