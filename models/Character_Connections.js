const { Model, DataTypes, Sequelize } = require("sequelize");
const User = require("./User");
const Character_Main = require("./Character_Main");
const Character_Score = require("./Character_Score");
const Character_Saving_Throw = require("./Character_Saving_Throw");
const Character_Skill = require("./Character_Skill");
const Character_Prof_Lang = require("./Character_Prof_Lang");
const sequelize = require("../config/connection");

class Character_Connections extends Model {}

Character_Connections.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "User",
        key: "id",
      },
    },
    character_main_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Character_Main",
        key: "id",
      },
    },
    character_score_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Character_Score",
        key: "id",
      },
    },
    character_prof_lang_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Character_Prof_Lang",
        key: "id",
      },
    },
    character_sav_throw_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Character_Saving_Throw",
        key: "id",
      },
    },
    character_skill_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Character_Skill",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Character_Connections",
  }
);

module.exports = Character_Connections;
