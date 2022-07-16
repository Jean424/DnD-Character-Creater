const { Model, DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/connection");

class Character_Main extends Model {}

Character_Main.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "User",
        key: "id",
      },
    },
    id: {
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
      defaultValue: 0,
    },
    inspiration: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    // char_score_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: "Character_Score",
    //     key: "id",
    //   },
    // },
    // char_prof_lang_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: "Character_Prof_Lang",
    //     key: "id",
    //   },
    // },
    // char_sav_throw_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: "Character_Saving_Throw",
    //     key: "id",
    //   },
    // },
    // char_skill_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: "Character_Skill",
    //     key: "id",
    //   },
    // },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Character_Main",
  }
);

module.exports = Character_Main;

//Delete this
