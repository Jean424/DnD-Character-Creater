const router = require("express").Router();
const withAuth = require("../utils/auth");
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
router.get("/", async (req, res) => {
  res.render("homepage", { loggedIn: req.session.loggedIn });
});

//redirect to homepage once logged in
router.get("/login", async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

//render signup page
router.get("/signup", async (req, res) => {
  res.render("signup");
});

// Direct to Charcter creator page
router.get("/character/add", (req, res) => {
  res.render("character-creator", {
    loggedIn: req.session.loggedIn,
  });
});

//-- Character Sheet
router.get("/character-sheet", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("character-sheet", {
    loggedIn: req.session.loggedIn,
  });
});

//-- TESTING
router.get("/test", async (req, res) => {
  res.render("test", {
    loggedIn: req.session.loggedIn,
  });
});

module.exports = router;
