import db from "../models";

export const getAcademicLevelsService = async () => {
    try {
        const res = await db.AcademicLevel.findAll({});

        return {
            err: res ? 0 : 1,
            msg: res ? "Oke" : "Fail to get academic levels",
            data,
        };
    } catch (error) {
        return {
            error,
        };
    }
};
