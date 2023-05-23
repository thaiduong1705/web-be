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
    console.log(req.body);
    try {
        const {
            candidateName,
            age,
            // profileImage,
            // CVImage,
            phoneNumber,
            email,
            homeAddress,
            gender,
            experienceYear,
            academicLevelId,
            careerList,
            districtList,
        } = req.body;
        if (
            !candidateName ||
            !age ||
            // !profileImage ||
            // !CVImage ||
            !phoneNumber ||
            !email ||
            !homeAddress ||
            isNaN(gender) ||
            !experienceYear ||
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
        console.log(response);
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
        const response = await candidateService.getCompanyByIdService(req.params);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at getAllCandidates: " + error,
        });
    }
};

export const updateCandidate = async (req, res) => {
    try {
        if (!req.params.id) {
            return res.status(400).json({
                err: 1,
                msg: "Missing id!",
            });
        }
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
            careerOldList,
            careerNewList,
            districtOldList,
            districtNewList,
        } = req.body;
        if (
            !candidateName ||
            !age ||
            !profileImage ||
            !CVImage ||
            !phoneNumber ||
            !email ||
            !homeAddress ||
            !gender ||
            !experienceYear ||
            !academicLevelId ||
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
        const response = await candidateService.updateCompany({ ...req.body, ...req.params });
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at updateCompany: " + error,
        });
    }
};
