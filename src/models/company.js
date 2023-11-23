// "use strict";
// const { Model } = require("sequelize");
// module.exports = (sequelize, DataTypes) => {
//     class Company extends Model {
//         /**
//          * Helper method for defining associations.
//          * This method is not a part of Sequelize lifecycle.
//          * The `models/index` file will call this method automatically.
//          */
//         static associate(models) {
//             Company.belongsToMany(models.Career, {
//                 through: models.CompanyCareer,
//                 foreignKey: "companyId",
//                 as: "Career",
//             });
//             Company.hasMany(models.Post, { foreignKey: "companyId", as: "Posts" });
//         }
//     }
//     Company.init(
//         {
//             companyName: DataTypes.TEXT,
//             imageLink: DataTypes.STRING,
//             email: DataTypes.TEXT,
//             phone: DataTypes.TEXT,
//             address: DataTypes.TEXT,
//             introduction: DataTypes.TEXT,
//             companySize: DataTypes.STRING,
//         },
//         {
//             sequelize,
//             modelName: "Company",
//         },
//     );
//     return Company;
// };

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Company = sequelize.define(
        "Company",
        {
            companyName: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    notNull: true,
                    notEmpty: true,
                },
            },
            imageLink: {
                type: DataTypes.STRING,
                validate: {
                    isURL: true,
                },
            },
            email: {
                type: DataTypes.STRING,
                validate: {
                    isEmail: true,
                },
            },
            phone: {
                type: DataTypes.STRING(10),
                validate: {
                    is: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
                },
            },
            address: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    notNull: true,
                    notEmpty: true,
                },
            },
            introduction: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    notEmpty: true,
                    notNull: true,
                },
            },
            companySize: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            districtId: {
                type: DataTypes.UUID,
            },
        },
        {},
    );
    Company.associate = (models) => {
        Company.belongsToMany(models.Career, {
            through: models.CompanyCareer,
            foreignKey: "companyId",
            as: "Career",
        });
        Company.hasMany(models.Post, { foreignKey: "companyId", as: "Posts" });
        Company.belongsTo(models.District);
    };

    return Company;
};
