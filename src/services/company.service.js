import db from "../models";

export const getCompaniesService = async () => {
    try {
        const res = await db.Company.findAll({
            //include: [{ model: db.Company, as: "company", attributes: ["companyName", "imageLink"] }],
        });

        return {
            err: res ? 0 : 1,
            msg: res ? "Oke" : "Fail to get companies",
            res,
        };
    } catch (error) {
        return {
            error,
        };
    }
};
