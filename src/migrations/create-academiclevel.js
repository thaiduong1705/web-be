"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("AcademicLevels", {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING,
            },
            academicLevelName: {
                type: Sequelize.STRING,
            },
            keyCode: {
                type: Sequelize.INTEGER,
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
        await queryInterface.dropTable("AcademicLevels");
    },
};
