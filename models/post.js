const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Post = sequelize.define(
        "Post",
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
            },
            jobTitle: {
                type: DataTypes.STRING,
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
                    notNull: true,
                    notEmpty: true,
                },
            },
            salaryMax: {
                type: DataTypes.INTEGER,
                validate: {
                    isInt: true,
                },
            },
            salaryMin: {
                type: DataTypes.INTEGER,
                validate: {
                    isInt: true,
                    checkOverMaxSalary(value) {
                        if (parseInt(value) > parseInt(this.salaryMax)) {
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
                        if (new Date(value) <= new Date(this.createdAt)) {
                            console.log("Value:", new Date(value));
                            console.log("createdAt:", new Date(this.createdAt));
                            throw new Error("Ngày hết hạn phải lớn hơn ngày hôm nay");
                        }
                    },
                },
            },
            requiredAmount: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notNull: true,
                    isInt: true,
                },
            },
            gender: {
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
                    isUUID: 4,
                    notNull: true,
                },
            },
            academicLevelId: {
                type: DataTypes.INTEGER,
                validate: {
                    isInt: true,
                },
            },
            positionId: {
                type: DataTypes.INTEGER,
                validate: {
                    isInt: true,
                },
            },
            workingTypeId: {
                type: DataTypes.INTEGER,
                validate: {
                    isInt: true,
                },
            },
            // avgRating: {
            //     type: DataTypes.DOUBLE,
            // },
        },
        {
            paranoid: true,
            validate: {},
        },
    );
    Post.associate = (models) => {
        Post.belongsTo(models.Company, { foreignKey: "companyId" });
        Post.belongsTo(models.Position, { foreignKey: "positionId" });
        Post.belongsTo(models.AcademicLevel, { foreignKey: "academicLevelId" });
        Post.belongsTo(models.WorkingType, { foreignKey: "workingTypeId" });
        Post.hasMany(models.Comment, { foreignKey: "postId", onDelete: "CASCADE" });
        Post.belongsToMany(models.Career, { through: models.PostCareer, foreignKey: "postId" });
        Post.belongsToMany(models.Candidate, { through: models.CandidatePost, foreignKey: "postId" });
    };

    return Post;
};
