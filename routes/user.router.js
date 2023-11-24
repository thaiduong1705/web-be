import express from "express";
import verifyToken from "../middleware/verifyToken";
import { getCurrent, updateUser } from "../controllers/user.controller";
const router = express.Router();

router.use(verifyToken);
router.get("/get-current", getCurrent);
router.post("/update-user", updateUser);
module.exports = router;
