import { v4 } from "uuid";
import db from "../models";
import { Op } from "sequelize";
import { sendEmailService } from "./emailService";

export const getPostsService = async () => {
    try {
        const res = await db.Post.findAll({
            include: [
                { model: db.Company, as: "Company", attributes: ["companyName", "imageLink"] },
                { model: db.Position, as: "Position", attributes: ["positionName"] },
                { model: db.AcademicLevel, as: "AcademicLevel" },
                { model: db.WorkingType, as: "WorkingType" },
                { model: db.Career, as: "Career" },
                { model: db.District, as: "District" },
            ],
        });

        return {
            err: res ? 0 : 1,
            msg: res ? "Oke" : "Fail to get posts",
            res,
        };
    } catch (error) {
        return error;
    }
};

export const getPostByIdService = async ({ id }) => {
    try {
        const res = await db.Post.findByPk(id, {
            include: [
                { model: db.AcademicLevel, as: "AcademicLevel" },
                { model: db.WorkingType, as: "WorkingType" },
                { model: db.Company, as: "Company" },
                { model: db.Position, as: "Position" },
                { model: db.Career, as: "Career" },
                { model: db.District, as: "District" },
                {
                    model: db.Candidate,
                    as: "Candidate",
                    include: [
                        { model: db.AcademicLevel, as: "AcademicLevel" },
                        { model: db.Position, as: "Position" },
                    ],
                },
            ],
        });
        return {
            err: res ? 0 : 2,
            msg: res ? "Oke" : "Fail to get company by id",
            res,
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
    careerList,
    districtList,
    workingAddress,
}) => {
    try {
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
            workingAddress,
            appliedCount: 0,
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
            res: {
                post,
                pc,
                pd,
            },
        };
    } catch (error) {
        console.log(error);
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
    workingAddress,
    careerOldList,
    careerList,
    districtOldList,
    districtList,
}) => {
    try {
        let careerDel = [];
        let districtDel = [];
        const postUpdate = await db.Post.update(
            {
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
                workingAddress,
            },
            {
                where: {
                    id: id,
                },
            },
        );
        const post = await db.Post.findByPk(id);
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
            err: postUpdate[0] === 1 && pc && pd && !hasZeroValues ? 0 : 2,
            msg: postUpdate[0] && pc && pd && !hasZeroValues ? "Oke" : "Fail to create new post",
            res: {
                postUpdate,
                pc,
                pd,
                hasZeroValues,
            },
        };
    } catch (error) {
        return error;
    }
};

export const getLimitPostsService = async ({ page, limit, order = ["createdAt", "desc"], ...query }) => {
    try {
        const filter = {};
        const queries = {};
        const subFilter = {};
        const offset = !page || +page <= 1 ? 0 : +page - 1;
        const numberOfItems = +limit || +process.env.LIMIT_BOOK;
        queries.offset = offset * numberOfItems;
        queries.limit = numberOfItems;

        if (order) queries.order = [order];

        if (query.jobTitle) filter.jobTitle = { [Op.substring]: query.jobTitle };
        if (query.age && query.age.length !== 0) {
            filter.ageMax = { [Op.lte]: query.age[1] };
            filter.ageMin = { [Op.gte]: query.age[0] };
        }

        if (query.salary && query.salary.length !== 0) {
            if (query.salary[0] === 0 && query.salary[1] === 0) {
                filter.salaryMin = { [Op.eq]: query.salary[0] };
                filter.salaryMax = { [Op.eq]: query.salary[1] };
            } else {
                filter.salaryMin = { [Op.gte]: query.salary[0] };
                filter.salaryMax = { [Op.lte]: query.salary[1] };
            }
        }

        if (query.sex) filter.sex = { [Op.eq]: query.sex };
        if (query.experienceYear) {
            if (query.experienceYear <= 4) {
                filter.experienceYear = { [Op.lte]: query.experienceYear };
            }
            if (query.experienceYear === 5) filter.experienceYear = { [Op.gte]: query.experienceYear };
        }
        if (query.createdAt) filter.createdAt = { [Op.between]: [...query.createdAt] };

        if (query.academicLevelId) filter.academicLevelId = { [Op.eq]: query.academicLevelId };
        if (query.positionId) filter.positionId = { [Op.eq]: query.positionId };
        if (query.workingTypeId) filter.workingTypeId = { [Op.eq]: query.workingTypeId };
        if (query.career && query.career.length !== 0) subFilter.career = { [Op.or]: query.career };
        if (query.district && query.district.length !== 0) subFilter.district = { [Op.or]: query.district };
        const count = await db.Post.count({
            where: filter,
            include: [
                {
                    model: db.Career,
                    as: "Career",
                    attributes: ["id", "careerName"],
                    where: subFilter.career
                        ? {
                              id: subFilter.career,
                          }
                        : null,
                },
                {
                    model: db.District,
                    as: "District",
                    attributes: ["id", "districtName"],
                    where: subFilter.district
                        ? {
                              id: subFilter.district,
                          }
                        : null,
                },
            ],
            distinct: true,
        });
        const res = await db.Post.findAll({
            where: filter,
            include: [
                {
                    model: db.Career,
                    as: "Career",
                    attributes: ["id", "careerName"],
                    where: subFilter.career
                        ? {
                              id: subFilter.career,
                          }
                        : null,
                },
                {
                    model: db.District,
                    as: "District",
                    attributes: ["id", "districtName"],
                    where: subFilter.district
                        ? {
                              id: subFilter.district,
                          }
                        : null,
                },
                { model: db.Company, as: "Company", attributes: ["companyName", "imageLink"] },
                { model: db.AcademicLevel, as: "AcademicLevel", attributes: ["academicLevelName"] },
                { model: db.Position, as: "Position", attributes: ["positionName"] },
                { model: db.WorkingType, as: "WorkingType", attributes: ["workingTypeName"] },
            ],
            ...queries,
            distinct: true,
        });
        return {
            err: res ? 0 : 1,
            msg: res ? "Oke" : "Cant found posts.",
            count,
            res,
        };
    } catch (error) {
        return error;
    }
};

