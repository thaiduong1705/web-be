const db = require("../models");
const { Op } = require("sequelize");
const { v4 } = require("uuid");
const asyncHandler = require("express-async-handler");
const createSlug = require("../utils/createSlug");
const CustomError = require("../error/customError");

const getAllCompanies = asyncHandler(async (req, res) => {
    const companies = await db.Company.findAll();
    return res.status(200).json(companies);
});

const createCompany = asyncHandler(async (req, res) => {
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

const getCompanyById = asyncHandler(async (req, res) => {
    const company = await db.Company.findByPk(req.params.cid);

    if (!company) {
        throw new CustomError(`Không có id ${req.params.cid}`, 400);
    }
    return res.status(200).json(company);
});

const updateCompany = asyncHandler(async (req, res) => {
    const company = await db.Company.findByPk(req.params.cid);
    if (!company) {
        throw new CustomError(`Không có id ${req.params.cid}`, 400);
    }

    await db.Company.update(
        {
            ...req.body,
            slug: createSlug(req.body.companyName),
        },
        {
            where: {
                id: req.params.cid,
            },
        },
    );

    const { careerList } = req.body;

    if (Array.isArray(careerList)) {
        await db.CompanyCareer.destroy({
            where: {
                companyId: req.params.cid,
            },
        });
        const insertBulk = req.body.careerList.map((c) => {
            return {
                companyId: req.params.cid,
                careerId: c,
            };
        });

        await db.CompanyCareer.bulkCreate(insertBulk);
    }

    return res.status(204).send();
});

const deleteCompany = asyncHandler(async (req, res) => {
    const company = await db.Company.findByPk(req.params.cid);
    if (!company) {
        throw new CustomError(`Không có id ${req.params.cid}`, 400);
    }

    await db.Company.destroy({
        where: {
            id: req.params.cid,
        },
    });

    return res.status(204).send();
});

const getFilterCompanies = asyncHandler(async (req, res) => {
    const { companyName } = req.query;
    const queries = {};
    if (companyName) {
        queries[companyName] = { [Op.substring]: companyName };
    }

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;
    const skip = (page - 1) * limit;
    // const subQuery = {};
    // const offset = !page || +page <= 1 ? 0 : +page - 1;
    // const numberOfItems = +limit || +process.env.LIMIT_BOOK;
    // queries.offset = offset * numberOfItems;
    // queries.limit = numberOfItems;

    // if (order) queries.order = [order];
    // if (companyName) query.companyName = { [Op.substring]: companyName };
    // if (careerId) subQuery.id = { [Op.eq]: careerId };
    const companies = await db.Company.findAll({
        where: {
            ...queries,
        },
        include: [{ model: db.Career }],
        limit: limit,
        offset: skip,
    });
    return res.status(200).json(companies);
});

const getRelatedCompaniesFromCareer = asyncHandler(async (req, res) => {
    if (!Array.isArray(req.query.careerIds)) {
        throw new CustomError(`Thiếu id nghề`, 400);
    }
    if (!req.query.companyId) {
        throw new CustomError(`Thiếu id công ty`, 400);
    }

    const companies = db.Company.findAll({
        where: {
            id: {
                [Op.ne]: req.query.companyId,
            },
        },
        include: [{ model: db.Career, where: { id: { [Op.or]: req.query.careerIds } } }],
    });
    return res.status(200).json(companies);
});

module.exports = {
    getAllCompanies,
    getCompanyById,
    createCompany,
    updateCompany,
    deleteCompany,
    getFilterCompanies,
    getRelatedCompaniesFromCareer,
};
