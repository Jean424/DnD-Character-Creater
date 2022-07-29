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

//redirect to homepage once logged in
router.get("/user/login", async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

//render signup page
router.get("/user/signup", async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("signup");
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
    // loggedIn: req.session.loggedIn,
  });
});

router.get("/characters/add2", async (req, res) => {
  let charrace = req.session.charrace;
  let charclass = req.session.charclass;
  let charback = req.session.charback;
  const apiGet = await getAPI(charrace, charclass, charback, { plain: true });
  let apistring = JSON.stringify(apiGet);
  req.session.apidata = apistring;
  res.render("character-creator2", apiGet);
});

router.get("/profile", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("homepage");
    return;
  }

  try {
    // console.log(req.session.User)
    const characterData = await Character.findAll({
      where: {
        user_id: req.session.user_id,
      },
      attributes: [
        "id",
        "user_id",
        "name",
        "race",
        "class",
        "gender",
        "name",
        "race",
        "class",
        "gender",
        "age",
        "player_level",
        "proficiency_bonus",
        "alignment",
        "languages",
        "proficiencies",
      ],
    });

    const characters = characterData.map((character) =>
      character.get({ plain: true })
    );

    res.render("profile", {
      characters,
      loggedIn: req.session.loggedIn,
      username: req.session.username,
    });
  } catch (err) {
    // console.log(err);
    res.status(500).json(String(err));
  }
});

//-- if gets here when routing, throw 404
router.use((req, res) => {
  res
    .status(404)
    .json({
      request: {
        method: req.method,
        params: req.params,
        body: req.body,
        path: "./home-routes",
      },
      response: {
        status: 404,
        message: "Request failure. Page not found.",
      },
    })
    .end();
});

module.exports = router;
