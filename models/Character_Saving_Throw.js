const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Character_Saving_Throw extends Model {}

Character_Saving_Throw.init(
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
    str: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    dex: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    con: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    int: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    wis: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    cha: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Character_Saving_Throw",
  }
);

module.exports = Character_Saving_Throw;
