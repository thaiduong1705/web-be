const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const StaffInformation = sequelize.define(
        "StaffInformation",
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: true,
                    notEmpty: true,
                },
            },
            age: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notNull: true,
                    notEmpty: true,
                },
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    notEmpty: true,
                    notNull: true,
                    isEmail: true,
                },
            },
        },
        {},
    );
    StaffInformation.associate = (models) => {
        StaffInformation.belongsTo(models.UserAccount, { foreignKey: "id", onDelete: "CASCADE" });
    };

    return StaffInformation;
};
