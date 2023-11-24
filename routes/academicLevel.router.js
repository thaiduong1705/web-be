const express = require("express");
const router = express.Router();

const {
    getAllAcademicLevels,
    createAcademicLevel,
    updateAL,
    deleteAL,
} = require("../controllers/academicLevel.controller");
router.route("/").get(getAllAcademicLevels).post(createAcademicLevel);
router.route("/:alid").put(updateAL).delete(deleteAL);

module.exports = router;
