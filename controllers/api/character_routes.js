const router = require("express").Router();
const { getCipherInfo } = require("crypto");
const path = require("path");
const {
  User,
  Character_Main,
  Character_Score,
  Character_Saving_Throw,
  Character_Skill,
  Character_Prof_Lang,
  Character_Equipment,
  Character_Spells,
} = require("../../models");
const {
  getAPI,
  getSaves,
  getSkills,
  getProf,
} = require("../../public/js/character-creator.js");

// GET all characters
router.get("/all", async (req, res) => {
  try {
    const characterData = await Character_Main.findAll({
      // where: [(user_id = req.user.id)],
    });
    const character = characterData.get({ plain: true });
    res.render("character-sheet", character);
    if (!characterData) {
      res
        .status(404)
        .json({ message: "No characters found belonging to this user!" });
      return;
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// view a single character sheet
router.get("/:id", async (req, res) => {
  try {
    const characterData = await Character_Main.findByPk(req.params.id, {
      include: [
        { model: Character_Score },
        { model: Character_Saving_Throw },
        { model: Character_Skill },
        { model: Character_Prof_Lang },
        { model: Character_Equipment },
        { model: Character_Spells },
      ],
    });
    // Serialize data so the template can read it
    const character = characterData.get({ plain: true });
    // console.log(character);
    // Pass serialized data and session flag into template
    res.render("character-sheet", character);

    if (!characterData) {
      res.status(404).json({ message: "No character found with this id!" });
      return;
    }
    // res.status(200).json(characterData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// Direct to Charcter creator page

// CREATE a character
router.post("/add", async (req, res) => {
  console.log("click");
  try {
    const characterData = await Character_Main.create({
      character_name: req.body.character_name,
      char_class: req.body.char_class,
      age: req.body.age,
      gender: req.body.gender,
      race: req.body.race,
      background: req.body.background,
    });
    const scoreData = await Character_Score.create({
      character_id: characterData.id,
      str: req.body.str,
      dex: req.body.dex,
      con: req.body.con,
      int: req.body.int,
      wis: req.body.wis,
      cha: req.body.cha,
    });
    req.session.characterid = characterData.id;
    req.session.charrace = characterData.race;
    req.session.charclass = characterData.char_class;
    req.session.charback = characterData.background;
    console.log("Character ID is " + characterData.id);
    // await getAPI(
    //   characterData.race,
    //   characterData.char_class,
    //   characterData.background
    // );
    res.redirect("/characters/add2");

    // res.render("character-creator2", { langchoices });
    // res.redirect("character-creator2", characterData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// continue CREATE a character
router.post("/add2", async (req, res) => {
  let characterid = req.session.characterid;
  let apistring = req.session.apidata;
  const apiGet = JSON.parse(apistring);
  // console.log(apiGet);
  try {
    const characterData = await Character_Main.findByPk(
      req.params.characterid,
      {
        include: [
          { model: Character_Score },
          // { model: Character_Saving_Throw },
          // { model: Character_Skill },
          // { model: Character_Prof_Lang },
          // { model: Character_Equipment },
          // { model: Character_Spells },
        ],
      }
    );
    const charid = characterid;
    const saveGet = await getSaves(apiGet, charid, { plain: true });
    const sendskills = req.body.class_prof;
    const skillGet = await getSkills(sendskills, apiGet, charid, {
      plain: true,
    });
    const sendprofchoice = req.body.class_prof;
    const sendlangchoices = req.body.back_lang;
    const profGet = await getProf(
      sendprofchoice,
      sendlangchoices,
      apiGet,
      charid
      // {
      //   plain: true,
      // }
    );
    console.log("------");
    const characterSave = await Character_Saving_Throw.create(saveGet);
    const characterSkill = await Character_Skill.create(skillGet);
    const characterProf = await Character_Prof_Lang.create(profGet, {
      // plain: true,
    });
    // console.log("Character Saves", characterSave);
    // console.log("Character Skills", characterSkill);
    // console.log("Character ProfLang", characterProf);
    // function getSave(){apiGet.classdata.saving_throws.forEach(element => {
    //       console.log(element.name.toLowerCase())
    //      return element.name.toLowerCase() = true;

    //     });}
    // const characterSkill = await Character_Skill.create({
    //   character_id: characterid,
    //   acrobatics: false,
    //   animal_handling: false,
    //   arcana: false,
    //   athletics: false,
    //   deception: false,
    //   history: true,
    //   insight: false,
    //   intimidation: false,
    //   investigation: false,
    //   medicine: true,
    //   nature: false,
    //   perception: false,
    //   performance: false,
    //   persuasion: true,
    //   religion: true,
    //   sleight_of_hand: false,
    //   stealth: false,
    //   survival: false,
    // });
    // const characterProf = await Character_Prof_Lang.create({
    //   character_id: characterid,
    //   tool,
    //   armor,
    //   weapon,
    //   languages,
    // });
    // const characterEquip = await Character_Equipment.bulkCreate({
    //   character_id: characterid,
    //   index: "chain-mail",
    //   name: "Chain Mail",
    //   equipment_category: "armor",
    //   armor_category: "fill",
    //   ac: 16,
    //   ac_dex_bonus: false,
    //   str_minimum: 13,
    //   weight: 55,
    //   cost: 75,
    //   cost_unit: "gp",
    // });
    console.log("stored");
    // await getAPI(
    //   characterData.race,
    //   characterData.char_class,
    //   characterData.background
    // );
    res.redirect("/characters/" + characterid);

    // res.render("character-creator2", { langchoices });
    // res.redirect("character-creator2", characterData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// DELETE a character
router.delete("/:id", async (req, res) => {
  try {
    const characterData = await Character_Main.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!characterData) {
      res.status(404).json({ message: "No character found with this id!" });
      return;
    }

    res.status(200).json(characterData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
