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
                unique: true,
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
                validate: {
                    isUUID: 4,
                },
            },
            positionId: {
                type: DataTypes.INTEGER,
                validate: {
                    isUUID: 4,
                },
            },
        },
        {
            modelName: "Candidate",
        },
    );

    Candidate.associate = (models) => {
        Candidate.belongsTo(models.UserAccount, { foreignKey: "id", onDelete: "CASCADE" });
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
