"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Post extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
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
        }
    }
    Post.init(
        {
            jobTitle: DataTypes.STRING, // not null
            salaryMin: DataTypes.BIGINT,
            salaryMax: DataTypes.BIGINT,
            ageMin: DataTypes.INTEGER,
            ageMax: DataTypes.INTEGER,
            experienceYear: DataTypes.INTEGER,
            appliedCount: DataTypes.INTEGER,
            endDate: DataTypes.DATEONLY, // not null
            needNumber: DataTypes.INTEGER,
            sex: DataTypes.BOOLEAN,
            jobDescribe: DataTypes.TEXT, // not null
            benefits: DataTypes.TEXT, // not null
            jobRequirement: DataTypes.TEXT, // not null
            workingAddress: DataTypes.TEXT,
            companyId: DataTypes.STRING,
            positionId: DataTypes.STRING,
            academicLevelId: DataTypes.STRING,
            workingTypeId: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Post",
            paranoid: true,
        },
    );
    return Post;
};
