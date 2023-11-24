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
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
            },
            civilId: {
                type: DataTypes.STRING(12),
                unique: true,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            candidateName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: true,
                    notEmpty: true,
                },
            },
            slug: {
                type: DataTypes.TEXT,
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
            cvImage: {
                type: DataTypes.STRING,
                validate: {
                    isURL: true,
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
            fullAddress: {
                type: DataTypes.TEXT,
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
            gender: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                validate: {
                    notNull: true,
                },
            },
            experienceYear: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
            },
            academicLevelId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            positionId: {
                type: DataTypes.INTEGER,
            },
        },
        {
            modelName: "Candidate",
        },
    );

    Candidate.associate = (models) => {
        Candidate.belongsTo(models.UserAccount, { foreignKey: "id" });
        Candidate.belongsTo(models.AcademicLevel, { foreignKey: "academicLevelId" });

        Candidate.belongsTo(models.Position, { foreignKey: "positionId" });
        Candidate.belongsToMany(models.Career, {
            through: models.CandidateCareer,
            foreignKey: "candidateId",
        });
        Candidate.belongsToMany(models.Post, {
            through: models.CandidatePost,
            foreignKey: "candidateId",
        });
    };

    return Candidate;
};
