import db from "../models";

export const getCandidatesService = async () => {
    try {
        const res = await db.Candidate.findAll({
            include: [{ model: db.AcademicLevel, attributes: ["academicLevelName"] }],
        });

        return {
            err: res ? 0 : 1,
            msg: res ? "Oke" : "Fail to get candidate",
            res,
        };
    } catch (error) {
        return {
            error,
        };
    }
};
