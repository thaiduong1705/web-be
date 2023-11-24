import transporter from "../config/email";

export const sendEmailService = async (emails, jobTitle, companyName, isApplied) => {
    let context;
    if (isApplied) {
        context = `Chúc mừng bạn đã trúng tuyển đi phỏng vấn công việc ${jobTitle} thuộc ${companyName}. Vui lòng liên hệ đến nhà tuyển dụng để được liên hệ phỏng vấn.`;
    } else {
        context = `Xin lỗi, bạn bị loại khỏi ứng tuyển công việc ${jobTitle} thuộc ${companyName}.`;
    }
    try {
        const mailOptions = {
            from: "Trung tâm giới thiệu việc làm",
            to: emails,
            subject: "Thông báo của trung tâm việc làm",
            text: context,
        };
        const response = await transporter.sendMail(mailOptions);
        return response;
    } catch (error) {
        console.log(error);
    }
};
