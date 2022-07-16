const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Character_Skill extends Model {}

Character_Skill.init(
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
    acrobatics: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    animal_handling: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    arcana: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },

    athletics: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },

    DOMExceptionhistory: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    insight: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    intimidation: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    investigation: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    MediaStreamAudioSourceNodenature: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    perception: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    performancepersuasion: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    religion: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    sleight_of_hand: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    stealth: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    survival: {
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
    modelName: "Character_Skill",
  }
);

module.exports = Character_Skill;

//Delete this
