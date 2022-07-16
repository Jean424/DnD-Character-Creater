const User = require("./User");
const Character_Main = require("./Character_Main");
const Character_Score = require("./Character_Score");
const Character_Saving_Throw = require("./Character_Saving_Throw");
const Character_Skill = require("./Character_Skill");
const Character_Prof_Lang = require("./Character_Prof_Lang");
const Character_Connections = require("./Character_Connections");
const sequelize = require("../config/connection");

// sequelize.sync({ force: true });

User.hasMany(Character_Main, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Character_Main.belongsTo(User, {
  foreignKey: "user_id",
});

Character_Main.hasOne(Character_Score, {
  foreignKey: "character_id",
  onDelete: "CASCADE",
});

Character_Score.belongsTo(Character_Main, {
  foreignKey: "character_id",
});

Character_Main.hasOne(Character_Saving_Throw, {
  foreignKey: "character_id",
  onDelete: "CASCADE",
});
Character_Saving_Throw.belongsTo(Character_Main, {
  foreignKey: "character_id",
});

Character_Main.hasOne(Character_Skill, {
  foreignKey: "character_id",
  onDelete: "CASCADE",
});
Character_Skill.belongsTo(Character_Main, {
  foreignKey: "character_id",
});

Character_Main.hasOne(Character_Prof_Lang, {
  foreignKey: "character_id",
  onDelete: "CASCADE",
});
Character_Prof_Lang.belongsTo(Character_Main, {
  foreignKey: "character_id",
});

module.exports = {
  User,
  Character_Main,
  Character_Score,
  Character_Saving_Throw,
  Character_Skill,
  Character_Prof_Lang,
  Character_Connections,
};
