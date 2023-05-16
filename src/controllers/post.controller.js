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
            !salaryMin ||
            !salaryMax ||
            !ageMin ||
            !ageMax ||
            !experienceYear ||
            !academicLevelId ||
            !workingTypeId ||
            !endDate ||
            !needNumber ||
            !sex ||
            !jobDescribe ||
            !benefits ||
            !jobRequirement ||
            !contact ||
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
