//-- access to stylesheet within express app
const path = require('path');

//-- Express
const express = require('express');
const routes = require('./controllers/');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;


//-- Feeding Express server info it needs to be used

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//-- this MUST be above routes
app.use(express.static(path.join(__dirname, 'public')));


//-- Defining APP template engine - Using Handelbars
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers'); //-- importing helpers
const hbs = exphbs.create({helpers}); //-- creating with helpers

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//------------------------------------------------------------------------------
//-- Express Session and Connection-Session Sequelize onboarding

const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: "super super secret",
  cookie: { originalMaxAge: 6000000 },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));


//------------------------------------------------------------------------------
// turn on routes

app.use(routes);







sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});
