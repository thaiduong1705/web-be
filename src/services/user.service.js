import db from "../models";

export const getCurrentUserService = async (id) => {
    try {
        const response = await db.User.findOne({
            where: { id },
            attributes: {
                exclude: ["password"],
            },
        });
        return {
            err: response ? 0 : 1,
            msg: response ? "OK" : "Failed to get provinces.",
            response,
        };
    } catch (error) {
        console.log(error);
        return error;
    }
};
