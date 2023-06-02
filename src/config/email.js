const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "gioithieuvieclam62@gmail.com",
        pass: "lgwxifazxtxklwnf",
    },
});
module.exports = transporter;
