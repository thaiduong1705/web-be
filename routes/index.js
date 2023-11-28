const express = require("express");

const testRouter = require("./test.router");
const authRouter = require("./auth.router");
const careerRouter = require("./career.router");
const companyRouter = require("./company.router");
const insertRouter = require("./insert.router");
const postRouter = require("./post.router");
const academicLevelRouter = require("./academicLevel.router");
const positionRouter = require("./position.router");
const workingTypeRouter = require("./workingType.router");
const candidateRouter = require("./candidate.router");
const imageRouter = require("./image.router");
const userRouter = require("./user.router");
const emailRouter = require("./email.router");
const reportRouter = require("./report.router");
const userAccountRouter = require("./userAccount.router");

const { verifyToken, checkAdminOrNot } = require("../middleware/verifyToken");
const router = express.Router();
router.use("/auth", authRouter);
router.use("/company", companyRouter);
router.use("/career", careerRouter);
router.use("/insert", insertRouter);
router.use("/post", postRouter);
router.use("/academic-level", academicLevelRouter);
router.use("/position", positionRouter);
router.use("/working-type", workingTypeRouter);
router.use("/candidate", candidateRouter);
router.use("/image", imageRouter);
router.use("/user", userRouter);
router.use("/email", emailRouter);
router.use("/report", reportRouter);

module.exports = router;
