const express = require("express");
const router = express.Router();

const companyController = require("../../controllers/company.controller");

router.get("/get-all-company", companyController.getAllCompany);
router.get("/get-company/:id", companyController.getCompany);

router.post("/create-new-company", companyController.createCompany);
module.exports = router;
