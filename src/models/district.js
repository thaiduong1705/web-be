// "use strict";
// const { Model } = require("sequelize");
// module.exports = (sequelize, DataTypes) => {
//     class District extends Model {
//         static associate(models) {
//             District.belongsToMany(models.Post, { through: models.PostDistrict, foreignKey: "districtId" });
//             District.belongsToMany(models.Candidate, { through: models.CandidateDistrict, foreignKey: "districtId" });
//         }
//     }
//     District.init(
//         {
//             districtName: DataTypes.STRING,
//             keyCode: DataTypes.INTEGER,
//         },
//         {
//             sequelize,
//             modelName: "District",
//         },
//     );
//     return District;
// };

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const District = sequelize.define(
        "District",
        {
            districtName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: true,
                    notEmpty: true,
                },
            },
            keyCode: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notNull: true,
                    notEmpty: true,
                },
            },
        },
        {},
    );
    District.associate = (models) => {
        District.belongsToMany(models.Post, { through: models.PostDistrict, foreignKey: "districtId" });
        District.belongsToMany(models.Candidate, { through: models.CandidateDistrict, foreignKey: "districtId" });
    };

    return District;
};
