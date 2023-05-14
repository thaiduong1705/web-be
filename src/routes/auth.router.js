const express = require("express");
const router = express.Router();
import * as authController from "../controllers/auth.controller";

router.post("/register", authController.register);
router.post("/login", authController.login);
module.exports = router;
