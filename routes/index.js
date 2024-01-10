const express = require("express");

const careerRouter = require("./career.router");
const companyRouter = require("./company.router");

const postRouter = require("./post.router");
const academicLevelRouter = require("./academicLevel.router");
const positionRouter = require("./position.router");
const workingTypeRouter = require("./workingType.router");
const candidateRouter = require("./candidate.router");

const userAccountRouter = require("./userAccount.router");
const commentRouter = require("./comment.router");

const { verifyToken, checkAdminOrNot } = require("../middleware/verifyToken");
const router = express.Router();
router.use("/auth", userAccountRouter);
router.use("/company", companyRouter);
router.use("/career", careerRouter);
router.use("/post", postRouter);
router.use("/academic-level", academicLevelRouter);
router.use("/position", positionRouter);
router.use("/working-type", workingTypeRouter);
router.use("/candidate", candidateRouter);
router.use("/comment", commentRouter);

module.exports = router;
