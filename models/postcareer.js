// "use strict";
// const { Model } = require("sequelize");
// module.exports = (sequelize, DataTypes) => {
//     class PostCareer extends Model {
//         /**
//          * Helper method for defining associations.
//          * This method is not a part of Sequelize lifecycle.
//          * The `models/index` file will call this method automatically.
//          */
//         static associate(models) {
//             PostCareer.belongsTo(models.Post, { foreignKey: "postId" });
//             PostCareer.belongsTo(models.Career, { foreignKey: "careerId" });
//         }
//     }
//     PostCareer.init(
//         {
//             postId: DataTypes.STRING,
//             careerId: DataTypes.STRING,
//         },
//         {
//             sequelize,
//             modelName: "PostCareer",
//         },
//     );
//     return PostCareer;
// };

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const PostCareer = sequelize.define(
        "PostCareer",
        {
            postId: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false,
                references: {
                    model: "Post",
                    key: "id",
                },
            },
            careerId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                references: {
                    model: "Career",
                    key: "id",
                },
            },
        },
        {},
    );

    return PostCareer;
};
