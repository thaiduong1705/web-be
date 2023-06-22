import db from "../models";
import bcryptjs from "bcryptjs";
import { v4 } from "uuid";
import jwt from "jsonwebtoken";
require("dotenv").config();

const hashPassword = (password) => bcryptjs.hashSync(password, bcryptjs.genSaltSync(12));

export const registerService = async ({ userName, password }) => {
    try {
        const response = await db.User.findOrCreate({
            where: { userName },
            defaults: {
                userName,
                password: hashPassword(password),
                id: v4(),
            },
        });
        const token = response[1] && jwt.sign({ id: response[0].id }, process.env.SECRET_KEY, { expiresIn: "2d" });
        return {
            err: token ? 0 : 2,
            msg: token ? "Register is successful!" : "Name has already been used!",
            token: token || null,
        };
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const loginService = async ({ userName, password }) => {
    try {
        const response = await db.User.findOne({
            where: { userName },
            raw: true, // raw trả về json object
        });
        const isCorrectPass = response && bcryptjs.compareSync(password, response.password);
        const token = isCorrectPass && jwt.sign({ id: response.id }, process.env.SECRET_KEY, { expiresIn: "1d" });
        return {
            err: token ? 0 : 2,
            msg: token ? "Đăng nhập thành công" : response ? "Sai mật khẩu!" : "Không tìm thấy tên tài khoản",
            token: token || null,
        };
    } catch (error) {
        console.log(error);
    }
};
