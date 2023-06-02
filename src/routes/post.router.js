const express = require("express");
const router = express.Router();
//import * as authController from "../controllers/auth.controller";
import * as postController from "../controllers/post.controller";
// router.post("/register", authController.register);
// router.post("/login", authController.login);
router.post("/create-post", postController.createPost);
router.post("/apply", postController.applyPost);
router.post("/soft-delete", postController.deletePost);
router.put("/update-post", postController.updatePost);
router.get("/get-post/:id", postController.getPostById);
router.get("/get-related-post", postController.getRelatedPostsFromCareer);
router.get("/all", postController.getAllPosts);
router.get("/limit", postController.getLimitPosts);
router.get("/get-delete", postController.getDeletedPost);
router.get("/get-delete-post-of-company", postController.getDeletedPostOfCompany);
module.exports = router;
