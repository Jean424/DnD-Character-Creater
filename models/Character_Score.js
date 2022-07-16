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
        model: "Character_Main",
        key: "id",
      },
    },
    strength: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        min: 1,
        max: 20,
      },
    },
    dexterity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        min: 1,
        max: 20,
      },
    },
    constitution: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        min: 1,
        max: 20,
      },
    },
    intelligence: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        min: 1,
        max: 20,
      },
    },
    wisdom: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        min: 1,
        max: 20,
      },
    },
    charisma: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        min: 1,
        max: 20,
      },
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

//Delete this
