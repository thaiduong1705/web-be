import db from "../models";

export const getWorkingTypesService = async () => {
    try {
        const res = await db.WorkingType.findAll({
            order: [["keyCode", "ASC"]],
        });

        return {
            err: res ? 0 : 1,
            msg: res ? "Oke" : "Fail to get working types",
            res,
        };
    } catch (error) {
        return {
            error,
        };
    }
};
