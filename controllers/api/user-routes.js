const router = require("express").Router();
const { User } = require("../../models");
const sequelize = require("../../config/connection");
const bcrypt = require("bcrypt");

// all users
router.get("/", (req, res) => {
  User.findAll({
    include: { all: true, nested: true },
  })
    .then((dbUsers) => {
      res.json(dbUsers);
    })
    .catch((err) => {
      res.status(500).json({ msg: "An error occured!", err });
    });
});

// CREATE new user
router.post("/", async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    res.json(dbUserData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// // Login
router.post("/login", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }
    res
      .status(200)
      .json({ user: dbUserData, message: "You are now logged in!" });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
<<<<<<< HEAD
router.get("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        res.status(400).send("Unable to log out");
      } else {
        res.redirect("/");
      }
=======
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
>>>>>>> origin
    });
  } else {
    res.end();
  }
});

module.exports = router;
