// "use strict";
// const { Model } = require("sequelize");
// module.exports = (sequelize, DataTypes) => {
//     class Candidate extends Model {
//         /**
//          * Helper method for defining associations.
//          * This method is not a part of Sequelize lifecycle.
//          * The `models/index` file will call this method automatically.
//          */
//         static associate(models) {
//             Candidate.belongsTo(models.AcademicLevel, { foreignKey: "academicLevelId", targetKey: "id" });
//             Candidate.belongsTo(models.Position, { foreignKey: "positionId", targetKey: "id" });
//             Candidate.belongsToMany(models.Career, {
//                 through: models.CandidateCareer,
//                 foreignKey: "candidateId",
//                 as: "Career",
//             });
//             Candidate.belongsToMany(models.District, {
//                 through: models.CandidateDistrict,
//                 foreignKey: "candidateId",
//                 as: "District",
//             });
//             Candidate.belongsToMany(models.Post, {
//                 through: models.CandidatePost,
//                 foreignKey: "candidateId",
//                 as: "Post",
//             });
//         }
//     }
//     Candidate.init(
//         {
//             candidateName: DataTypes.STRING,
//             age: DataTypes.INTEGER,
//             profileImage: DataTypes.STRING,
//             CVImage: DataTypes.STRING,
//             phoneNumber: DataTypes.STRING,
//             email: DataTypes.STRING,
//             homeAddress: DataTypes.TEXT,
//             gender: DataTypes.BOOLEAN,
//             experienceYear: DataTypes.INTEGER,
//             academicLevelId: DataTypes.STRING,
//             positionId: DataTypes.STRING,
//             candidateCivilId: DataTypes.STRING,
//         },
//         {
//             sequelize,
//             modelName: "Candidate",
//         },
//     );
//     return Candidate;
// };

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Candidate = sequelize.define(
        "Candidate",
        {
            candidateName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: true,
                    notEmpty: true,
                },
            },
            age: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    min: 18,
                    notNull: true,
                    notEmpty: true,
                },
            },
            profileImage: {
                type: DataTypes.STRING,
                validate: {
                    isURL: true,
                },
            },
            CVImage: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isURL: true,
                    notNull: true,
                },
            },
            phoneNumber: {
                type: DataTypes.STRING(10),
                allowNull: false,
                validate: {
                    is: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
                    notNull: true,
                },
            },
            email: {
                type: DataTypes.STRING,
                validate: {
                    isEmail: true,
                },
            },
            homeAddress: {
                type: DataTypes.TEXT,
            },
            gender: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                validate: {
                    notNull: true,
                },
            },
            experienceYear: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    min: 0,
                    notNull: true,
                },
            },
            academicLevelId: {
                type: DataTypes.UUID,
            },
            positionId: {
                type: DataTypes.UUID,
            },
            candidateCivilId: {
                type: DataTypes.UUID,
            },
        },
        {
            modelName: "Candidate",
        },
    );

    Candidate.associate = (models) => {
        Candidate.belongsTo(models.AcademicLevel, { foreignKey: "academicLevelId", targetKey: "id" });
        Candidate.belongsTo(models.Position, { foreignKey: "positionId", targetKey: "id" });
        Candidate.belongsToMany(models.Career, {
            through: models.CandidateCareer,
            foreignKey: "candidateId",
            as: "Career",
        });
        Candidate.belongsToMany(models.District, {
            through: models.CandidateDistrict,
            foreignKey: "candidateId",
            as: "District",
        });
        Candidate.belongsToMany(models.Post, {
            through: models.CandidatePost,
            foreignKey: "candidateId",
            as: "Post",
        });
    };

    return Candidate;
};
