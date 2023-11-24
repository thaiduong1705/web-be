const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
    const WorkingType = sequelize.define(
        "WorkingType",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            workingTypeName: {
                type: DataTypes.UUID,
                allowNull: false,
                validate: {
                    notNull: true,
                    notEmpty: true,
                },
            },
        },
        {},
    );

    WorkingType.associate = (models) => {
        WorkingType.hasMany(models.Post, { foreignKey: "workingTypeId", onDelete: "SET NULL" });
    };

    return WorkingType;
};
