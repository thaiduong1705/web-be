const express = require("express");
const multer = require("multer");
const router = express.Router();
const upload = multer({ dest: "../uploads/" });
import { uploadController } from "../controllers/image.controller";

router.post("/upload-image", upload.single("image"), uploadController);

module.exports = router;
