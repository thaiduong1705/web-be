const express = require("express");
const router = express.Router();

import { getAllWorkingTypeService } from "../controllers/workingType.controller";

router.get("/all", getAllWorkingTypeService);
module.exports = router;
