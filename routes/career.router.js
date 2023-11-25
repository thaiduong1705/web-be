const express = require("express");
const router = express.Router();

const { getAllCareers, createCareer, updateCareer, deleteCareer } = require("../controllers/career.controller");

router.route("/").get(getAllCareers).post(createCareer);
router.route("/:pid").put(updateCareer).delete(deleteCareer);
module.exports = router;
