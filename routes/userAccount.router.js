const express = require("express");

const {
    createCandidateAccount,
    createStaffAccount,
    checkResetToken,
    loginAccount,
    logoutAccount,
    forgotPassword,
    getCurrentUser,
    getCurrentStaff,
} = require("../controllers/userAccount.controller");
const { verifyToken, checkAdminOrNot } = require("../middleware/verifyToken");

const router = express.Router();

router.route("/create-candidate").post(createCandidateAccount);
router.route("/create-staff").post(createStaffAccount);
router.route("/login").post(loginAccount);
router.route("/logout").get(logoutAccount);
router.route("/forgot-password").post(forgotPassword);
router.route("/reset-token").post(checkResetToken);
router.route("/current-user").get(verifyToken, getCurrentUser);
router.route("/current-staff").get(verifyToken, checkAdminOrNot, getCurrentStaff);

module.exports = router;
