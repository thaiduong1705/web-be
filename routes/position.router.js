const express = require("express");
const router = express.Router();

const {
    getAllPositions,
    createNewPosition,
    updatePosition,
    deletePosition,
} = require("../controllers/position.controller");

router.route("/").get(getAllPositions).post(createNewPosition);
router.route("/posid").put(updatePosition).delete(deletePosition);
module.exports = router;
