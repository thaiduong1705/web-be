"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Candidate extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Candidate.belongsToMany(models.Career, {
                through: models.CandidateCareer,
            });
            Candidate.belongsToMany(models.District, {
                through: models.CandidateDistrict,
            });
        }
    }
    Candidate.init(
        {
            candidateName: DataTypes.STRING,
            age: DataTypes.INT,
            profileImage: DataTypes.STRING,
            CVImage: DataTypes.STRING,
            phoneNumber: DataTypes.STRING,
            email: DataTypes.STRING,
            homeAddress: DataTypes.TEXT,
            gender: DataTypes.BOOLEAN,
            experienceYear: DataTypes.INT,
            academicLevelId: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Candidate",
        },
    );
    return Candidate;
};
