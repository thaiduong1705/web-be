const db = require("../models");
const asyncHandler = require("express-async-handler");
const CustomError = require("../error/customError");
const createToken = require("../utils/createToken");
const hashPassword = require("../utils/hashPassword");
const { v4 } = require("uuid");
const sendCustomEmail = require("../utils/sendEmail");
const { Op } = require("sequelize");

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

    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        maxAge: 3600 * 1000 * 1,
    });

    res.status(201).json({
        accessToken,
    });
}); // aka người dùng đăng kí

const createStaffAccount = asyncHandler(async (req, res) => {
    const userId = v4();

    const accessToken = createToken(userId, 2, process.env.ACCESS_TOKEN_LT);
    const refreshToken = createToken(userId, 2, process.env.REFRESH_TOKEN_LT);

    const hPassword = hashPassword(req.body.password);

    const accountInput = {
        id: userId,
        username: req.body.username,
        password: hPassword,
        roleId: req.body.roleId,
        refreshToken,
    };

    const { name, age } = req.body;

    const candidateInput = {
        id: userId,
        name,
        age,
    };
    const newAccount = await db.UserAccount.create({
        ...accountInput,
    });

    const newCandiate = await db.StaffInformation.create({
        ...candidateInput,
        id: newAccount.id,
    });

    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        maxAge: 3600 * 1000 * 1,
    });

    return res.status(201).json({
        accessToken,
    });
}); // aka admin tạo account

const updateAccount = asyncHandler(async (req, res) => {
    const targetAccount = await db.UserAccount.findByPK(req.params.uid);

    if (!targetAccount) {
        throw new CustomError(`Không có id ${req.params.id}`, 400);
    }
    const hPassword = hashPassword(req.body.password);
    await db.UserAccount.update(
        {
            username: req.body.username,
            password: hPassword,
        },
        {
            where: {
                id: req.params.id,
            },
        },
    );

    return res.status(204).send();
});

// login account
const loginAccount = asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    const hPassword = hashPassword(password);
    const user = await db.UserAccount.findOne({
        where: {
            username,
            hPassword,
        },
    });

    if (!user) {
        throw new CustomError("Username hoặc password không trùng khớp", 404);
    }

    const accessToken = createToken(user.id, user.roleId, process.env.ACCESS_TOKEN_LT);
    const refreshToken = createToken(user.id, user.roleId, process.env.REFRESH_TOKEN_LT);

    await db.UserAccount.update(
        {
            refreshToken,
        },
        {
            id: user.id,
        },
    );
    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        maxAge: 3600 * 1000 * 24 * 3,
    });

    return res.status(200).json({ accessToken });
});

const logoutAccount = asyncHandler(async (req, res) => {
    const cookie = req.cookies;

    if (!cookie || !cookie.refreshToken) {
        throw new CustomError("No refresh token", 401);
    }

    const user = await db.UserAccount.findOne({
        where: {
            refreshToken: cookie.refreshToken,
        },
    });

    if (!user) {
        throw new CustomError(`Không có user này`, 404);
    }
    await db.UserAccount.update(
        {
            refreshToken: null,
        },
        {
            where: {
                refreshToken: cookie.refreshToken,
            },
        },
    );

    res.clearCookie("refreshToken", {
        secure: true,
        httpOnly: true,
    });
    res.status(200).send();
});

const forgotPassword = asyncHandler(async (req, res) => {
    const { email, isUser } = req.query;
    let user;
    if (isUser) {
        user = await db.Candidate.findOne({
            email,
        });
    } else {
        user = await db.StaffInformation.findOne({
            email,
        });
    }

    if (!user) {
        throw new CustomError("Không có user với email đó", 404);
    }

    const randomKey = Math.floor(100000 + Math.random() * 900000).toString();
    await db.UserAccount.update(
        {
            resetToken: randomKey,
            resetTokenExpired: Date.now() + 60 * 15 * 1000,
        },
        {
            where: {
                id: user.id,
            },
        },
    );

    const html = `Xin vui lòng click vào link này để thay đổi mật khẩu, link có hiệu lực 15 phút: <a href=
${process.env.URL_SERVER}/auth/reset-password?email=${email}&resetToken=${resetToken}>Nhấn vào đây</a>`;

    await sendCustomEmail(user.email, html);

    return res.status(200).json({ msg: "Đã gửi email" });
});

const checkResetToken = asyncHandler(async (req, res) => {
    const { resetToken, email, password } = req.body;

    if (!resetToken || !email || !password) {
        throw new CustomError("Thiếu các trường dữ liệu", 400);
    }

    const user = await db.UserAccount.findOne({
        email,
        resetToken,
        resetTokenExpired: { [Op.gt]: Date.now() },
    });

    if (!user) {
        throw new CustomError("Token reset hết hạn", 401);
    }

    await db.UserAccount.update(
        {
            password,
            resetToken: null,
            resetTokenExpired: null,
        },
        {
            where: {
                id: user.id,
            },
        },
    );

    return res.status(204).send();
});

module.exports = {
    createCandidateAccount,
    createStaffAccount,
    loginAccount,
    logoutAccount,
    forgotPassword,
    checkResetToken,
};
