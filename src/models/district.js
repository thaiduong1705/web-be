"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class District extends Model {
        static associate(models) {
            District.belongsToMany(models.Post, { through: models.PostDistrict, foreignKey: "postId" });
            District.belongsToMany(models.Candidate, { through: models.CandidateDistrict, foreignKey: "candidateId" });
        }
    }
    District.init(
        {
            districtName: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "District",
        },
    );
    return District;
};
