import { Op } from "sequelize";
import db from "../models";
import bcryptjs from "bcryptjs";

const hashPassword = (password) => bcryptjs.hashSync(password, bcryptjs.genSaltSync(12));

export const getCurrentUserService = async (id) => {
    try {
        const response = await db.User.findOne({
            where: { id },
            attributes: {
                exclude: ["password"],
            },
        });
        return {
            err: response ? 0 : 1,
            msg: response ? "OK" : "Failed to get user.",
            res: response,
        };
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const changeInfoUserCurrentService = async (id, newUser, newPass) => {
    try {
        const findUser = await db.User.findOne({
            where: {
                userName: newUser,
                id: {
                    [Op.ne]: id,
                },
            },
        });

        if (findUser)
            return {
                err: 1,
                msg: "Đã có tài khoản sử dụng tên này!",
            };

        if (newPass) {
            await db.User.update(
                {
                    userName: newUser,
                    password: hashPassword(newPass),
                },
                {
                    where: {
                        id,
                    },
                },
            );
        } else {
            await db.User.update(
                {
                    userName: newUser,
                },
                {
                    where: {
                        id,
                    },
                },
            );
        }
        return {
            err: 0,
            msg: "Thay đổi thành công!",
        };
    } catch (error) {
        console.log(error);
        return error;
    }
};
