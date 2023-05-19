import { v4 } from "uuid";
import db from "../models";

export const getPostsService = async () => {
    try {
        const res = await db.Post.findAll({
            include: [
                { model: db.Company, as: "company", attributes: ["companyName", "imageLink"] },
                { model: db.Position, attributes: ["positionName"] },
            ],
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

export const getPostByIdService = async ({ id }) => {
    try {
        const response = await db.Post.findByPk(id, {
            include: [
                { model: db.Career, as: "Career", attributes: ["careerName"] },
                { model: db.District, as: "District", attributes: ["districtName"] },
            ],
        });
        return {
            err: response ? 0 : 2,
            msg: response ? "Oke" : "Fail to get company by id",
            data: response,
        };
    } catch (error) {
        return error;
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
            salaryMin: salaryMin,
            salaryMax: salaryMax,
            ageMin: ageMin,
            ageMax: ageMax,
            experienceYear: experienceYear,
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
            err: post && pc && pd ? 0 : 2,
            msg: post && pc && pd ? "Oke" : "Fail to create new post",
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

export const updatePostService = async ({
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
}) => {
    try {
        let careerDel = [];
        let districtDel = [];
        const res = await db.Post.update(
            {
                id: id,
                jobTitle,
                companyId,
                positionId,
                salaryMin: salaryMin,
                salaryMax: salaryMax,
                ageMin: ageMin,
                ageMax: ageMax,
                experienceYear: experienceYear,
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
            },
            {
                where: {
                    id: id,
                },
            },
        );
        const post = await db.Company.findByPk(id);

        for (const oldId of careerOldList) {
            const temp = await db.PostCareer.destroy({
                where: {
                    [Op.and]: [{ postId: post.id }, { careerId: oldId }],
                },
            });
            careerDel.push(temp);
        }

        for (const oldId of districtOldList) {
            const temp = await db.PostDistrict.destroy({
                where: {
                    [Op.and]: [{ postId: post.id }, { districtId: oldId }],
                },
            });
            districtDel.push(temp);
        }

        const hasZeroValues = careerDel.some((value) => value === 0) && districtDel.some((value) => value === 0);

        const pc = await db.PostCareer.bulkCreate(
            careerNewList.map((careerId) => {
                return {
                    careerId,
                    postId: post.id,
                };
            }),
        );
        const pd = await db.PostDistrict.bulkCreate(
            districtNewList.map((districtId) => {
                return {
                    districtId,
                    postId: post.id,
                };
            }),
        );

        return {
            err: post && pc && pd && !hasZeroValues ? 0 : 2,
            msg: post && pc && pd && !hasZeroValues ? "Oke" : "Fail to create new post",
            data: {
                post,
                pc,
                pd,
                hasZeroValues,
            },
        };
    } catch (error) {
        return error;
    }
};
