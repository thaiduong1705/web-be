const bcryptjs = require("bcryptjs");
const hashPassword = (password) => {
    const result = bcryptjs.hashSync(password, bcryptjs.genSaltSync(10));
    return result;
};

const comparePassword = (passwordInput, passwordDb) => {
    return bcryptjs.compareSync(passwordInput, passwordDb);
};

module.exports = { hashPassword, comparePassword };
