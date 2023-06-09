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

export const createCandidate = async (req, res) => {
    try {
        const {
            candidateName,
            age,
            profileImage,
            CVImage,
            phoneNumber,
            email,
            homeAddress,
            gender,
            experienceYear,
            academicLevelId,
            positionId,
            careerList,
            districtList,
            candidateCivilId,
        } = req.body;
        if (
            !candidateName ||
            !age ||
            !profileImage ||
            !CVImage ||
            !phoneNumber ||
            !email ||
            !homeAddress ||
            !positionId ||
            isNaN(gender) ||
            isNaN(experienceYear) ||
            experienceYear <= -1 ||
            !candidateCivilId ||
            !academicLevelId ||
            !careerList ||
            careerList.length === 0 ||
            !districtList ||
            districtList.length === 0
        ) {
            return res.status(400).json({
                err: 1,
                msg: "Missing Input!",
            });
        }
        const response = await candidateService.createCandidateService(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at createCandidate: " + error,
        });
    }
};

export const getCandidateById = async (req, res) => {
    try {
        if (!req.params.id) {
            return res.status(400).json({
                err: 1,
                msg: "Missing id!",
            });
        }
        const response = await candidateService.getCandidateByIdService(req.params);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at getCandidateById: " + error,
        });
    }
};

export const updateCandidate = async (req, res) => {
    try {
        const {
            id,
            candidateName,
            age,
            profileImage,
            CVImage,
            phoneNumber,
            email,
            homeAddress,
            gender,
            experienceYear,
            academicLevelId,
            candidateCivilId,
            positionId,
            careerOldList,
            careerNewList,
            districtOldList,
            districtNewList,
        } = req.body;
        if (!id) {
            return res.status(400).json({
                err: 1,
                msg: "Missing id!",
            });
        }
        if (
            !candidateName ||
            !age ||
            !profileImage ||
            !CVImage ||
            !phoneNumber ||
            !email ||
            !homeAddress ||
            isNaN(gender) ||
            isNaN(experienceYear) ||
            !academicLevelId ||
            !candidateCivilId ||
            !positionId ||
            !careerOldList ||
            careerOldList.length === 0 ||
            !districtOldList ||
            districtOldList.length === 0 ||
            !careerNewList ||
            careerNewList.length === 0 ||
            !districtNewList ||
            districtNewList.length === 0
        ) {
            return res.status(400).json({
                err: 1,
                msg: "Missing Input!",
            });
        }
        const response = await candidateService.updateCandidate({ ...req.body, ...req.params });
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at updateCompany: " + error,
        });
    }
};

export const getLimitCandidates = async (req, res) => {
    try {
        const response = await candidateService.getLimitCandidatesService(req.query);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at getLimitCompanies: " + error,
        });
    }
};
