const express = require("express");
const router = express.Router();

const {
    getAllAcademicLevels,
    createAcademicLevel,
    updateAL,
    deleteAL,
} = require("../controllers/academicLevel.controller");
const { verifyToken, checkAdminOrNot } = require("../middleware/verifyToken");
router.route("/").get(getAllAcademicLevels).post(verifyToken, checkAdminOrNot, createAcademicLevel);
router.use(verifyToken, checkAdminOrNot).route("/:alid").put(updateAL).delete(deleteAL);

module.exports = router;
