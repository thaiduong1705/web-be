const express = require("express");
const {
    getAllPosts,
    createPost,
    getRelatedPostsFromCareer,
    getDeletedPosts,
    getDeletedPostOfCompany,
    getPostById,
    getFilterPosts,
    updatePost,
    deletePost,
    applyPost,
    changeStatusApplied,
    applyPostByCandidate,
} = require("../controllers/post.controller");
const { verifyToken, checkAdminOrNot, checkCandidateOrNot } = require("../middleware/verifyToken");

const router = express.Router();

router.route("/filter").get(getFilterPosts);
router.route("/relate").get(getRelatedPostsFromCareer);
router.use(verifyToken).route("/apply").get(applyPost).put(changeStatusApplied);
router.route("/apply-post").get(verifyToken, checkCandidateOrNot, applyPostByCandidate);
router
    .use(verifyToken)
    .route("/:pid")
    .get(getPostById)
    .put(checkAdminOrNot, updatePost)
    .delete(checkAdminOrNot, deletePost);
router.use(verifyToken, checkAdminOrNot).route("/").get(getAllPosts).post(createPost);
router.use(verifyToken, checkAdminOrNot).route("/delete-posts").get(getDeletedPosts);
router.use(verifyToken, checkAdminOrNot).route("/delete-post-comp").get(getDeletedPostOfCompany);
module.exports = router;
