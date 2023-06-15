import { Op } from "sequelize";
import { v4 } from "uuid";
import db from "../models";

export const getCandidatesService = async () => {
    try {
        const res = await db.Candidate.findAll({
            include: [
                { model: db.AcademicLevel },
                { model: db.District, as: "District" },
                { model: db.Career, as: "Career" },
            ],
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
    positionId,
    candidateCivilId,
}) => {
    try {
        const existingRecord = await db.Candidate.findOne({
            where: { candidateCivilId },
        });
        if (!existingRecord) {
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
                positionId,
                candidateCivilId,
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
        } else {
            return {
                err: 3,
                msg: "Đã có sẵn ứng viên có căn cước công dân này!",
            };
        }
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
                { model: db.Career, as: "Career" },
                { model: db.District, as: "District" },
                { model: db.AcademicLevel },
                { model: db.Post, as: "Post", include: [{ model: db.Company, as: "Company" }] },
            ],
        });
        return {
            err: res ? 0 : 2,
            msg: res ? "Oke" : "Fail to get candidate by id",
            res,
        };
    } catch (error) {
        console.log(error);
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
    positionId,
    candidateCivilId,
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
        const existingRecord = await db.Candidate.findOne({
            where: { candidateCivilId, id: { [Op.ne]: id } },
        });
        if (!existingRecord) {
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
                    positionId,
                    candidateCivilId,
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
                    careerDel,
                    districtDel,
                    cc,
                    cd,
                },
            };
        } else {
            return {
                err: 3,
                msg: "Đã có sẵn ứng viên có căn cước công dân này!",
            };
        }
    } catch (error) {
        return error;
    }
};

export const getLimitCandidatesService = async ({ page, limit, order, ...query }) => {
    try {
        const filter = {};
        const queries = {};
        const offset = !page || +page <= 1 ? 0 : +page - 1;
        const numberOfItems = +limit || +process.env.LIMIT_BOOK;
        queries.offset = offset * numberOfItems;
        queries.limit = numberOfItems;
        if (order) queries.order = [order];

        if (query.age) filter.age = { [Op.between]: [...query.age] };
        if (query.experienceYear) {
            if (query.experienceYear <= 4) {
                filter.experienceYear = { [Op.lte]: query.experienceYear };
            }
            if (query.experienceYear === 5) filter.experienceYear = { [Op.gte]: query.experienceYear };
        }
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
