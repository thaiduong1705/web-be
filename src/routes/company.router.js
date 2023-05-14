const express = require("express");
const router = express.Router();

const companyController = require("../controllers/company.controller");

router.get("/get-all-company", companyController.getAllCompany);
router.get("/get-company/:id", companyController.getCompanyById);
router.get("/get-companies", companyController.getCompaniesByName);

router.post("/create-new-company", companyController.createCompany);

router.put("/update-company/:id", companyController.updateCompany);
module.exports = router;
