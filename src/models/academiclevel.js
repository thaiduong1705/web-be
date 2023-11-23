const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
    const AcademicLevel = sequelize.define(
        "AcademicLevel",
        {
            academicLevelName: {
                type: DataTypes.UUID,
                allowNull: false,
                validate: {
                    notNull: true,
                    notEmpty: true,
                },
            },
            keyCode: {
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

    AcademicLevel.associate = (models) => {
        AcademicLevel.hasMany(models.Post, { foreignKey: "academicLevelId" });
        AcademicLevel.hasMany(models.Candidate, { foreignKey: "academicLevelId" });
    };

    return AcademicLevel;
};
