const { Model, DataTypes, Sequelize } = require("sequelize");
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
        model: "Character_Main",
        key: "id",
      },
    },
    tool: {
      type: Sequelize.JSON,
      allowNull: true,
    },
    armor: {
      type: Sequelize.JSON,
      allowNull: true,
    },
    weapon: {
      type: Sequelize.JSON,
      allowNull: true,
    },
    languages: {
      type: Sequelize.JSON,
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

//Delete this
