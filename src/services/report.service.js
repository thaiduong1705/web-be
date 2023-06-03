import { v4 } from "uuid";
import db from "../models";

export const getReports = async () => {
    try {
        const result = await db.Report.findAll({});
    } catch (error) {
        console.log(error);
        return error;
    }
};
