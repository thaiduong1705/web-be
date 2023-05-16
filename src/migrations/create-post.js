"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Posts", {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING,
            },
            jobTitle: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            companyId: {
                allowNull: false,
                type: Sequelize.STRING,
                references: {
                    model: "Companies",
                    key: "id",
                },
            },
            positionId: {
                type: Sequelize.STRING,
                references: {
                    model: "Positions",
                    key: "id",
                },
            },
            salaryMin: {
                type: Sequelize.BIGINT,
            },
            salaryMax: {
                type: Sequelize.BIGINT,
            },
            experienceYear: {
                type: Sequelize.INTEGER,
            },
            academicLevelId: {
                type: Sequelize.STRING,
                references: {
                    model: "AcademicLevels",
                    key: "id",
                },
            },
            ageMin: {
                type: Sequelize.INTEGER,
            },
            ageMax: {
                type: Sequelize.INTEGER,
            },
            workingTypeId: {
                type: Sequelize.STRING,
                references: {
                    model: "WorkingTypes",
                    key: "id",
                },
            },
            viewCount: {
                type: Sequelize.INTEGER,
            },
            endDate: {
                type: Sequelize.DATEONLY,
            },
            needNumber: {
                type: Sequelize.INTEGER,
            },
            sex: {
                type: Sequelize.BOOLEAN,
            },
            jobDescribe: {
                type: Sequelize.TEXT,
            },
            benefits: {
                type: Sequelize.TEXT,
            },
            jobRequirement: {
                allowNull: false,
                type: Sequelize.TEXT,
            },
            contact: {
                allowNull: false,
                type: Sequelize.TEXT,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Posts");
    },
};