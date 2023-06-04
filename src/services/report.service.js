import { v4 } from "uuid";
import db from "../models";
import { Op } from "sequelize";

export const getReports = async () => {
    try {
        await updateReport();
        const result = await db.Report.findAll({
            where: {
                dateReport: {
                    [Op.between]: [Date.now() - 60 * 60 * 1000 * 24, Date.now()],
                },
            },
        });

        return {
            err: 0,
            res: result,
        };
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const updateReport = async () => {
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
