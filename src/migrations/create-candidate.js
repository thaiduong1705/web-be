"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Candidates", {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING,
            },
            candidateName: {
                type: Sequelize.STRING,
            },
            age: {
                type: Sequelize.INTEGER,
            },
            profileImage: {
                type: Sequelize.STRING,
            },
            CVImage: {
                type: Sequelize.STRING,
            },
            phoneNumber: {
                type: Sequelize.STRING,
            },
            email: {
                type: Sequelize.STRING,
            },
            gender: {
                type: Sequelize.BOOLEAN,
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
        await queryInterface.dropTable("Candidates");
    },
};
