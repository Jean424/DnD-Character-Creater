const router = require("express").Router();
const {
  User,
  Character,
  Character_Score,
  Character_Saving_Throw,
  Character_Skill,
  Character_Prof_Lang,
} = require("../../models");
// const withAuth = require('../../utils/auth');

// GET all characters
router.get("/", async (req, res) => {
  try {
    const characterData = await Character.findAll();
    res.status(200).json(characterData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single character
router.get("/:id", async (req, res) => {
  try {
    const characterData = await Character.findByPk(req.params.id);

    if (!characterData) {
      res.status(404).json({ message: "No character found with this id!" });
      return;
    }

    res.status(200).json(characterData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a character
router.post("/", async (req, res) => {
  try {
    const characterData = await Character.create(req.body);
    res.status(200).json(characterData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a character
router.delete("/:id", async (req, res) => {
  try {
    const characterData = await Character.destroy({
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
