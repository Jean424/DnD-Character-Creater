const User = require("./User");
const Character = require("./Character");
const Character_Score = require("./Character_Score");
const Character_Saving_Throw = require("./Character_Saving_Throw");
const Character_Skill = require("./Character_Skill");
const Character_Prof_Lang = require("./Character_Prof_Lang");

User.hasMany(Character, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Character.belongsTo(User, {
  foreignKey: "user_id",
});

Character.hasOne(Character_Score, {
  foreignKey: "character_id",
  onDelete: "CASCADE",
});

Character_Score.belongsTo(Character, {
  foreignKey: "character_id",
});

Character.hasOne(Character_Saving_Throw, {
  foreignKey: "character_id",
  onDelete: "CASCADE",
});
Character_Saving_Throw.belongsTo(Character, {
  foreignKey: "character_id",
});

Character.hasOne(Character_Skill, {
  foreignKey: "character_id",
  onDelete: "CASCADE",
});
Character_Skill.belongsTo(Character, {
  foreignKey: "character_id",
});

Character.hasOne(Character_Prof_Lang, {
  foreignKey: "character_id",
  onDelete: "CASCADE",
});
Character_Prof_Lang.belongsTo(Character, {
  foreignKey: "character_id",
});

module.exports = {
  User,
  Character,
  Character_Score,
  Character_Saving_Throw,
  Character_Skill,
  Character_Prof_Lang,
};
