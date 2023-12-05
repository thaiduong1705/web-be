const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const CustomError = require("../error/customError");
const db = require("../models");
const verifyToken = asyncHandler(async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new CustomError("Không thể lấy token", 401);
    }

    const accessToken = authHeader.split(" ")[1];
    try {
        const decode = jwt.verify(accessToken, process.env.SECRET_KEY);
        req.user = { id: decode._id, roleId: decode._roleId };
        next();
    } catch (error) {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) {
            throw new CustomError("Không có refreshToken", 401);
        }

        try {
            const decodeRefresh = jwt.verify(refreshToken, process.env.SECRET_KEY);
            const user = await db.UserAccount.findOne({
                where: {
                    id: decodeRefresh._id,
                    refreshToken: refreshToken,
                },
            });

            if (!user) {
                throw new CustomError("Không có user có refresh token này", 404);
            }

            const newAccessToken = jwt.sign({ id: user.id, roleId: user.roleId }, process.env.SECRET_KEY, {
                expiresIn: process.env.ACCESS_TOKEN_LT,
            });
        } catch (error) {
            throw new CustomError("Refresh token hết hạn", 401);
        }
    }
});

const checkRole = (allowedRoles) => async (req, res, next) => {
    try {
        const { roleId } = req.user;
        if (!allowedRoles.includes(roleId)) {
            throw new CustomError("Không phải admin", 401);
        }
        next();
    } catch (error) {
        next(error);
    }
};

const checkAdminOrNot = checkRole([1]);
const checkCandidateOrNot = checkRole([2]);

module.exports = { verifyToken, checkAdminOrNot, checkCandidateOrNot };
