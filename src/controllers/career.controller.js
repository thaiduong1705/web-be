import * as careerService from "../services/career.service";

export const getAllCareers = async (req, res) => {
    try {
        const response = await careerService.getCareersService();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at getAllCareers: " + error,
        });
    }
};

export const createCareer = async (req, res) => {
    try {
        const { careerName } = req.body;
        if (!careerName) {
            return res.status(400).json({
                err: 1,
                msg: "Missing input!",
            });
        }
        const response = await careerService.createCareerService(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at createCareer: " + error,
        });
    }
};
