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
} = require("../controllers/post.controller");
const { verifyToken, checkAdminOrNot } = require("../middleware/verifyToken");

const router = express.Router();

router.use(verifyToken, checkAdminOrNot).route("/").get(getAllPosts).post(createPost);
router.route("/filter").get(getFilterPosts);
router.route("/relate").get(getRelatedPostsFromCareer);
router.use(verifyToken, checkAdminOrNot).route("/delete-posts").get(getDeletedPosts);
router.use(verifyToken, checkAdminOrNot).route("/delete-post-comp").get(getDeletedPostOfCompany);
router.use(verifyToken).route("/apply").get(applyPost).put(changeStatusApplied);
router
    .use(verifyToken)
    .route("/:pid")
    .get(getPostById)
    .put(checkAdminOrNot, updatePost)
    .delete(checkAdminOrNot, deletePost);
module.exports = router;
