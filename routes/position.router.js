const express = require("express");
const router = express.Router();

const {
    getAllPositions,
    createNewPosition,
    updatePosition,
    deletePosition,
} = require("../controllers/position.controller");

const { verifyToken, checkAdminOrNot } = require("../middleware/verifyToken");

router.route("/").get(getAllPositions).post(verifyToken, checkAdminOrNot, createNewPosition);
router.use(verifyToken, checkAdminOrNot).route("/:posid").put(updatePosition).delete(deletePosition);
module.exports = router;
