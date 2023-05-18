import db from "../models";

export const getWorkingTypesService = async () => {
    try {
        const res = await db.WorkingType.findAll({});

        return {
            err: res ? 0 : 1,
            msg: res ? "Oke" : "Fail to get working types",
            data,
        };
    } catch (error) {
        return {
            error,
        };
    }
};
