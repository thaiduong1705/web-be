const express = require("express");
const router = express.Router();

const {
    getAllCommentFromPost,
    createComment,
    getCommentsOfUser,
    updateComment,
    deleteComment,
} = require("../controllers/comment.controller");

const { verifyToken, checkCandidateOrNot } = require("../middleware/verifyToken");

router.route("/get-post-comment").get(getAllCommentFromPost);
router.route("/get-comment-user").get(getCommentsOfUser);
router.route("/").post(verifyToken, checkCandidateOrNot, createComment);
router
    .route("/:comid")
    .put(verifyToken, checkCandidateOrNot, updateComment)
    .delete(verifyToken, checkCandidateOrNot, deleteComment);
// router.get("/limit", getLimitCandidates);
// router.get("/get-candidate/:id", getCandidateById);
// router.post("/create-candidate", createCandidate);
// router.put("/update-candidate", updateCandidate);

module.exports = router;
