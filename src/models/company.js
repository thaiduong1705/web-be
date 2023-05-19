"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Company extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Company.belongsToMany(models.Career, {
                through: models.CompanyCareer,
                foreignKey: "companyId",
                as: "Career",
            });
            Company.hasMany(models.Post, { foreignKey: "companyId", as: "Posts" });
        }
    }
    Company.init(
        {
            companyName: DataTypes.TEXT,
            imageLink: DataTypes.STRING,
            url: DataTypes.STRING,
            address: DataTypes.TEXT,
            introduction: DataTypes.TEXT,
            companySize: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Company",
        },
    );
    return Company;
};
