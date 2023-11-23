// "use strict";
// const { Model } = require("sequelize");
// module.exports = (sequelize, DataTypes) => {
//     class Post extends Model {
//         /**
//          * Helper method for defining associations.
//          * This method is not a part of Sequelize lifecycle.
//          * The `models/index` file will call this method automatically.
//          */
//         static associate(models) {
//             // define association here
//             Post.belongsTo(models.Company, { foreignKey: "companyId", targetKey: "id", as: "Company" });
//             Post.belongsTo(models.Position, { foreignKey: "positionId", targetKey: "id", as: "Position" });
//             Post.belongsTo(models.AcademicLevel, {
//                 foreignKey: "academicLevelId",
//                 targetKey: "id",
//                 as: "AcademicLevel",
//             });
//             Post.belongsTo(models.WorkingType, { foreignKey: "workingTypeId", targetKey: "id", as: "WorkingType" });
//             Post.belongsToMany(models.Career, { through: models.PostCareer, foreignKey: "postId", as: "Career" });
//             Post.belongsToMany(models.District, {
//                 through: models.PostDistrict,
//                 foreignKey: "postId",
//                 as: "District",
//             });
//             Post.belongsToMany(models.Candidate, {
//                 through: models.CandidatePost,
//                 foreignKey: "postId",
//                 as: "Candidate",
//             });
//         }
//     }
//     Post.init(
//         {
//             jobTitle: DataTypes.STRING, // not null
//             salaryMin: DataTypes.BIGINT,
//             salaryMax: DataTypes.BIGINT,
//             ageMin: DataTypes.INTEGER,
//             ageMax: DataTypes.INTEGER,
//             experienceYear: DataTypes.INTEGER,
//             appliedCount: DataTypes.INTEGER,
//             endDate: DataTypes.DATEONLY, // not null
//             needNumber: DataTypes.INTEGER,
//             sex: DataTypes.BOOLEAN,
//             jobDescribe: DataTypes.TEXT, // not null
//             benefits: DataTypes.TEXT, // not null
//             jobRequirement: DataTypes.TEXT, // not null
//             workingAddress: DataTypes.TEXT,
//             companyId: DataTypes.STRING,
//             positionId: DataTypes.STRING,
//             academicLevelId: DataTypes.STRING,
//             workingTypeId: DataTypes.STRING,
//         },
//         {
//             sequelize,
//             modelName: "Post",
//             paranoid: true,
//         },
//     );
//     return Post;
// };

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Post = sequelize.define(
        "Post",
        {
            jobTitle: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: true,
                    notEmpty: true,
                },
            },
            salaryMax: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notNull: true,
                    isInt: true,
                },
            },
            salaryMin: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notNull: true,
                    isInt: true,
                    checkOverMaxSalary(value) {
                        if (parseInt(value) > parseInt(this.salaryMax)) {
                            throw new Error("Lương min không lương max.");
                        }
                    },
                },
            },
            ageMax: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notNull: true,
                    isInt: true,
                },
            },
            ageMin: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notNull: true,
                    isInt: true,
                    checkOverMaxAge(value) {
                        if (parseInt(value) > parseInt(this.ageMax)) {
                            throw new Error("Lương min không lương max.");
                        }
                    },
                },
            },
            experienceYear: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notNull: true,
                    isInt: true,
                    min: 0,
                },
            },
            appliedCount: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
            },
            endDate: {
                type: DataTypes.DATEONLY,
                allowNull: false,
                validate: {
                    notNull: true,
                    compareDate(value) {
                        if (Date(value) <= Date(this.createdAt)) {
                            throw new Error("Ngày hết hạn phải lớn hơn ngày hôm nay");
                        }
                    },
                },
            },
            sex: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                validate: {
                    notNull: true,
                },
            },
            jobDescribe: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    notEmpty: true,
                    notNull: true,
                },
            },
            benefits: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    notEmpty: true,
                    notNull: true,
                },
            },
            jobRequirement: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    notEmpty: true,
                    notNull: true,
                },
            },
            companyId: {
                type: DataTypes.UUID,
                allowNull: false,
                validate: {
                    notEmpty: true,
                    notNull: true,
                },
            },
            academicLevelId: {
                type: DataTypes.UUID,
                allowNull: false,
                validate: {
                    notEmpty: true,
                    notNull: true,
                },
            },
            positionId: {
                type: DataTypes.UUID,
                allowNull: false,
                validate: {
                    notEmpty: true,
                    notNull: true,
                },
            },
            workingTypeId: {
                type: DataTypes.UUID,
                allowNull: false,
                validate: {
                    notEmpty: true,
                    notNull: true,
                },
            },
        },
        {
            paranoid: true,
            validate: {},
        },
    );
    Post.associate = (models) => {
        Post.belongsTo(models.Company, { foreignKey: "companyId", targetKey: "id", as: "Company" });
        Post.belongsTo(models.Position, { foreignKey: "positionId", targetKey: "id", as: "Position" });
        Post.belongsTo(models.AcademicLevel, {
            foreignKey: "academicLevelId",
            targetKey: "id",
            as: "AcademicLevel",
        });
        Post.belongsTo(models.WorkingType, { foreignKey: "workingTypeId", targetKey: "id", as: "WorkingType" });
        Post.belongsToMany(models.Career, { through: models.PostCareer, foreignKey: "postId", as: "Career" });
        Post.belongsToMany(models.District, {
            through: models.PostDistrict,
            foreignKey: "postId",
            as: "District",
        });
        Post.belongsToMany(models.Candidate, {
            through: models.CandidatePost,
            foreignKey: "postId",
            as: "Candidate",
        });
    };

    return Post;
};
