import { ValidationError } from "sequelize";
import * as candidateService from "../services/candidate.service";

export const getAllCandidates = async (req, res) => {
    try {
        const response = await candidateService.getCandidatesService();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at getAllCandidates: " + error,
        });
    }
};
