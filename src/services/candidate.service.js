import { Op } from "sequelize";
import { v4 } from "uuid";
import db from "../models";

export const getCandidatesService = async () => {
    try {
        const res = await db.Candidate.findAll({
            include: [{ model: db.AcademicLevel, attributes: ["academicLevelName"] }],
        });

        return {
            err: res ? 0 : 1,
            msg: res ? "Oke" : "Fail to get candidate",
            res,
        };
    } catch (error) {
        return {
            error,
        };
    }
};

export const createCandidateService = async ({
    candidateName,
    age,
    profileImage,
    CVImage,
    phoneNumber,
    email,
    homeAddress,
    gender,
    experienceYear,
    academicLevelId,
    careerList,
    districtList,
}) => {
    try {
        const candidate = await db.Candidate.create({
            id: v4(),
            candidateName,
            age,
            profileImage,
            CVImage,
            phoneNumber,
            email,
            homeAddress,
            gender,
            experienceYear,
            academicLevelId,
        });
        const cc = await db.CandidateCareer.bulkCreate(
            careerList.map((careerId) => {
                return {
                    candidateId: candidate.id,
                    careerId,
                };
            }),
        );
        const cd = await db.CandidateDistrict.bulkCreate(
            districtList.map((districtId) => {
                return {
                    candidateId: candidate.id,
                    districtId,
                };
            }),
        );

        return {
            err: candidate && cc && cd ? 0 : 2,
            msg: candidate && cc && cd ? "Oke" : "Fail to create candidate",
            data: {
                candidate,
                cc,
                cd,
            },
        };
    } catch (error) {
        console.log(error);
        return {
            error,
        };
    }
};

export const getCandidateByIdService = async ({ id }) => {
    try {
        const res = await db.Candidate.findByPk(id, {
            include: [
                { model: db.Career, as: "Career", attributes: ["id", "careerName"] },
                { model: db.District, as: "District", attributes: ["id", "districtName"] },
                { model: db.AcademicLevel },
            ],
        });
        return {
            err: res ? 0 : 2,
            msg: res ? "Oke" : "Fail to get candidate by id",
            res,
        };
    } catch (error) {
        return {
            error,
        };
    }
};

export const updateCandidate = async ({
    id,
    candidateName,
    age,
    profileImage,
    CVImage,
    phoneNumber,
    email,
    homeAddress,
    gender,
    experienceYear,
    academicLevelId,
    careerOldList,
    careerNewList,
    districtOldList,
    districtNewList,
}) => {
    try {
        let careerDel = [];
        let districtDel = [];
        let cc;
        let cd;
        const candidateUpdate = await db.Candidate.update(
            {
                candidateName,
                age,
                profileImage,
                CVImage,
                phoneNumber,
                email,
                homeAddress,
                gender,
                experienceYear,
                academicLevelId,
            },
            {
                where: {
                    id: id,
                },
            },
        );
        const candidate = await db.Candidate.findByPk(id);

        for (const oldId of careerOldList) {
            const temp = await db.CandidateCareer.destroy({
                where: {
                    [Op.and]: [{ candidateId: candidate.id }, { careerId: oldId }],
                },
            });
            careerDel.push(temp);
        }

        for (const oldId of districtOldList) {
            const temp = await db.CandidateDistrict.destroy({
                where: {
                    [Op.and]: [{ candidateId: candidate.id }, { districtId: oldId }],
                },
            });
            districtDel.push(temp);
        }
        const hasZeroValues = careerDel.some((value) => value === 0) && districtDel.some((value) => value === 0);
        if (!hasZeroValues) {
            cc = await db.CandidateCareer.bulkCreate(
                careerNewList.map((careerId) => {
                    return {
                        candidateId: candidate.id,
                        careerId,
                    };
                }),
            );
            cd = await db.CandidateDistrict.bulkCreate(
                districtNewList.map((districtId) => {
                    return {
                        candidateId: candidate.id,
                        districtId,
                    };
                }),
            );
        }

        return {
            err: candidateUpdate[0] === 1 && cc && cd && !hasZeroValues ? 0 : 2,
            msg: candidateUpdate[0] === 1 && cc && cd && !hasZeroValues ? "Oke" : "Fail to update candidate!",
            res: {
                candidateUpdate,
                resDel,
                cc,
                cd,
            },
        };
    } catch (error) {
        return error;
    }
};

export const getLimitCandidatesService = async ({ page, limit, order, ...query }) => {
    try {
        const filter = {};
        const queries = {};
        const subQuery = {};
        const offset = !page || +page <= 1 ? 0 : +page - 1;
        const numberOfItems = +limit || +process.env.LIMIT_BOOK;
        queries.offset = offset * numberOfItems;
        queries.limit = numberOfItems;
        if (order) queries.order = [order];

        if (query.age) filter.age = { [Op.between]: [...query.age] };
        if (query.experienceYear) filter.experienceYear = { [Op.lte]: query.experienceYear };
        if (query.academicLevelId) filter.academicLevelId = { [Op.eq]: query.academicLevelId };
        const count = await db.Candidate.count({
            where: filter,
            include: [
                { model: db.AcademicLevel },
                { model: db.Career, as: "Career" },
                { model: db.District, as: "District" },
            ],
            distinct: true,
        });
        const res = await db.Candidate.findAll({
            where: filter,
            include: [
                { model: db.AcademicLevel },
                { model: db.Career, as: "Career" },
                { model: db.District, as: "District" },
            ],
            ...queries,
            distinct: true,
        });
        return {
            err: res ? 0 : 1,
            msg: res ? "Oke" : "Cant found candidates.",
            count,
            res,
        };
    } catch (error) {
        console.log(error);
    }
};
