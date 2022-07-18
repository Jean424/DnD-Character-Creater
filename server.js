// // Dependencies
// const path = require("path");
// const express = require("express");
// const session = require("express-session");

// // Import express-handlebars
// const exphbs = require("express-handlebars");
// const routes = require("./controllers");
// const helpers = require("./utils/helpers");

// const sequelize = require("./config/connection");
// const SequelizeStore = require("connect-session-sequelize")(session.Store);

// // Import express-handlebars
// // const exphbs = require('express-handlebars');
// // const session = require('express-session');

// // Sets up the Express App
// const app = express();
// const PORT = process.env.PORT || 3001;

// const sess = {
//   secret: "super super secret",
//   cookie: { originalMaxAge: 600000 },
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize,
//   }),
// };

// app.use(session(sess));

// const hbs = exphbs.create({ helpers });

// app.engine("handlebars", hbs.engine);
// app.set("view engine", "handlebars");

// app.use(express.static("images"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "public")));

// app.use(routes);

// // Starts the server to begin listening

// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
// });

const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });
hbs.handlebars.registerHelper('get_mod', function(score) {
  const mod = Math.floor((score-10)/2);
  // const mod = (part1 / 2);
  return mod;
})

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
