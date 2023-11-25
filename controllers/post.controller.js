//import * as authService from "../services/auth.service";
const db = require("../models");
const asyncHander = require("express-async-handler");
const CustomError = require("../error/customError");
const { v4 } = require("uuid");
const createSlug = require("../utils/createSlug");

export const getAllPosts = asyncHander(async (req, res) => {
    const posts = await db.Post.findAll({
        include: [
            { model: db.Company, attributes: ["companyName", "imageLink"] },
            { model: db.Position, attributes: ["positionName"] },
            { model: db.AcademicLevel, attributes: ["academicLevelName"] },
            { model: db.WorkingType, attributes: ["workingTypeName"] },
            { model: db.Career, as: "Career" },
            { model: db.District, as: "District" },
        ],
    });
    return res.status(200).json(posts);
});

export const getPostById = asyncHander(async (req, res) => {
    const post = await db.Post.findByPk(req.params.pid);
    if (!post) {
        throw new CustomError(`Không có id ${req.params.pid}`, 400);
    }
    return res.status(200).json(post);
});

export const createPost = asyncHander(async (req, res) => {
    if (!Array.isArray(req.body.careerList)) {
        throw new CustomError("Không được thiếu ngành nghề của bài tuyển");
    }
    const newPost = await db.Post.create({
        ...req.body,
        id: v4(),
        slug: createSlug(req.body.jobTitle),
    });
    const insertCareer = req.body.careerList.map((c) => {
        return {
            postId: newPost.id,
            careerId: c,
        };
    });

    const newPostCareers = await db.Post.bulkCreate(insertCareer);
    return res.status(201).json({ newPost, newPostCareers });
});

export const updatePost = async (req, res) => {
    try {
        const {
            id,
            jobTitle,
            companyId,
            positionId,
            salaryMin,
            salaryMax,
            ageMin,
            ageMax,
            academicLevelId,
            workingTypeId,
            endDate,
            needNumber,
            sex,
            jobDescribe,
            benefits,
            jobRequirement,
            workingAddress,
            careerOldList,
            careerList,
            districtOldList,
            districtList,
            experienceYear,
        } = req.body;

        if (!id) {
            return res.status(400).json({
                err: 1,
                msg: "Missing Id!",
            });
        }
        if (
            !jobTitle ||
            !companyId ||
            !positionId ||
            !salaryMin ||
            !salaryMax ||
            !ageMin ||
            !ageMax ||
            isNaN(experienceYear) ||
            !academicLevelId ||
            !workingTypeId ||
            !endDate ||
            !needNumber ||
            !jobDescribe ||
            !benefits ||
            !jobRequirement ||
            !workingAddress ||
            !careerOldList ||
            !careerList ||
            careerList.length === 0 ||
            !districtOldList ||
            !districtList ||
            districtList.length === 0
        ) {
            return res.status(400).json({
                err: 1,
                msg: "Missing Input!",
            });
        }
        const response = await postService.updatePostService({ ...req.body });
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at updatePost: " + error,
        });
    }
};

export const getLimitPosts = async (req, res) => {
    try {
        const response = await postService.getLimitPostsService(req.query);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at getLimitPosts: " + error,
        });
    }
};

export const getRelatedPostsFromCareer = async (req, res) => {
    try {
        if (!req.query.postId) {
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
        const response = await postService.getRelatedPostFromCareerService(req.query);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at getCareerById: " + error,
        });
    }
};

export const applyPost = async (req, res) => {
    try {
        const { postId, candidateId } = req.body;
        if (!postId || !candidateId) {
            return res.status(400).json({
                err: 2,
                msg: "Missing input!",
            });
        }
        const response = await postService.applyPostService(req.body);
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            err: -1,
            msg: "Fail at applyPost: " + error,
        });
    }
};

export const changeStatusApplied = async (req, res) => {
    try {
        const { postId, candidateId, isApplied } = req.body;
        if (!postId || !candidateId) {
            return res.status(400).json({
                err: 1,
                msg: "Missing input!",
            });
        }
        const response = await postService.changeStatusApplied(req.body);
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            err: -1,
            msg: "Fail at applyPost: " + error,
        });
    }
};

export const deletePost = async (req, res) => {
    try {
        const { id } = req.body;
        if (!id) {
            return res.status(400).json({
                err: 1,
                msg: "Missing Id",
            });
        }
        const response = await postService.deletePostService(id);
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            err: -1,
            msg: "Fail at deletePost: " + error,
        });
    }
};

export const getDeletedPost = async (req, res) => {
    try {
        const response = await postService.getDeletedPostService();
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            err: -1,
            msg: "Fail at getDeletedPost: " + error,
        });
    }
};

export const getDeletedPostOfCompany = async (req, res) => {
    try {
        if (!req.params.id) {
            return res.status(400).json({
                err: 1,
                msg: "Missing company id!",
            });
        }
        const response = await postService.getDeletedPostOfCompanyService(req.params.id);
        return res.status(500).json(response);
    } catch (error) {
        console.log(error, "getDeletedPostOfCompany");
        return res.status(500).json({
            err: -1,
            msg: "Fail at getDeletedPostOfCompany: " + error,
        });
    }
};
