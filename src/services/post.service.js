import { v4 } from "uuid";
import db from "../models";
import { Op } from "sequelize";

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
                { model: db.AcademicLevel, as: "AcademicLevel", attributes: ["academicLevelName"] },
                { model: db.WorkingType, as: "WorkingType", attributes: ["workingTypeName"] },
                { model: db.Company, as: "Company" },
                { model: db.Position, as: "Position" },
                { model: db.Career, as: "Career", attributes: ["careerName"] },
                { model: db.District, as: "District", attributes: ["districtName"] },
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
    contact,
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
        const postUpdate = await db.Post.update(
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
            err: postUpdate[0] === 0 && pc && pd && !hasZeroValues ? 0 : 2,
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

export const getLimitPostsService = async ({ page, limit, order, ...query }) => {
    try {
        const filter = {};
        const queries = {};
        const subFilter = {};
        const offset = !page || +page <= 1 ? 0 : +page - 1;
        const numberOfItems = +limit || +process.env.LIMIT_BOOK;
        queries.offset = offset * numberOfItems;
        queries.limit = numberOfItems;

        if (order) queries.order = [order];

        console.log(query);
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
        if (query.experienceYear) filter.experienceYear = { [Op.lte]: query.experienceYear };
        if (query.createdAt) filter.createdAt = { [Op.between]: [...query.createdAt] };

        if (query.academicLevelId) filter.academicLevelId = { [Op.eq]: query.academicLevelId };
        if (query.positionId) filter.positionId = { [Op.eq]: query.positionId };
        if (query.workingTypeId) filter.workingTypeId = { [Op.eq]: query.workingTypeId };
        if (query.career && query.career.length !== 0) subFilter.career = { [Op.or]: [...query.career] };
        if (query.district && query.district.length !== 0) subFilter.district = { [Op.or]: [...query.district] };
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
                { model: db.Company, as: "Company", attributes: ["companyName"] },
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
