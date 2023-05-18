import { v4 } from "uuid";
import db from "../models";

export const getAcademicLevelsService = async () => {
    try {
        const res = await db.AcademicLevel.findAll({});

        return {
            err: res ? 0 : 1,
            msg: res ? "Oke" : "Fail to get academic levels",
            data,
        };
    } catch (error) {
        return {
            error,
        };
    }
};

export const createAcademicLevelService = async ({ academicLevelName }) => {
    try {
        const academicLevel = await db.AcacdemicLevel.create({
            id: v4(),
            academicLevelName,
        });
        return {
            err: academicLevel ? 0 : 2,
            msg: academicLevel ? "Oke" : "Fail to create academic level",
            data: academicLevel,
        };
    } catch (error) {
        return {
            err: 1,
            error,
        };
    }
};
