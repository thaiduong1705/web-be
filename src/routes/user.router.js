import express from "express";
import verifyToken from "../middleware/verifyToken";
import { getCurrent } from "../controllers/user.controller";
const router = express.Router();

router.use(verifyToken);
router.get("/get-current", getCurrent);

module.exports = router;
