import * as companyService from "../services/company.service";

const db = require("../models");
const { v4 } = require("uuid");
const asyncHandler = require("express-async-handler");
const createSlug = require("../utils/createSlug");
const CustomError = require("../error/customError");

export const getAllCompanies = asyncHandler(async (req, res) => {
    const companies = await db.Company.findAll();
    return res.status(200).json(companies);
});

export const createCompany = asyncHandler(async (req, res) => {
    const company = await db.Company.create({ ...req.body, slug: createSlug(req.body?.companyName), id: v4() });
    let companycareer = null;
    if (Array.isArray(req.body.careerList)) {
        const insertedCompanyCareer = req.body.careerList.map((careerId) => {
            return {
                companyId: company.id,
                careerId,
            };
        });
        companycareer = await db.CompanyCareer.bulkCreate(insertedCompanyCareer);
    }

    return res.status(201).json({
        company,
        companycareer,
    });
});

export const getCompanyById = asyncHandler(async (req, res) => {
    const company = await db.Company.findByPk(req.params.cid);

    if (!company) {
        throw new CustomError(`Không có id ${req.params.cid}`, 400);
    }
    return res.status(200).json(company);
});

export const updateCompany = asyncHandler(async (req, res) => {});

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
