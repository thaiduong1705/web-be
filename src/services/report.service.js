import { v4 } from "uuid";
import db from "../models";
import { Op } from "sequelize";

export const getReports = async () => {
    try {
        // const result = await db.Report.findAll({
        //     where: {
        //         dateReport: {
        //             [Op.between]: [Date.now() - 60 * 60 * 1000 * 24, Date.now()],
        //         },
        //     },
        // });
        const result = await db.Post.count({
            where: {
                createdAt: {
                    [Op.between]: [Date.now() - 60 * 60 * 1000 * 24 * 21, Date.now()],
                },
            },
            paranoid: false,
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
                    [Op.between]: [Date.now() - 60 * 60 * 1000 * 24, Date.now()],
                },
            },
            paranoid: false,
        });
        const appliedCandidate = await db.CandidatePost.count({
            where: {
                createdAt: {
                    [Op.between]: [Date.now() - 60 * 60 * 1000 * 24, Date.now()],
                },
            },
        });
        const report = await db.Report.find({
            where: {
                dateReport: Date.now(),
            },
        });
        if (!report) {
            await db.Report.create({
                id: v4(),
                appliedCount: appliedCandidate,
                postCount: posts,
                dateReport: Date.now(),
            });
        } else {
            await db.Report.update(
                {
                    appliedCount: appliedCandidate,
                    postCount: posts,
                },
                {
                    dateReport: Date.now(),
                },
            );
        }
    } catch (error) {
        console.log(error);
        return error;
    }
};
