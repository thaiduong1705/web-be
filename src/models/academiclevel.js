"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class AcademicLevel extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            AcademicLevel.hasMany(models.Post);
        }
    }
    AcademicLevel.init(
        {
            academicLevelName: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "AcademicLevel",
        },
    );
    return AcademicLevel;
};
