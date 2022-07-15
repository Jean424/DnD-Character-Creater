const router = require("express").Router();
const {
  User,
  Character,
  Character_Score,
  Character_Saving_Throw,
  Character_Skill,
  Character_Prof_Lang,
} = require("../../models");

// GET all character skills
router.get("/", async (req, res) => {
  try {
    const charSkillData = await Character_Skill.findAll();
    res.status(200).json(charSkillData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a character skill
router.post("/", async (req, res) => {
  try {
    const charSkillData = await Character_Skill.create(req.body);
    res.status(200).json(charSkillData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a character skill
router.delete("/:id", async (req, res) => {
  try {
    const charSkillData = await Character_Skill.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!charSkillData) {
      res.status(404).json({ message: "No skill found!" });
      return;
    }

    res.status(200).json(charSkillData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
