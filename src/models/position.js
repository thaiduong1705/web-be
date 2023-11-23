// "use strict";
// const { Model } = require("sequelize");
// module.exports = (sequelize, DataTypes) => {
//     class Position extends Model {
//         /**
//          * Helper method for defining associations.
//          * This method is not a part of Sequelize lifecycle.
//          * The `models/index` file will call this method automatically.
//          */
//         static associate(models) {
//             // define association here
//             Position.hasMany(models.Post, { foreignKey: "positionId" });
//         }
//     }
//     Position.init(
//         {
//             positionName: DataTypes.STRING,
//             keyCode: DataTypes.INTEGER,
//         },
//         {
//             sequelize,
//             modelName: "Position",
//         },
//     );
//     return Position;
// };

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Position = sequelize.define(
        "Position",
        {
            positionName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: true,
                    notEmpty: true,
                },
            },
            keyCode: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notNull: true,
                    notEmpty: true,
                },
            },
        },
        {},
    );
    Position.associate = (models) => {
        Position.hasMany(models.Post, { foreignKey: "positionId" });
    };

    return Position;
};
