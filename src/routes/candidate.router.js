const express = require("express");
const router = express.Router();

import {
    getAllCandidates,
    createCandidate,
    getCandidateById,
    updateCandidate,
} from "../controllers/candidate.controller";

router.get("/all", getAllCandidates);
router.get("/get-candidate/:id", getCandidateById);
router.post("/create-candidate", createCandidate);

module.exports = router;
