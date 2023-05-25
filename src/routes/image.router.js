const express = require("express");
const multer = require("multer");
const router = express.Router();
const upload = multer({ dest: "../uploads/", cleanup: true });
import { deleteUploadController, uploadController } from "../controllers/image.controller";

router.post("/upload-image", upload.single("image"), uploadController);
router.post("/delete-image", deleteUploadController);
module.exports = router;
