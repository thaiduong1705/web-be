import { v4 } from "uuid";
import db from "../models";

export const getCareersService = async () => {
    try {
        const res = await db.Career.findAll({});

        return {
            err: res ? 0 : 1,
            msg: res ? "Oke" : "Fail to get careers",
            data,
        };
    } catch (error) {
        return {
            error,
        };
    }
};

export const createCareer = async ({ careerName }) => {
    try {
        const career = await db.Career.create({
            id: v4(),
            careerName,
        });
        return {
            err: career ? 0 : 2,
            msg: career ? "Oke" : "Fail to create career",
            data: career,
        };
    } catch (error) {
        return {
            err: 1,
            error,
        };
    }
};
