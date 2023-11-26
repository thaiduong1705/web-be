const bcryptjs = require("bcryptjs");
const hashPassword = (password) => {
    (password) => bcryptjs.hashSync(password, bcryptjs.genSaltSync(10));
};

module.exports = hashPassword;
