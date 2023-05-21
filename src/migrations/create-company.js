"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Companies", {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING,
            },
            companyName: {
                type: Sequelize.TEXT,
            },
            imageLink: {
                type: Sequelize.STRING,
            },
            url: {
                type: Sequelize.STRING,
            },
            email: {
                type: Sequelize.TEXT,
            },
            phone: {
                type: Sequelize.TEXT,
            },
            address: {
                type: Sequelize.TEXT,
            },
            introduction: {
                type: Sequelize.TEXT,
            },
            companySize: {
                type: Sequelize.STRING,
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
        await queryInterface.dropTable("Companies");
    },
};
