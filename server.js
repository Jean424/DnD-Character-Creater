const path = require('path');

//-- Express
const express = require('express');
const routes = require('./controllers/');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));


const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers'); //-- importing helpers
const hbs = exphbs.create({helpers}); //-- creating with helpers

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


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




app.use(routes);


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});
