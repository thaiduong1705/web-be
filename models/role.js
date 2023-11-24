const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Role = sequelize.define(
        "Role",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            roleName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: true,
                    notEmpty: true,
                },
            },
        },
        {},
    );
    Role.associate = (models) => {
        Role.hasMany(models.UserAccount, { foreignKey: "roleId", onDelete: "SET NULL" });
    };

    return Role;
};
