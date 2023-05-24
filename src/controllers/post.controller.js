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
            experienceYear,
            academicLevelId,
            workingTypeId,
            endDate,
            needNumber,
            sex,
            jobDescribe,
            benefits,
            jobRequirement,
            contact,
            workingAddress,
            careerList,
            districtList,
        } = req.body;
        if (
            !jobTitle ||
            !companyId ||
            !positionId ||
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
            experienceYear,
            academicLevelId,
            workingTypeId,
            endDate,
            needNumber,
            sex,
            jobDescribe,
            benefits,
            jobRequirement,
            contact,
            workingAddress,
            careerOldList,
            careerNewList,
            districtOldList,
            districtNewList,
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
            !academicLevelId ||
            !workingTypeId ||
            !endDate ||
            !needNumber ||
            !jobDescribe ||
            !benefits ||
            !jobRequirement ||
            !workingAddress ||
            !careerOldList ||
            !careerNewList ||
            careerNewList.length === 0 ||
            !districtOldList ||
            !districtNewList ||
            districtNewList.length === 0
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
