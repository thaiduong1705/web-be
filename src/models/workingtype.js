"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class WorkingType extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            WorkingType.hasMany(models.Post, { foreignKey: "workingTypeId" });
        }
    }
    WorkingType.init(
        {
            workingTypeName: DataTypes.STRING,
            keyCode: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "WorkingType",
        },
    );
    return WorkingType;
};

const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
    const WorkingType = sequelize.define(
        "WorkingType",
        {
            workingTypeName: {
                type: DataTypes.UUID,
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

    WorkingType.associate = (models) => {
        WorkingType.hasMany(models.Post, { foreignKey: "workingTypeId" });
    };

    return WorkingType;
};
