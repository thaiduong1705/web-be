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
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
            },
            companyName: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    notNull: true,
                    notEmpty: true,
                },
            },
            slug: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    notEmpty: true,
                    notNull: true,
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
                allowNull: false,
                validate: {
                    isEmail: true,
                    notEmpty: true,
                    notNull: true,
                },
            },
            phone: {
                type: DataTypes.STRING(10),
                allowNull: false,
                validate: {
                    is: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
                    notEmpty: true,
                    notNull: false,
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
            province: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                    notNull: true,
                },
            },
            district: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                    notNull: true,
                },
            },
            ward: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                    notNull: true,
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
            companySizeMin: {
                type: DataTypes.INTEGER,
                validate: {
                    isInt: true,
                },
            },
            companySizeMax: {
                type: DataTypes.INTEGER,
                validate: {
                    isInt: true,
                    checkGreaterThan(value) {
                        if (parseInt(value) < parseInt(this.companySizeMin)) {
                            throw new Error("companySizeMax phải lớn hơn companySizeMin");
                        }
                    },
                },
            },
        },
        {},
    );
    Company.associate = (models) => {
        Company.belongsToMany(models.Career, {
            through: models.CompanyCareer,
            foreignKey: "companyId",
        });
        Company.hasMany(models.Post, { foreignKey: "companyId", onDelete: "CASCADE" });
    };

    return Company;
};
