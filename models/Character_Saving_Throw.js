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
        model: "character",
        key: "id",
      },
    },
    strength: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    dexterity: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    constitution: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    intelligence: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    wisdom: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    charisma: {
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
