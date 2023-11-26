const db = require("../models");
const asyncHandler = require("express-async-handler");
const CustomError = require("../error/customError");
const createToken = require("../utils/createToken");
const hashPassword = require("../utils/hashPassword");
const { v4 } = require("uuid");

const createCandidateAccount = asyncHandler(async (req, res) => {
    const userId = v4();

    const accessToken = createToken(userId, 2, process.env.ACCESS_TOKEN_LT);
    const refreshToken = createToken(userId, 2, process.env.REFRESH_TOKEN_LT);

    const hPassword = hashPassword(req.body.password);

    const accountInput = {
        id: userId,
        username: req.body.username,
        password: hPassword,
        roleId: 2,
        refreshToken,
    };

    const {
        civilId,
        candidateName,
        age,
        profileImage,
        cvImage,
        phoneNumber,
        email,
        fullAddress,
        province,
        district,
        ward,
        gender,
        experienceYear,
        academicLevelId,
        positionId,
    } = req.body;

    const candidateInput = {
        id: userId,
        civilId,
        candidateName,
        age,
        profileImage,
        cvImage,
        phoneNumber,
        email,
        fullAddress,
        province,
        district,
        ward,
        gender,
        experienceYear,
        academicLevelId,
        positionId,
    };
    const newAccount = await db.UserAccount.create({
        ...accountInput,
    });

    const newCandiate = await db.Candidate.create({
        ...candidateInput,
        id: newAccount.id,
    });

    res.cookie("accessToken", accessToken, {
        httpOnly: true,
        maxAge: 3600 * 1000 * 1,
    });

    res.status(201).json();
}); // aka đăng kí
