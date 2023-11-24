//import * as authService from "../services/auth.service";
import * as postService from "../services/post.service";

export const getAllPosts = async (req, res) => {
    try {
        const response = await postService.getPostsService();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at getAllPosts: " + error,
        });
    }
};

export const getPostById = async (req, res) => {
    try {
        if (!req.params.id) {
            return res.status(400).json({
                err: 1,
                msg: "Missing id!",
            });
        }
        const response = await postService.getPostByIdService(req.params);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at getPostById: " + error,
        });
    }
};

export const createPost = async (req, res) => {
    try {
        const {
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
            jobDescribe,
            benefits,
            jobRequirement,
            workingAddress,
            careerList,
            districtList,
            experienceYear,
        } = req.body;
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
            !careerList ||
            careerList.length === 0 ||
            !districtList ||
            districtList.length === 0
        ) {
            return res.status(400).json({
                err: 1,
                msg: "Missing input!",
            });
        }
        const response = await postService.createPostService(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at createPost: " + error,
        });
    }
};

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
