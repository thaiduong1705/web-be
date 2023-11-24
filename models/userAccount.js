const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const UserAccount = sequelize.define(
        "UserAccount",
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
            },
            username: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
                validate: {
                    notNull: true,
                    notEmpty: true,
                },
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: true,
                    notEmpty: true,
                },
            },
            roleId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            refreshToken: {
                type: DataTypes.TEXT,
            },
        },
        {},
    );
    UserAccount.associate = (models) => {
        UserAccount.hasOne(models.Candidate, { foreignKey: "id" });
        UserAccount.hasOne(models.StaffInformation, { foreignKey: "id" });
    };

    return UserAccount;
};
