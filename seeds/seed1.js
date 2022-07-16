const sequelize = require("../config/connection");
const {
  User,
  Character_Main,
  Character_Score,
  Character_Saving_Throw,
  Character_Skill,
  Character_Prof_Lang,
} = require("../models");

const userData = require("./userData.json");
const charSeedData = require("./charSeedData.json");
const charScoreSeedData = require("./charScoreSeedData.json");
const charSavThrSeedData = require("./charSavThrSeedData.json");
const charSkillSeedData = require("./charSkillSeedData.json");
const charProfLangSeedData = require("./charProfLangSeedData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const characters of charSeedData) {
    await Character_Main.create({
      ...characters,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const character_scores of charScoreSeedData) {
    await Character_Score.Create({
      ...character_scores,
    });
  }

  for (const character_saving_throws of charSavThrSeedData) {
    await Character_Saving_Throw.Create({
      ...character_saving_throws,
    });
  }

  for (const character_skills of charSkillSeedData) {
    await Character_Skill({
      ...character_skills,
    });
  }

  for (const character_prof_langs of charProfLangSeedData) {
    await Character_Prof_Lang.Create({
      ...character_prof_langs,
    });
  }

  process.exit(0);
};

// seedDatabase();
