const express = require("express");
const { getWorkingTypes, createWorkingType, updateWT, deleteWT } = require("../controllers/workingType.controller");
const router = express.Router();

const { verifyToken, checkAdminOrNot } = require("../middleware/verifyToken");
router.route("/").get(getWorkingTypes).post(verifyToken, checkAdminOrNot, createWorkingType);
router.use(verifyToken, checkAdminOrNot).route("/:wtid").put(updateWT).delete(deleteWT);
module.exports = router;
