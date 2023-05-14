import db from "../models";
import bcryptjs from "bcryptjs";
import { v4 } from "uuid";
import jwt from "jsonwebtoken";
require("dotenv").config();

const hashPassword = (password) => bcryptjs.hashSync(password, bcryptjs.genSaltSync(12));

export const registerService = ({ name, password }) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await db.User.findOrCreate({
                where: { name },
                defaults: {
                    name,
                    password: hashPassword(password),
                    id: v4(),
                },
            });
            const token = response[1] && jwt.sign({ id: response[0].id }, process.env.SECRET_KEY, { expiresIn: "2d" });
            resolve({
                err: token ? 0 : 2,
                msg: token ? "Register is successful!" : "Name has already been used!",
                token: token || null,
            });
        } catch (error) {
            reject(error);
        }
    });

export const loginService = ({ name, password }) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await db.User.findOne({
                where: { name },
                raw: true, // raw trả về json object
            });
            const isCorrectPass = response && bcryptjs.compareSync(password, response.password);
            const token = isCorrectPass && jwt.sign({ id: response.id }, process.env.SECRET_KEY, { expiresIn: "2d" });
            resolve({
                err: token ? 0 : 2,
                msg: token ? "Login is successful!" : response ? "Password is not correct!" : "Not found username",
                token: token || null,
            });
        } catch (error) {
            reject(error);
        }
    });
