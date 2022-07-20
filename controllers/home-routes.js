const router = require('express').Router();
const withAuth = require('../utils/auth');
const {
  Character_Main,
  Character_Score,
  Character_Saving_Throw,
  Character_Skill,
  Character_Prof_Lang,
  Character_Equipment,
  Character_Spells,
} = require("../models");
//render homepage
router.get('/', async (req, res) => {
  res.render('homepage', {loggedIn: req.session.loggedIn});
});

//redirect to homepage once logged in 
router.get('/login', async (req, res) => {
  if(req.session.loggedIn) {
    res.redirect('/');
    return; 
  }
  res.render("login");
});

//render signup page
router.get("/signup", async (req, res) => {
  res.render("signup");
});

// Direct to Charcter creator page
router.get('/character-creator',(req, res) => {
  if(!req.session.loggedIn) {
    res.redirect('/');
    return; 
  }
  res.render('character-creator', {
    loggedIn: req.session.loggedIn
  })

});

//-- Character Sheet
router.get('/character-sheet',async (req, res) => {
  if(!req.session.loggedIn){
      res.redirect('/');
      return;
  }
  
  res.render('character-sheet', {
      loggedIn: req.session.loggedIn,
  })

  res.render("character-sheet", {
    // loggedIn: req.session.loggedIn,
  });
});

// GET all characters
router.get("/characters/all", async (req, res) => {
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
router.get("/characters/:id", async (req, res) => {
  try {
    const characterData = await Character_Main.findByPk(req.params.id, {
      include: [
        { model: Character_Score},
        { model: Character_Saving_Throw},
        { model: Character_Skill },
        { model: Character_Prof_Lang },
        { model: Character_Equipment },
        { model: Character_Spells},
      ],
    });

    
    // Serialize data so the template can read it
    const character = characterData.get({ plain: true });
    // Pass serialized data and session flag into template
    res.render('character-sheet', character
    );

    if (!characterData) {
      res.status(404).json({ message: "No character found with this id!" });
      return;
    }
    // res.status(200).json(characterData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
