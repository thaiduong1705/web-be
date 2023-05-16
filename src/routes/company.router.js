const express = require("express");
const router = express.Router();

import { getAllCompanies, createCompany, getCompanyById } from "../controllers/company.controller";

router.get("/all", getAllCompanies);
//router.get("/get-companies", companyController.getCompaniesByName);

router.get("/detail/:id", getCompanyById);
router.post("/create-company", createCompany);

//router.put("/update-company/:id", companyController.updateCompany);
module.exports = router;
