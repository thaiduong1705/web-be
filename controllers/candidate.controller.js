import * as candidateService from "../services/candidate.service";
const db = require("../models");
const asyncHandler = require("express-async-handler");

export const getAllCandidates = asyncHandler(async (req, res) => {
    const cLists = await db.Candidate.findAll();
    return res.status(200).json(cLists);
});

export const createCandidate = asyncHandler(async (req, res) => {});

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
