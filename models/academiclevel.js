const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
    const AcademicLevel = sequelize.define(
        "AcademicLevel",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            academicLevelName: {
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

    AcademicLevel.associate = (models) => {
        AcademicLevel.hasMany(models.Post, { foreignKey: "academicLevelId", onDelete: "SET NULL" });
        AcademicLevel.hasMany(models.Candidate, { foreignKey: "academicLevelId", onDelete: "SET NULL" });
    };

    return AcademicLevel;
};
