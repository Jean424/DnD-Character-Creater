const router = require("express").Router();
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
// const withAuth = require('../../utils/auth');

// CREATE a character
    router.post("/addcharacter", async (req, res) => { 
      try {
        const characterData = await Character_Main.create({
          character_name: req.body.character_name,
          //  player_name: req.session.user.username
          class: req.body.class,
          level : req.body.level,
          age: req.body.age,
          gender: req.body.gender,
          race: req.body.race,
          background: req.body.background,
        });
        res.json(characterData);
        res.redirect('/characters/' + characterData.id)
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
