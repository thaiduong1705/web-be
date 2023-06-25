"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Reports", {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING,
            },
            appliedCount: {
                type: Sequelize.INTEGER,
            },
            postCount: {
                type: Sequelize.INTEGER,
            },
            successedAppliedCount: {
                type: Sequelize.INTEGER,
            },
            dateReport: {
                type: Sequelize.DATEONLY,
                unique: true,
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
        await queryInterface.dropTable("Reports");
    },
};
