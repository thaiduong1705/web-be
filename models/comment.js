const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
    const Comment = sequelize.define(
        "Comment",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            commentText: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            rating: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            postId: {
                type: DataTypes.UUID,
                validate: {
                    isUUID: 4,
                },
            },
            candidateId: {
                type: DataTypes.UUID,
                validate: {
                    isUUID: 4,
                },
            },
        },
        {},
    );

    Comment.associate = (models) => {
        Comment.belongsTo(models.Post, { foreignKey: "postId" });
        Comment.belongsTo(models.Candidate, { foreignKey: "candidateId" });
    };

    return Comment;
};
