import transporter from "../config/email";

export const sendEmailService = async (emails, jobTitle, companyName) => {
    try {
        const mailOptions = {
            from: "Trung tâm giới thiệu việc làm",
            to: emails,
            subject: "Thông báo của trung tâm việc làm",
            text: `Chúc mừng bạn đã trúng tuyển đi phỏng vấn công việc ${jobTitle} thuộc ${companyName}. Vui lòng liên hệ đến nhà tuyển dụng để được liên hệ phỏng vấn.`,
        };
        const response = await transporter.sendMail(mailOptions);
        return response;
    } catch (error) {
        console.log(error);
    }
};
