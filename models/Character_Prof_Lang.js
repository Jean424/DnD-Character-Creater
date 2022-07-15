const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Character_Prof_Lang model
class Character_Prof_Lang extends Model {}

// create fields/columns for Character_Prof_Lang model
Character_Prof_Lang.init(
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
    tool: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    armor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    weapon: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    languages: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Character_Prof_Lang",
  }
);

module.exports = Character_Prof_Lang;
