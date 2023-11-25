const express = require("express");
const { getWorkingTypes, createWorkingType, updateWT, deleteWT } = require("../controllers/workingType.controller");
const router = express.Router();

router.route("/").get(getWorkingTypes).post(createWorkingType);
router.route("/:wtid").put(updateWT).delete(deleteWT);
module.exports = router;
