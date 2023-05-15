"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class CandidateCareer extends Model {
        static associate(models) {
            CandidateCareer.belongsTo(models.Company, { foreignKey: "companyId" });
            CandidateCareer.belongsTo(models.Career, { foreignKey: "careerId" });
        }
    }
    CandidateCareer.init(
        {
            companyId: DataTypes.STRING,
            careerId: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "CandidateCareer",
        },
    );
    return CandidateCareer;
};
