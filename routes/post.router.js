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

const router = express.Router();

router.route("/").get(getAllPosts).post(createPost);
router.route("/filter").get(getFilterPosts);
router.route("/relate").get(getRelatedPostsFromCareer);
router.route("/delete-posts").get(getDeletedPosts);
router.route("/delete-post-comp").get(getDeletedPostOfCompany);
router.route("/apply").get(applyPost).put(changeStatusApplied);
router.route("/:pid").get(getPostById).put(updatePost).delete(deletePost);
module.exports = router;
