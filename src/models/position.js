"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Position extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Position.hasMany(models.Post, { foreignKey: "positionId" });
        }
    }
    Position.init(
        {
            positionName: DataTypes.STRING,
            keyCode: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Position",
        },
    );
    return Position;
};
