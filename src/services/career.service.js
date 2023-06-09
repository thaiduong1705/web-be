import { v4 } from "uuid";
import db from "../models";

export const getCareersService = async () => {
    try {
        const res = await db.Career.findAll({
            order: [["careerName", "ASC"]],
        });

        return {
            err: res ? 0 : 1,
            msg: res ? "Oke" : "Fail to get careers",
            res,
        };
    } catch (error) {
        return {
            error,
        };
    }
};

export const createCareerService = async ({ careerName }) => {
    try {
        const career = await db.Career.create({
            id: v4(),
            careerName,
        });
        return {
            err: career ? 0 : 2,
            msg: career ? "Oke" : "Fail to create career",
            res: career,
        };
    } catch (error) {
        return {
            err: 1,
            error,
        };
    }
};
