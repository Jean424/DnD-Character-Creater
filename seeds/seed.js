const sequelize = require("../config/connection");
const {
  User,
  Character_Main,
  Character_Score,
  Character_Saving_Throw,
  Character_Skill,
  Character_Prof_Lang,
  Character_Equipment,
  Character_Spells,
} = require("../models");

const userData = require("./userData.json");
const charSeedData = require("./charSeedData.json");
const charScoreSeedData = require("./charScoreSeedData.json");
const charSavThrSeedData = require("./charSavThrSeedData.json");
const charSkillSeedData = require("./charSkillSeedData.json");
const charProfLangSeedData = require("./charProfLangSeedData.json");
const charEquipmentSeedData = require("./charEquipmentSeedData.json");
const charSpellSeedData = require("./charSpellSeedData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const Users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const characters of charSeedData) {
    await Character_Main.create({
      ...characters,
    });
  }

  for (const character_scores of charScoreSeedData) {
    await Character_Score.create({
      ...character_scores,
    });
  }

  for (const character_saving_throws of charSavThrSeedData) {
    await Character_Saving_Throw.create({
      ...character_saving_throws,
    });
  }

  for (const character_skills of charSkillSeedData) {
    await Character_Skill.create({
      ...character_skills,
    });
  }

  for (const character_prof_langs of charProfLangSeedData) {
    await Character_Prof_Lang.create({
      ...character_prof_langs,
    });
  }
  for (const character_equipment of charEquipmentSeedData) {
    await Character_Equipment.create({
      ...character_equipment,
    });
  }
  for (const character_spells of charSpellSeedData) {
    await Character_Spells.create({
      ...character_spells,
    });
  }
  process.exit(0);
};

seedDatabase();
