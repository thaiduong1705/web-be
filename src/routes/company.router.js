const express = require("express");
const router = express.Router();

import { getAllCompanies } from "../controllers/company.controller";

router.get("/all", getAllCompanies);
//router.get("/detail/:id", companyController.getCompanyById);
//router.get("/get-companies", companyController.getCompaniesByName);

//router.post("/create-new-company", companyController.createCompany);

//router.put("/update-company/:id", companyController.updateCompany);
module.exports = router;
