const { Model, DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/connection");

class Character_Spells extends Model {}

Character_Spells.init(
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
      allowNull: false,
    },
    higher_level: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    components: {
      type: Sequelize.JSON,
      allowNull: false,
    },

    range: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    material: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    ritual: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },

    duration: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    concentration: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },

    casting_time: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    school: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    classes: {
      type: Sequelize.JSON,
      allowNull: false,
    },
    heal_at_slot_level: {
      type: Sequelize.JSON,
      allowNull: true,
    },

    attack_type: {
      type: DataTypes.STRING,
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

    damage_at_character_level: {
      type: Sequelize.JSON,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Character_Spells",
  }
);

module.exports = Character_Spells;

//Delete this
