const express = require("express");
const router = express.Router();

import {
    getAllCandidates,
    createCandidate,
    getCandidateById,
    updateCandidate,
    getLimitCandidates,
} from "../controllers/candidate.controller";

router.get("/all", getAllCandidates);
router.get("/limit", getLimitCandidates);
router.get("/get-candidate/:id", getCandidateById);
router.post("/create-candidate", createCandidate);
router.put("/update-candidate", updateCandidate);

module.exports = router;
