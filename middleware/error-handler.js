const deleteCloudinaryImage = require("../utils/deleteCloudinaryImage");
const errorHandlerMiddleware = async (err, req, res, next) => {
    let customError = {
        msg: err.message || "Something wrong",
        statusCode: err.statusCode || 500,
    };

    if (err?.name === "SequelizeValidationError") {
        customError.msg = "Lỗi nhập liệu: ";
        err.errors.forEach((e) => {
            customError.msg += `${e.message}, `;
        });
        customError.statusCode = 400;
    }
    if (err?.name === "SequelizeUniqueConstraintError") {
        customError.msg = "Lỗi constraint sql: ";
        err.errors.forEach((e) => {
            customError.msg += `${e.message}, `;
        });
        customError.statusCode = 400;
    }

    if (req.files && Array.isArray(req.files)) {
        for (const file of req.files) {
            const imageUrl = file.path;
            await deleteCloudinaryImage(imageUrl);
        }
    }
    if (req.files && typeof req.files === "object") {
        for (const key in req.files) {
            if (Array.isArray(req.files[key])) {
                for (const file of req.files[key]) {
                    const imageUrl = file.path;
                    await deleteCloudinaryImage(imageUrl);
                }
            }
        }
    }
    return res.status(customError.statusCode).json(customError);
    //return res.status(customError.statusCode).json({ err });
};

module.exports = errorHandlerMiddleware;
