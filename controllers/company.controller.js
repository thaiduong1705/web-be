import { ValidationError } from "sequelize";
import * as companyService from "../services/company.service";

export const getAllCompanies = async (req, res) => {
    try {
        const response = await companyService.getCompaniesService();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at getAllCompanies: " + error,
        });
    }
};

export const createCompany = async (req, res) => {
    try {
        const { companyName, imageLink, url, address, email, phone, introduction, companySize, careerList } = req.body;
        if (
            !companyName ||
            !address ||
            !introduction ||
            !companySize ||
            !careerList ||
            !email ||
            !phone ||
            careerList.length === 0
        ) {
            return res.status(400).json({
                err: 1,
                msg: "Missing Input!",
            });
        }
        const response = await companyService.createCompanyService(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at createCompany: " + error,
        });
    }
};

export const getCompanyById = async (req, res) => {
    try {
        if (!req.params.id) {
            return res.status(400).json({
                err: 1,
                msg: "Missing id!",
            });
        }
        const response = await companyService.getCompanyByIdService(req.params);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at getAllCompanies: " + error,
        });
    }
};

export const updateCompany = async (req, res) => {
    try {
        const { id, companyName, imageLink, url, address, introduction, companySize, careerOldList, careerNewList } =
            req.body;
        if (!id) {
            return res.status(400).json({
                err: 1,
                msg: "Missing id!",
            });
        }
        if (
            !companyName ||
            !address ||
            !introduction ||
            !companySize ||
            !careerOldList ||
            !careerNewList ||
            careerNewList.length === 0
        ) {
            return res.status(400).json({
                err: 1,
                msg: "Missing Input!",
            });
        }
        const response = await companyService.updateCompany({ ...req.body, ...req.params });
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at updateCompany: " + error,
        });
    }
};

export const getLimitCompanies = async (req, res) => {
    try {
        const response = await companyService.getLimitCompaniesService(req.query);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at getLimitCompanies: " + error,
        });
    }
};

export const getRelatedCompaniesFromCareer = async (req, res) => {
    try {
        if (!req.query.companyId) {
            return res.status(400).json({
                err: 1,
                msg: "Missing id!",
            });
        }
        if (!req.query.careerIds) {
            return res.status(400).json({
                err: 1,
                msg: "Missing career ids!",
            });
        }
        const response = await companyService.getRelatedCompanyFromCareerService(req.query);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at getCareerById: " + error,
        });
    }
};
