"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class CandidatePost extends Model {
        static associate(models) {
            CandidatePost.belongsTo(models.Candidate, { foreignKey: "candidateId" });
            CandidatePost.belongsTo(models.Post, { foreignKey: "postId" });
        }
    }
    CandidatePost.init(
        {
            candidateId: DataTypes.STRING,
            postId: DataTypes.STRING,
            isApplied: DataTypes.BOOLEAN,
        },
        {
            sequelize,
            modelName: "CandidatePost",
        },
    );
    return CandidatePost;
};
