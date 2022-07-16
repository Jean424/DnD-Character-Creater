const router = require("express").Router();
const {
  User,
  Character_Main,
  Character_Score,
  Character_Saving_Throw,
  Character_Skill,
  Character_Prof_Lang,
} = require("../../models");

// GET all character saving throws
router.get("/", async (req, res) => {
  try {
    const charSavThrData = await Character_Saving_Throw.findAll();
    res.status(200).json(charSavThrData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a character saving throw
router.post("/", async (req, res) => {
  try {
    const charSavThrData = await Character_Saving_Throw.create(req.body);
    res.status(200).json(charSavThrData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a character saving throw
router.delete("/:id", async (req, res) => {
  try {
    const charSavThrData = await Character_Saving_Throw.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!charSavThrData) {
      res.status(404).json({ message: "No saving throw found!" });
      return;
    }

    res.status(200).json(charSavThrData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

//Delete this
