const sequelize = require("../config/connection");
const {
  User,
  Character,
  Character_Score,
  Character_Saving_Throw,
  Character_Skill,
  Character_Prof_Lang,
} = require("../models");

const charSeedData = require("./charSeedData.json");
const charScoreSeedData = require("./charScoreSeedData.json");
const charSavThrSeedData = require("./charSavThrSeedData.json");
const charSkillSeedData = require("./charSkillSeedData.json");
const charProfLangSeedData = require("./charProfLangSeedData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const characters = await Character.bulkCreate(charSeedData, {
    individualHooks: true,
    returning: true,
  });
  for (const character_scores of charScoreSeedData) {
    await Character_Score.create({
      ...character_scores,
      character_id:
        characters[Math.floor(Math.random() * characters.length)].id,
    });
  }
  const character_scores = await Character_Score.bulkCreate(charScoreSeedData, {
    individualHooks: true,
    returning: true,
  });
  const character_saving_throws = await Character_Saving_Throw.bulkCreate(
    charSavThrSeedData,
    {
      individualHooks: true,
      returning: true,
    }
  );
  const character_skills = await Character_Skill.bulkCreate(charSkillSeedData, {
    individualHooks: true,
    returning: true,
  });
  const character_prof_langs = await Character_Prof_Lang.bulkCreate(
    charProfLangSeedData,
    {
      individualHooks: true,
      returning: true,
    }
  );

  process.exit(0);
};

// seedDatabase();
