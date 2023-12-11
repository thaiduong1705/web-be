const express = require("express");
const router = express.Router();

const { getAllCommentFromPost, createComment, getCommentsOfUser } = require("../controllers/comment.controller");

router.route("/get-post-comment").get(getAllCommentFromPost);
router.route("/get-comment-user").get(getCommentsOfUser);
router.route("/comment").post(createComment);
// router.get("/limit", getLimitCandidates);
// router.get("/get-candidate/:id", getCandidateById);
// router.post("/create-candidate", createCandidate);
// router.put("/update-candidate", updateCandidate);

module.exports = router;
