const express = require("express");
const router = express.Router();

import {
    getAllCompanies,
    createCompany,
    getCompanyById,
    updateCompany,
    getLimitCompanies,
    getRelatedCompaniesFromCareer,
} from "../controllers/company.controller";

// router.get("/all", getAllCompanies);
// //router.get("/get-companies", companyController.getCompaniesByName);
// router.get("/limit", getLimitCompanies);
// router.get("/get-company/:id", getCompanyById);
// router.get("/get-related-company", getRelatedCompaniesFromCareer);
// router.post("/create-company", createCompany);

// router.put("/update-company", updateCompany);
router.route("/").get(getAllCompanies).post(createCompany);
router.route("/:cid").get(getCompanyById);
module.exports = router;
