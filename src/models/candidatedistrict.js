// "use strict";
// const { Model } = require("sequelize");
// module.exports = (sequelize, DataTypes) => {
//     class CandidateDistrict extends Model {
//         static associate(models) {
//             CandidateDistrict.belongsTo(models.Candidate, { foreignKey: "candidateId" });
//             CandidateDistrict.belongsTo(models.District, { foreignKey: "districtId" });
//         }
//     }
//     CandidateDistrict.init(
//         {
//             candidateId: DataTypes.STRING,
//             districtId: DataTypes.STRING,
//         },
//         {
//             sequelize,
//             modelName: "CandidateDistrict",
//         },
//     );
//     return CandidateDistrict;
// };

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const CandidateDistrict = sequelize.define(
        "CandidateDistrict",
        {
            candidateId: {
                type: DataTypes.UUID,
            },
            districtId: {
                type: DataTypes.UUID,
            },
        },
        {},
    );
    CandidateDistrict.associate = (models) => {
        CandidateDistrict.belongsTo(models.Candidate, { foreignKey: "candidateId" });
        CandidateDistrict.belongsTo(models.District, { foreignKey: "districtId" });
    };

    return CandidateDistrict;
};
