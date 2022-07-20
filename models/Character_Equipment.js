const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Character_Equipment extends Model {}

Character_Equipment.init(
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
    index: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(5000),
      allowNull: true,
    },
    special: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    equipment_category: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    tool_category: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    armor_category: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    ac: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    ac_dex_bonus: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    str_minimum: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    weapon_category: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    weapon_melee: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },

    weapon_range: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    damage_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    damage_dice: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    cost: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    cost_unit: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    properties: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Character_Equipment",
  }
);

module.exports = Character_Equipment;
