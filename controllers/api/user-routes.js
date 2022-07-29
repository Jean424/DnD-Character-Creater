const router = require("express").Router();
const { User } = require("../../models");
const bcrypt = require("bcrypt");
const withAuth = require("../../utils/auth");
const { Session } = require("express-session");
const session = require("express-session");

// importing User and character models
const { User, Character } = require("../../models/index");

// confirms user is logged in before executing function
const withAuth = require("../../utils/auth");

// Get all users
router.get("/", (req, res) => {
  User.findAll({
    attributes: { exclude: ["password"] },
  })
    .then((userData) => res.json(userData))
    .catch((err) => {
      res.status(500).json(err);
    });
});

// CREATE new user
router.post("/signup", async (req, res) => {
  console.log("click");
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    res.redirect("/user/login");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// // Login
router.post("/login", async (req, res) => {
  const user = await User.findOne({ where: { email: req.body.email } });
  if (user) {
    const password_valid = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (password_valid) {
      req.session.loggedIn = true;
      res.redirect("/");
    } else {
      res.status(400).json({ error: "Email or Password Incorrect" });
    }
  } else {
    res.status(404).json({ error: "User does not exist" });
  }
});

// Logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});
//testing//

module.exports = router;
