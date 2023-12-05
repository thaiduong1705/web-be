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
    updateCandidate,
} = require("../controllers/userAccount.controller");
const { verifyToken, checkAdminOrNot, checkCandidateOrNot } = require("../middleware/verifyToken");
const uploadCloud = require("../config/cloudinary");

const router = express.Router();

router.route("/create-candidate").post(createCandidateAccount);
router.route("/create-staff").post(createStaffAccount);
router.route("/login").post(loginAccount);
router.route("/logout").get(logoutAccount);
router.route("/forgot-password").post(forgotPassword);
router.route("/reset-token").post(checkResetToken);
router.route("/current-user").get(verifyToken, getCurrentUser);
router.route("/current-staff").get(verifyToken, checkAdminOrNot, getCurrentStaff);
router.route("/update-candidate").post(
    verifyToken,
    checkCandidateOrNot,
    uploadCloud.fields([
        { name: "profileImage", maxCount: 1 },
        { name: "cvImage", maxCount: 1 },
    ]),
    updateCandidate,
);

module.exports = router;
