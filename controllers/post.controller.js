const db = require("../models");
const asyncHander = require("express-async-handler");
const CustomError = require("../error/customError");
const { v4 } = require("uuid");
const createSlug = require("../utils/createSlug");
const { Op } = require("sequelize");

const getAllPosts = asyncHander(async (req, res) => {
    const posts = await db.Post.findAll({
        include: [
            { model: db.Company },
            { model: db.Position, attributes: ["positionName"] },
            { model: db.AcademicLevel, attributes: ["academicLevelName"] },
            { model: db.WorkingType, attributes: ["workingTypeName"] },
            { model: db.Career, attributes: ["careerName"] },
        ],
    });
    return res.status(200).json({ count: posts.length, posts });
});

const getPostById = asyncHander(async (req, res) => {
    const post = await db.Post.findByPk(req.params.pid);
    if (!post) {
        throw new CustomError(`Không có id ${req.params.pid}`, 400);
    }
    return res.status(200).json(post);
});

const createPost = asyncHander(async (req, res) => {
    if (!Array.isArray(req.body.careerList)) {
        throw new CustomError("Không được thiếu ngành nghề của bài tuyển");
    }
    const newPost = await db.Post.create({
        ...req.body,
        slug: createSlug(req.body.jobTitle),
        endDate: new Date(req.body.endDate),
        id: v4(),
    });
    const insertCareer = req.body.careerList.map((c) => {
        return {
            postId: newPost.id,
            careerId: c,
        };
    });

    const newPostCareers = await db.PostCareer.bulkCreate(insertCareer);
    return res.status(201).json({ newPost, newPostCareers });
});

const updatePost = asyncHander(async (req, res) => {
    const targetPost = await db.Post.findByPk(req.params.pid);

    if (!targetPost) {
        throw new CustomError(`Không có id ${req.params.pid}`, 400);
    }

    await db.Post.update(
        {
            ...req.body,
            slug: createSlug(req.body.jobTitle),
        },
        {
            where: {
                id: req.params.pid,
            },
        },
    );

    const { careerList } = req.body;

    if (Array.isArray(careerList)) {
        await db.PostCareer.destroy({
            where: {
                postId: req.params.pid,
            },
        });
        const insertBulk = req.body.careerList.map((c) => {
            return {
                postId: req.params.pid,
                careerId: c,
            };
        });

        await db.PostCareer.bulkCreate(insertBulk);
    }

    return res.status(204).send();
});

const getFilterPosts = asyncHander(async (req, res) => {
    const { jobTitle, salaryMax, salaryMin, experienceYear, careerId, academicLevelId, positionId, workingTypeId } =
        req.query;
    const filter = {};
    if (jobTitle) {
        console.log("oke1");
        filter.jobTitle = { [Op.substring]: jobTitle };
    }

    if (salaryMax) {
        console.log("oke2");

        filter.salaryMax = { [Op.lte]: salaryMax };
    }
    if (salaryMin) {
        console.log("oke3");

        filter.salaryMin = { [Op.gte]: salaryMin };
    }

    if (experienceYear) {
        console.log("oke4");

        filter.experienceYear = { [Op.lte]: experienceYear };
    }

    if (positionId) {
        console.log("oke6");
        filter.positionId = positionId;
    }

    const subFilter = {};
    if (careerId) {
        console.log("oke5");

        subFilter.id = careerId;
    }

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const post = await db.Post.findAll({
        where: {
            ...filter,
        },
        include: [
            { model: db.Career, attributes: ["id", "careerName"], where: { ...subFilter } },
            { model: db.AcademicLevel },
            { model: db.Position },
            { model: db.WorkingType },
            { model: db.Company },
        ],
        limit: limit,
        offset: skip,
    });
    return res.status(200).json(post);
});

const getRelatedPostsFromCareer = asyncHander(async (req, res) => {
    if (!Array.isArray(req.query.careerIds)) {
        throw new CustomError(`Thiếu id nghề`, 400);
    }
    if (!req.query.postId) {
        throw new CustomError(`Thiếu id công ty`, 400);
    }

    const posts = db.Post.findAll({
        where: {
            id: {
                [Op.ne]: req.query.postId,
            },
        },
        include: [{ model: db.Career, where: { id: { [Op.or]: req.query.careerIds } } }],
    });
    return res.status(200).json(posts);
});

const applyPost = asyncHander(async (req, res) => {
    if (!req.query.postId || !req.query.candidateId) {
        throw new CustomError("Thiếu các id cần thiết ứng tuyển", 400);
    }
    const [newApply, created] = await db.CandidatePost.findOrCreate({
        where: {
            postId: req.query.postId,
            candidateId: req.query.candidateId,
        },
    });

    if (created) {
        throw new CustomError("Đã ứng tuyển rồi", 400);
    }

    return res.status(204).send();
});

const changeStatusApplied = asyncHander(async (req, res) => {
    if (!req.query.postId || !req.query.candidateId) {
        throw new CustomError("Thiếu các id cần thiết ứng tuyển", 400);
    }

    const target = await db.CandidatePost.findOne({
        where: {
            postId: req.query.postId,
            candidateId: req.query.candidateId,
        },
    });
    await db.CandidatePost.update({
        isApplied: !target?.isApplied,
    });

    return res.status(204).send();
});

const deletePost = asyncHander(async (req, res) => {
    const target = await db.Post.findByPk(req.params.pid);
    if (!target) {
        throw new CustomError(`Không có id ${req.params.pid}`, 400);
    }

    await db.Post.delete({
        where: {
            id: req.params.pid,
        },
    });

    return res.status(204).send();
});

const getDeletedPosts = asyncHander(async (req, res) => {
    const deletedPosts = await db.Post.findAll({
        include: [
            { model: db.Company },
            { model: db.Position, attributes: ["positionName"] },
            { model: db.AcademicLevel, attributes: ["academicLevelName"] },
            { model: db.WorkingType, attributes: ["workingTypeName"] },
            { model: db.Career, attributes: ["careerName"] },
        ],
        where: {
            deletedAt: { [Op.not]: null },
        },
        paranoid: false,
    });
    return res.status(200).json(deletedPosts);
});

const getDeletedPostOfCompany = asyncHander(async (req, res) => {
    const deletedPosts = await db.Post.findAll({
        where: {
            deletedAt: { [Op.not]: null },
        },
        paranoid: false,
        include: [
            {
                model: db.Company,
                attributes: ["companyName", "imageLink"],
                where: { id: req.query.companyId },
            },
            { model: db.Company },
            { model: db.Position, attributes: ["positionName"] },
            { model: db.AcademicLevel, attributes: ["academicLevelName"] },
            { model: db.WorkingType, attributes: ["workingTypeName"] },
            { model: db.Career, attributes: ["careerName"] },
        ],
    });
    return res.status(200).json(deletedPosts);
});

module.exports = {
    getAllPosts,
    getDeletedPostOfCompany,
    getDeletedPosts,
    getFilterPosts,
    getPostById,
    getRelatedPostsFromCareer,
    createPost,
    updatePost,
    deletePost,
    applyPost,
    changeStatusApplied,
};
