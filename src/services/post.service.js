import { v4 } from "uuid";
import db from "../models";

export const getPostsService = async () => {
    try {
        const res = await db.Post.findAll({
            include: [{ model: db.Company, as: "company", attributes: ["companyName", "imageLink"] }],
        });

        return {
            err: res ? 0 : 1,
            msg: res ? "Oke" : "Fail to get posts",
            res,
        };
    } catch (error) {
        return {
            error,
        };
    }
};

export const createPostService = async ({
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
    careerList,
    districtList,
    workingAddress,
}) => {
    try {
        let careerStatus = true;
        let districtStatus = true;
        const id = v4();
        const post = await db.Post.create({
            id: id,
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
            endDate: new Date(endDate),
            needNumber,
            sex,
            jobDescribe,
            benefits,
            jobRequirement,
            contact,
        });
        const pc = await db.PostCareer.bulkCreate(
            careerList.map((careerId) => {
                return {
                    careerId,
                    postId: post.id,
                };
            }),
        );
        const pd = await db.PostDistrict.bulkCreate(
            districtList.map((districtId) => {
                return {
                    districtId,
                    postId: post.id,
                };
            }),
        );

        return {
            err: careerStatus && districtStatus ? 0 : 2,
            msg: careerStatus && districtStatus ? "Oke" : "Fail to create new post",
            res: {
                post,
                pc,
                pd,
            },
        };
    } catch (error) {
        return error;
    }
};
