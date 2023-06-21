import { v4 } from "uuid";
import db, { Sequelize } from "../models";
import { Op } from "sequelize";

export const getReports = async () => {
    try {
        await updateDailyReport();
        const dailyReport = await db.Report.findAll({
            where: {
                dateReport: {
                    [Op.between]: [Date.now() - 60 * 60 * 1000 * 24, Date.now()],
                },
            },
        });
        const countCompany = await db.Company.count({});
        const countCandidate = await db.Candidate.count({});
        const countPost = await db.Post.count({ paranoid: false });
        const countDeletePost = await db.Post.count({
            where: {
                deletedAt: {
                    [Op.not]: null,
                },
            },
            paranoid: false,
        });
        const countAvailablePost = await db.Post.count({});

        // các ngành nghề có nhiều công ty tuyển dụng (đếm số lượng bài tuyển dụng của từng ngành nghề)
        const countFreqCareers = await db.Career.findAll({
            attributes: [
                "id",
                [
                    Sequelize.literal("(Select count(*) from postcareers where postcareers.careerId = career.id)"),
                    "postCount",
                ],
                "careerName",
            ],
            include: [{ model: db.Post, attributes: [], through: { attributes: [] }, paranoid: false }],
            limit: 5,
            order: [
                [
                    Sequelize.literal("(Select count(*) from postcareers where postcareers.careerId = career.id)"),
                    "desc",
                ],
            ],
        });

        // các ngành nghề có nhiều lượt đăng kí ứng tuyển nhất
        const countAppliedCareer = await db.Career.findAll({
            attributes: [
                "id",
                "careerName",
                [
                    Sequelize.literal(
                        "(select count(*) from postcareers, candidateposts where postcareers.postId = candidateposts.postId and postcareers.careerId = career.id)",
                    ),
                    "candidateCount",
                ],
            ],
            include: [
                {
                    model: db.Post,
                    through: { attributes: [] },
                    paranoid: false,
                    attributes: [],
                },
            ],
            limit: 5,
            order: [
                [
                    Sequelize.literal(
                        "(select count(*) from postcareers, candidateposts where postcareers.postId = candidateposts.postId and postcareers.careerId = career.id)",
                    ),
                    "desc",
                ],
            ],
        });

        return {
            err: 0,
            res: {
                dailyReport,
                countCandidate,
                countCompany,
                countPost,
                countDeletePost,
                countAvailablePost,
                countFreqCareers,
                countAppliedCareer,
            },
        };
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const updateDailyReport = async () => {
    try {
        const posts = await db.Post.count({
            where: {
                createdAt: {
                    [Op.lte]: new Date(),
                    [Op.gte]: new Date().setHours(0, 0, 0, 0),
                },
            },
            paranoid: false,
        });
        const appliedCandidate = await db.CandidatePost.count({
            where: {
                createdAt: {
                    [Op.lte]: new Date(),
                    [Op.gte]: new Date().setHours(0, 0, 0, 0),
                },
            },
        });
        const report = await db.Report.findOne({
            where: {
                dateReport: {
                    [Op.lte]: new Date(),
                    [Op.gte]: new Date().setHours(0, 0, 0, 0),
                },
            },
        });
        if (!report) {
            await db.Report.create({
                id: v4(),
                appliedCount: appliedCandidate,
                postCount: posts,
                dateReport: new Date(),
            });
        } else {
            await db.Report.update(
                {
                    appliedCount: appliedCandidate,
                    postCount: posts,
                },
                {
                    where: {
                        dateReport: {
                            [Op.lte]: new Date(),
                            [Op.gte]: new Date().setHours(0, 0, 0, 0),
                        },
                    },
                },
            );
        }
    } catch (error) {
        console.log(error);
    }
};
