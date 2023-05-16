import * as academicLevelService from "../services/academicLevel.service";

export const getAllAcademicLevels = async (req, res) => {
    try {
        const response = await academicLevelService.getAcademicLevelService();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at getAllAcademicLevels: " + error,
        });
    }
};
