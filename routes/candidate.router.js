const express = require("express");
const router = express.Router();

// import {
//     getAllCandidates,
//     createCandidate,
//     getCandidateById,
//     updateCandidate,
//     getLimitCandidates,
// } from "../controllers/candidate.controller";

const { getAllCandidates } = require("../controllers/candidate.controller");

router.route("/").get(getAllCandidates);
// router.get("/limit", getLimitCandidates);
// router.get("/get-candidate/:id", getCandidateById);
// router.post("/create-candidate", createCandidate);
// router.put("/update-candidate", updateCandidate);

module.exports = router;
