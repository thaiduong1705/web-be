import * as reportService from "../services/report.service";
export const getReport = async (req, res) => {
    try {
        const response = await reportService.getReports();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Failed at getReport: " + error,
        });
    }
};
