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
            Candidate.belongsTo(models.AcademicLevel, { foreignKey: "academicLevelId", targetKey: "id" });
            Candidate.belongsToMany(models.Career, {
                through: models.CandidateCareer,
                foreignKey: "candidateId",
                as: "Career",
            });
            Candidate.belongsToMany(models.District, {
                through: models.CandidateDistrict,
                foreignKey: "districtId",
                as: "District",
            });
        }
    }
    Candidate.init(
        {
            candidateName: DataTypes.STRING,
            age: DataTypes.INTEGER,
            profileImage: DataTypes.STRING,
            CVImage: DataTypes.STRING,
            phoneNumber: DataTypes.STRING,
            email: DataTypes.STRING,
            //homeAddress: DataTypes.TEXT,
            gender: DataTypes.BOOLEAN,
            experienceYear: DataTypes.INTEGER,
            academicLevelId: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Candidate",
        },
    );
    return Candidate;
};
