const router = require("express").Router();
const { User } = require("../../models");
const bcrypt = require("bcrypt");
const withAuth = require("../../utils/auth");
const { Session } = require("express-session");
const session = require("express-session");

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
router.post("/signup", (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  }).then((dbUserData) => {
    res.json(dbUserData);
  });
});

// LOG IN for users/ verify users
router.post("/login", (req, res) => {
  // expects {email: 'lernantino@gmail.com', password: 'password1234'}
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((dbUserData) => {
    if (!dbUserData) {
      res.status(400).json({ message: "No user with that email address!" });
      return;
    }
    // res.json({ user: dbUserData});
    // verify user
    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect email or password!" });
      return;
    }
    req.session.save(() => {
      // declare session variables
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;

      res.json({ user: dbUserData, message: "You are now logged in!" });
    });
  });
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
