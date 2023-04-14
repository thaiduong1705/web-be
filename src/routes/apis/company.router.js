const express = require("express");
const router = express.Router();

const companyController = require("../../controllers/company.controller");

router.get("/get-all-company", companyController.getAllCompany);

module.exports = router;