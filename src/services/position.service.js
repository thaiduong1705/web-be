import db from "../models";

export const getPositionsService = async () => {
    try {
        const res = await db.Position.findAll({
            order: [["keyCode", "ASC"]],
        });

        return {
            err: res ? 0 : 1,
            msg: res ? "Oke" : "Fail to get positions",
            res,
        };
    } catch (error) {
        return {
            error,
        };
    }
};
