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
//             PostCareer.belongsTo(models.District, { foreignKey: "districtId" });
//         }
//     }
//     PostCareer.init(
//         {
//             postId: DataTypes.STRING,
//             districtId: DataTypes.STRING,
//         },
//         {
//             sequelize,
//             modelName: "PostDistrict",
//         },
//     );
//     return PostCareer;
// };

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const PostDistrict = sequelize.define(
        "PostDistrict",
        {
            postId: {
                type: DataTypes.UUID,
            },
            careerId: {
                type: DataTypes.UUID,
            },
        },
        {},
    );
    PostDistrict.associate = (models) => {
        PostDistrict.belongsTo(models.Post, { foreignKey: "postId" });
        PostDistrict.belongsTo(models.District, { foreignKey: "districtId" });
    };

    return PostDistrict;
};
