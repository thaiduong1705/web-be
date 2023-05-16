import * as companyService from "../services/company.service";

export const getAllCompanies = async (req, res) => {
    try {
        const response = await companyService.getCompaniesService();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at getAllCompanies: " + error,
        });
    }
};

export const createCompany = async (req, res) => {
    try {
        const { companyName, imageLink, url, address, introduction, companySize, careerList } = req.body;
        if (
            !companyName ||
            !imageLink ||
            !address ||
            !introduction ||
            !companySize ||
            !careerList ||
            careerList.length === 0
        ) {
            return res.status(400).json({
                err: 1,
                msg: "Missing Input!",
            });
        }
        const response = await companyService.createCompanyService(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at createCompany: " + error,
        });
    }
};

export const getCompanyById = async (req, res) => {
    try {
        if (!req.params.id) {
            return res.status(400).json({
                err: 1,
                msg: "Missing id!",
            });
        }
        const response = await companyService.getCompanyByIdService(req.params);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at getAllCompanies: " + error,
        });
    }
};
