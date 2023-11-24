import * as emailService from "../services/emailService";

export const sendEmails = async (req, res) => {
    try {
        const { emails, jobTitle, companyName } = req.body;
        if (emails.length === 0 || !jobTitle || !companyName) {
            return res.status(400).json({
                err: 1,
                msg: "Thiếu emails hoặc tên công việc hoặc tên công ty!",
            });
        }
        const response = await emailService.sendEmailService(emails, jobTitle, companyName);
        return res.status(200).json({
            err: 0,
            response,
        });
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at getAllDistricts: " + error,
        });
    }
};
