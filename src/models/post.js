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
            Post.belongsTo(models.Company, { foreignKey: "companyId" });
            Post.belongsTo(models.Position, { foreignKey: "positionId" });
            Post.belongsTo(models.Experience, { foreignKey: "experienceId" });
            Post.belongsTo(models.AcademicLevel, { foreignKey: "academicLevelId" });
            Post.belongsTo(models.WorkingType, { foreignKey: "workingTypeId" });
            Post.belongsToMany(models.Career, { through: models.PostCareer });
            Post.belongsToMany(models.District, { through: models.PostDistrict });
        }
    }
    Post.init(
        {
            jobTitle: DataTypes.STRING,
            companyId: DataTypes.STRING,
            positionId: DataTypes.STRING,
            salary: DataTypes.BIGINT,
            experienceYear: DataTypes.INT,
            academicLevelId: DataTypes.STRING,
            workingTypeId: DataTypes.STRING,
            viewCount: DataTypes.STRING,
            endDate: DataTypes.DATEONLY,
            needNumber: DataTypes.INTEGER,
            sex: DataTypes.BOOLEAN,
            jobDescribe: DataTypes.TEXT,
            benefits: DataTypes.TEXT,
            jobRequirements: DataTypes.TEXT,
            contact: DataTypes.TEXT,
        },
        {
            sequelize,
            modelName: "Post",
        },
    );
    return Post;
};
