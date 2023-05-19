const express = require("express");
const router = express.Router();

import {
    getAllCompanies,
    createCompany,
    getCompanyById,
    updateCompany,
    getLimitCompanies,
} from "../controllers/company.controller";

router.get("/all", getAllCompanies);
//router.get("/get-companies", companyController.getCompaniesByName);
router.get("/limit", getLimitCompanies);
router.get("/get-company/:id", getCompanyById);
router.post("/create-company", createCompany);

router.put("/update-company/:id", updateCompany);
module.exports = router;
