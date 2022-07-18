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

// GET all characters
router.get("/all", async (req, res) => {
  try {
    const characterData = await Character_Main.findAll({
      include: [
        { model: Character_Score },
        { model: Character_Saving_Throw },
        { model: Character_Skill },
        { model: Character_Prof_Lang },
        { model: Character_Equipment },
        { model: Character_Spells },
      ],
    });
    res.status(200).json(characterData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// view a single character sheet
// router.get("/character/:id", async (req, res) => {
//   try {
//     const characterData = await Character_Main.findByPk(req.params.id, {
//       include: [
//         { model: Character_Score },
//         { model: Character_Saving_Throw },
//         { model: Character_Skill },
//         { model: Character_Prof_Lang },
//         { model: Character_Equipment },
//         { model: Character_Spells },
//       ],
//     });

    
//     // Serialize data so the template can read it
//     const character = characterData.map((character) => character.get({ plain: true }));

//     // Pass serialized data and session flag into template
//     res.render('character-sheet', { 
//       // character, 
//     });
//     if (!characterData) {
//       res.status(404).json({ message: "No character found with this id!" });
//       return;
//     }
//     res.status(200).json(characterData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


// CREATE a character
router.post("/", async (req, res) => {
  try {
    const characterData = await Character_Main.create(req.body);
    res.status(200).json(characterData);
  } catch (err) {
    res.status(400).json(err);
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
