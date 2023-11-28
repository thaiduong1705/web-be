const express = require("express");
const router = express.Router();

const { getAllCareers, createCareer, updateCareer, deleteCareer } = require("../controllers/career.controller");
const { verifyToken, checkAdminOrNot } = require("../middleware/verifyToken");

router.route("/").get(getAllCareers).post(verifyToken, checkAdminOrNot, createCareer);
router.use(verifyToken, checkAdminOrNot).route("/:pid").put(updateCareer).delete(deleteCareer);
module.exports = router;
