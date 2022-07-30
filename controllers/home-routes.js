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
const { getAPI } = require("../public/js/character-creator.js");

//render homepage
router.get("/", async (req, res) => {
  res.render("homepage", { loggedIn: req.session.loggedIn });
});

router.get("/user/profile", async (req, res) => {
  if (req.session.loggedIn) {
    res.render("profile", {loggedIn: req.session.loggedIn});
    return;
  }
});

//redirect to homepage once logged in
router.get("/user/login", async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/", {loggedIn: req.session.loggedIn});
    return;
  }
  res.render("login");
});

//render signup page
router.get("/user/signup", async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/", {loggedIn: req.session.loggedIn} );
    return;
  }
  res.render("signup");
});

// logout route
router.get("/user/logout", async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/", {loggedIn: req.session.loggedIn} );
    return;
  }
  res.render("homepage");
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

router.get("/characters/add", async (req, res) => {
  res.render("character-creator", {
    loggedIn: req.session.loggedIn,
  });
});

router.get("/characters/add2", async (req, res) => {
  let charrace = req.session.charrace;
  let charclass = req.session.charclass;
  let charback = req.session.charback;
  let apiGet = await getAPI(charrace, charclass, charback, { plain: true },);
  res.render("character-creator2",apiGet);
});

module.exports = router;