export const getRelatedPostFromCareerService = async ({ postId, careerIds }) => {
    try {
        const res = await db.Post.findAll({
            where: {
                id: {
                    [Op.ne]: postId,
                },
            },
            include: [
                { model: db.Career, as: "Career", where: { id: { [Op.or]: careerIds } } },
                { model: db.Company, as: "Company" },
                { model: db.Position, as: "Position" },
                { model: db.District, as: "District" },
            ],
            district: true,
        });
        return {
            err: res ? 0 : 1,
            msg: res ? "Oke" : "Cant found posts.",
            res,
        };
    } catch (error) {
        console.log(error);
    }
};

export const applyPostService = async ({ postId, candidateId }) => {
    try {
        const [candidatePost, created] = await db.CandidatePost.findOrCreate({
            where: { candidateId: candidateId, postId: postId },
            default: {
                postId,
                candidateId,
            },
        });
        if (created) {
            return {
                err: 0,
                msg: "Đăng kí ứng tuyển thành công!",
                res: candidatePost,
            };
        } else {
            return {
                err: 1,
                msg: "Ứng viên đã đăng kí bài tuyển dụng này rồi!",
                res: candidatePost,
            };
        }
    } catch (error) {
        console.log(error);
    }
};

export const changeStatusApplied = async ({ postId, candidateId, isApplied }) => {
    try {
        await db.CandidatePost.update(
            {
                isApplied,
            },
            {
                where: {
                    postId,
                    candidateId,
                },
            },
        );
        await db.Post.increment({ appliedCount: 1 }, { where: { id: postId } });

        const candidate = await db.Candidate.findOne({
            where: {
                id: candidateId,
            },
        });
        const post = await db.Post.findOne({
            where: {
                id: postId,
            },
            include: [{ model: db.Company, as: "Company" }],
        });
        const getStatus = await db.CandidatePost.findOne({
            where: {
                postId,
                candidateId,
            },
        });
        await sendEmailService(candidate.email, post.jobTitle, post.Company.companyName, getStatus.isApplied);
        return {
            err: 0,
        };
    } catch (error) {
        console.log(error);
    }
};

export const deletePostService = async (id) => {
    try {
        await db.Post.destroy({
            where: {
                id,
            },
        });
        return {
            err: 0,
            msg: "Success",
        };
    } catch (error) {
        console.log(error);
    }
};

export const getDeletedPostService = async () => {
    try {
        const res = await db.Post.findAll({
            include: [
                { model: db.Company, as: "Company", attributes: ["companyName", "imageLink"] },
                { model: db.Position, as: "Position", attributes: ["positionName"] },
                { model: db.AcademicLevel, as: "AcademicLevel" },
                { model: db.WorkingType, as: "WorkingType" },
                { model: db.Career, as: "Career" },
                { model: db.District, as: "District" },
            ],
            where: {
                deletedAt: { [Op.not]: null },
            },
            paranoid: false,
        });
        return {
            err: res ? 0 : 1,
            res,
        };
    } catch (error) {
        console.log(error);
    }
};

export const getDeletedPostOfCompanyService = async (companyId) => {
    try {
        const deletedPosts = await db.Post.findAll({
            where: {
                deletedAt: { [Op.not]: null },
            },
            paranoid: false,
            include: [
                {
                    model: db.Company,
                    as: "Company",
                    attributes: ["companyName", "imageLink"],
                    where: { id: companyId },
                },
                { model: db.Position, as: "Position", attributes: ["positionName"] },
                { model: db.AcademicLevel, as: "AcademicLevel" },
                { model: db.WorkingType, as: "WorkingType" },
                { model: db.Career, as: "Career" },
                { model: db.District, as: "District" },
            ],
        });
        return {
            err: deletedPosts ? 0 : 1,
            deletedPosts,
        };
    } catch (error) {
        console.log(error);
    }
};

export const updateExpiredPost = async () => {
    try {
        const posts = await db.Post.findAll({
            where: {
                endDate: {
                    [Op.lte]: new Date(),
                },
            },
        });

        await db.Post.destroy({
            where: {
                id: {
                    [Op.in]: posts.map((p) => p.id),
                },
            },
        });
    } catch (error) {
        console.log(error);
    }
};
