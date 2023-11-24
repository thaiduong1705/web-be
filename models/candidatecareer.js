// "use strict";
// const { Model } = require("sequelize");
// module.exports = (sequelize, DataTypes) => {
//     class CandidateCareer extends Model {
//         static associate(models) {
//             CandidateCareer.belongsTo(models.Candidate, { foreignKey: "candidateId" });
//             CandidateCareer.belongsTo(models.Career, { foreignKey: "careerId" });
//         }
//     }
//     CandidateCareer.init(
//         {
//             candidateId: DataTypes.STRING,
//             careerId: DataTypes.STRING,
//         },
//         {
//             sequelize,
//             modelName: "CandidateCareer",
//         },
//     );
//     return CandidateCareer;
// };

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const CandidateCareer = sequelize.define(
        "CandidateCareer",
        {
            candidateId: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
                references: {
                    model: "Candidates",
                    key: "id",
                },
            },
            careerId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                references: {
                    model: "Careers",
                    key: "id",
                },
            },
        },
        {},
    );

    return CandidateCareer;
};
