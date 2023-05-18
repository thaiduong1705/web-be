import db from "../models";

export const getDistrictsService = async () => {
    try {
        const res = await db.District.findAll({});

        return {
            err: res ? 0 : 1,
            msg: res ? "Oke" : "Fail to get districts",
            data,
        };
    } catch (error) {
        return {
            error,
        };
    }
};
