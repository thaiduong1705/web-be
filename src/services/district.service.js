import db, { sequelize } from "../models";

export const getDistrictsService = async () => {
    try {
        const res = await db.District.findAll({
            order: [["keyCode", "ASC"]],
        });

        return {
            err: res ? 0 : 1,
            msg: res ? "Oke" : "Fail to get districts",
            res,
        };
    } catch (error) {
        return {
            error,
        };
    }
};
