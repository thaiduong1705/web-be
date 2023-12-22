const db = require("../models");
const asyncHandler = require("express-async-handler");
const CustomError = require("../error/customError");
const createToken = require("../utils/createToken");
const { hashPassword, comparePassword } = require("../utils/hashPassword");
const { v4 } = require("uuid");
const sendCustomEmail = require("../utils/sendEmail");
const { Op } = require("sequelize");
const deleteCloudinaryImage = require("../utils/deleteCloudinaryImage");

const createCandidateAccount = asyncHandler(async (req, res) => {
    return db.sequelize.transaction(async (t) => {
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
            careerList,
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
        const newAccount = await db.UserAccount.create(
            {
                ...accountInput,
            },
            { transaction: t },
        );

        const newCandiate = await db.Candidate.create(
            {
                ...candidateInput,
                id: newAccount.id,
            },
            { transaction: t },
        );

        let newCandidateCareer;
        if (Array.isArray(careerList)) {
            const insertTarget = careerList.map((c) => {
                return {
                    candidateId: newAccount.id,
                    careerId: c,
                };
            });
            newCandidateCareer = await db.CandidateCareer.bulkCreate(insertTarget, { transaction: t });
        }

        res.cookie("refreshToken", refreshToken, {
            httpOnly: false,
            maxAge: 3600 * 1000 * 1,
            secure: false,
        });

        return res.status(201).json({
            accessToken,
            newAccount,
            newCandiate,
            newCandidateCareer,
        });
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

    const { name, age, email } = req.body;

    const candidateInput = {
        id: userId,
        name,
        age,
        email,
    };
    const newAccount = await db.UserAccount.create({
        ...accountInput,
    });

    const newCandiate = await db.StaffInformation.create({
        ...candidateInput,
        id: newAccount.id,
    });

    res.cookie("refreshToken", refreshToken, {
        httpOnly: false,
        maxAge: 3600 * 1000 * 1,
        secure: false,
    });

    return res.status(201).json({
        accessToken,
        newAccount,
        newCandiate,
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
    const user = await db.UserAccount.findOne({
        where: {
            username,
        },
    });

    if (!user || !comparePassword(password, user.password)) {
        throw new CustomError("Username hoặc password không trùng khớp", 404);
    }

    const accessToken = createToken(user.id, user.roleId, process.env.ACCESS_TOKEN_LT);
    const refreshToken = createToken(user.id, user.roleId, process.env.REFRESH_TOKEN_LT);

    await db.UserAccount.update(
        {
            refreshToken,
        },
        {
            where: {
                id: user.id,
            },
        },
    );
    res.cookie("refreshToken", refreshToken, {
        httpOnly: false,
        maxAge: 3600 * 1000 * 24 * 1,
        secure: false,
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
        httpOnly: false,
    });
    res.status(200).send();
});

const forgotPassword = asyncHandler(async (req, res) => {
    const { email, isUser } = req.body;
    let user;
    if (isUser) {
        user = await db.Candidate.findOne({
            where: {
                email: email,
            },
        });
    } else {
        user = await db.StaffInformation.findOne({
            where: {
                email: email,
            },
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
${process.env.CLIENT_URL}/reset?email=${email}&resetToken=${randomKey}>Nhấn vào đây</a>`;

    await sendCustomEmail(user.email, html);

    return res.status(200).json({ msg: "Đã gửi email" });
});

const checkResetToken = asyncHandler(async (req, res) => {
    const { resetToken, email, password, isUser } = req.body;

    if (!resetToken || !email || !password || !isUser) {
        throw new CustomError("Thiếu các trường dữ liệu", 400);
    }

    let rs;
    if (isUser) {
        rs = await db.Candidate.findOne({
            where: {
                email,
            },
        });
    } else {
        rs = await db.StaffInformation.findOne({
            where: {
                email,
            },
        });
    }

    if (!rs) {
        throw new CustomError(`Không có user có email đc nhập`, 400);
    }
    const user = await db.UserAccount.findOne({
        where: {
            id: rs.id,
            resetToken: resetToken,
            resetTokenExpired: { [Op.gte]: Date.now() },
        },
    });
    if (!user) {
        throw new CustomError("Token reset hết hạn", 401);
    }

    await db.UserAccount.update(
        {
            password: hashPassword(password),
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

const getCurrentUser = asyncHandler(async (req, res) => {
    const { id } = req.user;
    const currentUser = await db.Candidate.findByPk(id, {
        include: [{ model: db.Career }],
    });

    if (!currentUser) {
        throw new CustomError("Không tìm thấy user của id này", 400);
    }
    return res.status(200).json(currentUser);
});

const getCurrentStaff = asyncHandler(async (req, res) => {
    const { id } = req.user;
    const currentStaff = await db.StaffInformation.findByPK(id);
    if (!currentStaff) {
        throw new CustomError("Không tìm thấy staff của id này", 400);
    }
    return res.status(200).json(currentStaff);
});

const updateCandidate = asyncHandler(async (req, res) => {
    const { id } = req.user;
    const currentUser = await db.Candidate.findByPk(id);

    if (!currentUser) {
        throw new CustomError("Không tìm thấy staff của id này", 400);
    }
    const profileImageUrl = req.files["profileImage"] ? req.files["profileImage"][0] : null;
    const cvImageUrl = req.files["cvImage"] ? req.files["cvImage"][0] : null;

    if (profileImageUrl) {
        await deleteCloudinaryImage(currentUser.profileImage);
    }

    if (cvImageUrl) {
        await deleteCloudinaryImage(currentUser.cvImage);
    }

    await db.Candidate.update(
        {
            ...req.body,
            profileImage: profileImageUrl?.path,
            cvImage: cvImageUrl?.path,
        },
        {
            where: {
                id,
            },
        },
    );

    return res.status(204).send();
});

const renewAccessToken = asyncHandler(async (req, res) => {
    const { id, refreshToken, roleId } = req.user;

    const userAccount = await db.UserAccount.findOne({
        where: {
            id,
            refreshToken,
        },
    });

    if (!userAccount) {
        throw new CustomError("Không có user này để làm mới token", 401);
    }

    const newAccessToken = createToken(id, roleId, process.env.ACCESS_TOKEN_LT);

    return res.status(201).json({ accessToken: newAccessToken });
});

module.exports = {
    createCandidateAccount,
    createStaffAccount,
    loginAccount,
    logoutAccount,
    forgotPassword,
    checkResetToken,
    getCurrentStaff,
    getCurrentUser,
    updateCandidate,
    renewAccessToken,
};
