import * as academicLevelService from "../services/academicLevel.service";

export const getAllAcademicLevels = async (req, res) => {
    try {
        const response = await academicLevelService.getAcademicLevelsService();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at getAllAcademicLevels: " + error,
        });
    }
};

export const createAcademicLevel = async (req, res) => {
    try {
        const { alName } = req.body;
        if (!alName) {
            return res.status(400).json({
                err: 1,
                msg: "Missing input!",
            });
        }
        const response = await academicLevelService.createAcademicLevelService(req.body);
        return res.status(200).json(response);
    } catch (error) {
        res.status(500).json({
            err: -1,
            msg: "Fail at createAcademicLevel: " + error,
        });
    }
};
