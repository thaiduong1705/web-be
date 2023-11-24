const errorHandlerMiddleware = (err, req, res, next) => {
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
    return res.status(customError.statusCode).json(customError);
    //return res.status(customError.statusCode).json({ err });
};

module.exports = errorHandlerMiddleware;
