const express = require("express");
const router = express.Router();
const {
    getAllCompanies,
    createCompany,
    getCompanyById,
    getFilterCompanies,
    updateCompany,
    deleteCompany,
    getRelatedCompaniesFromCareer,
} = require("../controllers/company.controller");

const { verifyToken, checkAdminOrNot } = require("../middleware/verifyToken");
// router.get("/all", getAllCompanies);
// //router.get("/get-companies", companyController.getCompaniesByName);
// router.get("/limit", getLimitCompanies);
// router.get("/get-company/:id", getCompanyById);
// router.get("/get-related-company", getRelatedCompaniesFromCareer);
// router.post("/create-company", createCompany);

// router.put("/update-company", updateCompany);
router.route("/filter").get(getFilterCompanies);
router.route("/relate-comp").get(getRelatedCompaniesFromCareer);
router
    .route("/:cid")
    .get(getCompanyById)
    .put(verifyToken, checkAdminOrNot, updateCompany)
    .delete(verifyToken, checkAdminOrNot, deleteCompany);
router.use(verifyToken, checkAdminOrNot).route("/").get(getAllCompanies).post(createCompany);

module.exports = router;
