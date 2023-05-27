"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Career extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Career.belongsToMany(models.Company, {
                through: models.CompanyCareer,
                foreignKey: "careerId",
            });
            Career.belongsToMany(models.Post, { through: models.PostCareer, foreignKey: "careerId" });
            Career.belongsToMany(models.Candidate, { through: models.CandidateCareer, foreignKey: "careerId" });
        }
    }
    Career.init(
        {
            careerName: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Career",
        },
    );
    return Career;
};
