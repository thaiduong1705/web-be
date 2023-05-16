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
            data,
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
            salaryMin: salaryMin ?? null,
            salaryMax: salaryMax ?? null,
            ageMin: ageMin ?? null,
            ageMax: ageMax ?? null,
            experienceYear: experienceYear ?? null,
            academicLevelId,
            workingTypeId,
            endDate: new Date(endDate),
            needNumber,
            sex: sex ?? 2,
            jobDescribe,
            benefits,
            jobRequirement,
            contact,
            workingAddress,
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
            data: {
                post,
                pc,
                pd,
            },
        };
    } catch (error) {
        return error;
    }
};
