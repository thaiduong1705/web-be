const express = require("express");

const {
    createCandidateAccount,
    createStaffAccount,
    checkResetToken,
    loginAccount,
    logoutAccount,
    forgotPassword,
} = require("../controllers/userAccount.controller");

const router = express.Router();

router.route("/create-candidate").post(createCandidateAccount);
router.route("/create-staff").post(createStaffAccount);
router.route("/login").post(loginAccount);
router.route("/logout").get(logoutAccount);
router.route("/forgot-password").post(forgotPassword);
router.route("/reset-token").post(checkResetToken);

module.exports = router;
