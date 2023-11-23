// "use strict";
// const { Model } = require("sequelize");
// module.exports = (sequelize, DataTypes) => {
//     class CompanyCareer extends Model {
//         static associate(models) {
//             CompanyCareer.belongsTo(models.Company, { foreignKey: "companyId" });
//             CompanyCareer.belongsTo(models.Career, { foreignKey: "careerId" });
//         }
//     }
//     CompanyCareer.init(
//         {
//             companyId: DataTypes.STRING,
//             careerId: DataTypes.STRING,
//         },
//         {
//             sequelize,
//             modelName: "CompanyCareer",
//         },
//     );
//     return CompanyCareer;
// };

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const CompanyCareer = sequelize.define(
        "CompanyCareer",
        {
            companyId: {
                type: DataTypes.UUID,
            },
            careerId: {
                type: DataTypes.UUID,
            },
        },
        {},
    );
    CompanyCareer.associate = (models) => {
        CompanyCareer.belongsTo(models.Company, { foreignKey: "companyId" });
        CompanyCareer.belongsTo(models.Career, { foreignKey: "careerId" });
    };

    return CompanyCareer;
};
