const express = require("express");
const router = express.Router();
//import * as authController from "../controllers/auth.controller";
import * as postController from "../controllers/post.controller";
// router.post("/register", authController.register);
// router.post("/login", authController.login);
router.post("/create-new", postController.createPost);
router.get("/all", postController.getAllPosts);
module.exports = router;
