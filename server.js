// Dependencies
const path = require("path");
const express = require("express");
const session = require("express-session");

// Import express-handlebars
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const helpers = require("./utils/helpers");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

<<<<<<< HEAD
// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });
=======
// Import express-handlebars
// const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });
// const session = require('express-session');
>>>>>>> origin

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Describe what the following two lines of code are doing.
// The following two lines of code are setting Handlebars.js as the default template engine.
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static("images"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(require("./controllers/home-routes"));

app.use(routes);

// Starts the server to begin listening

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});
