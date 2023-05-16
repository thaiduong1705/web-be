import * as companyService from "../services/company.service";

export const getAllCompanies = async (req, res) => {
    try {
        const response = await companyService.getPostsService();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at getAllCompanies: " + error,
        });
    }
};
