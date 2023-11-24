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
            },
            refreshToken: {
                type: DataTypes.TEXT,
            },
        },
        {},
    );
    UserAccount.associate = (models) => {
        UserAccount.hasOne(models.Candidate, { foreignKey: "id", onDelete: "CASCADE" });
        UserAccount.hasOne(models.StaffInformation, { foreignKey: "id", onDelete: "CASCADE" });
        UserAccount.belongsTo(models.Role, { foreignKey: "roleId" });
    };

    return UserAccount;
};
