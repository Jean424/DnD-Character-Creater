const router = require("express").Router();
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
  allchoices,
  allresults,
} = require("../../public/js/character-creator");

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

// CREATE a character
router.post("/add", async (req, res) => {
  console.log("click");
  try {
    const characterData = await Character_Main.create({
      character_name: req.body.character_name,
      char_class: req.body.char_class,
      level: req.body.level,
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
    console.log("stored");
    getAPI(
      characterData.race,
      characterData.char_class,
      characterData.background
    );
    res.render("character-creator2", { allchoices });
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
