const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Character extends Model {}

Character.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    user_name: {
      type: DataTypes.STRING,
      references: {
        model: "user",
        key: "name",
      },
    },
    character_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    character_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    class: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    race: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    background: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alignment: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    experience: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    inspiration: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    char_score_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "char_score",
        key: "id",
      },
    },
    char_prof_lang_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "char_prof_lang",
        key: "id",
      },
    },
    char_sav_throw_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "char_sav_throw",
        key: "id",
      },
    },
    char_skill_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "char_skill",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Character",
  }
);

module.exports = Character;
