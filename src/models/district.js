"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class District extends Model {
        static associate(models) {
            District.belongsToMany(models.Post, { through: models.PostDistrict, foreignKey: "districtId" });
            District.belongsToMany(models.Candidate, { through: models.CandidateDistrict, foreignKey: "districtId" });
        }
    }
    District.init(
        {
            districtName: DataTypes.STRING,
            keyCode: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "District",
        },
    );
    return District;
};
