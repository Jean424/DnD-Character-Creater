const router = require("express").Router();
const {
  User,
  Character,
  Character_Score,
  Character_Saving_Throw,
  Character_Skill,
  Character_Prof_Lang,
} = require("../../models");

// GET all character scores
router.get("/", async (req, res) => {
  try {
    const charProfLangData = await Character_Prof_Lang.findAll();
    res.status(200).json(charProfLangData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a character score
router.post("/", async (req, res) => {
  try {
    const charProfLangData = await Character_Prof_Lang.create(req.body);
    res.status(200).json(charProfLangData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a character score
router.delete("/:id", async (req, res) => {
  try {
    const charProfLangData = await Character_Prof_Lang.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!charProfLangData) {
      res.status(404).json({ message: "No score found!" });
      return;
    }

    res.status(200).json(charProfLangData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
