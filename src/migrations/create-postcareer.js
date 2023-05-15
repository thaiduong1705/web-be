"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("PostCareers", {
            postId: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING,
                references: {
                    model: "Posts",
                    key: "id",
                },
            },
            careerId: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING,
                references: {
                    model: "Careers",
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
        await queryInterface.dropTable("PostCareers");
    },
};
