const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const { beforeValidate } = require("./User");

class Character_Score extends Model {}

Character_Score.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    character_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Character",
        key: "id",
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        min: 1,
        max: 20,
      },
    },
    mod: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      hooks: {
        beforeValidate(newScoreData) {
          newScoreData.mod = (newScoreData + 10) / 2;
          return newScoreData.mod;
        },
      },
      validate: {
        min: -5,
        max: 5,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Character_Score",
  }
);

module.exports = Character_Score;
