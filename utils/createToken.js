const jwt = require("jsonwebtoken");

const createToken = (id, roleId, lifeTime) => {
    return jwt.sign({ _id: id, _roleId: roleId }, process.env.SECRET_KEY, {
        expiresIn: lifeTime,
    });
};

module.exports = createToken;
