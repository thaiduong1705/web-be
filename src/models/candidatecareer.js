"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class CandidateCareer extends Model {
        static associate(models) {
            CandidateCareer.belongsTo(models.Candidate, { foreignKey: "candidateId" });
            CandidateCareer.belongsTo(models.Career, { foreignKey: "careerId" });
        }
    }
    CandidateCareer.init(
        {
            candidateId: DataTypes.STRING,
            careerId: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "CandidateCareer",
        },
    );
    return CandidateCareer;
};
