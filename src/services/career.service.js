import db from "../models";

export const getCareersService = async () => {
    try {
        const res = await db.Career.findAll({});

        return {
            err: res ? 0 : 1,
            msg: res ? "Oke" : "Fail to get careers",
            res,
        };
    } catch (error) {
        return {
            error,
        };
    }
};
