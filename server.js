
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');
const { Character_Main } = require('./models');
const submitCharacter = require('./public/js/character-submit');

const app = express();
const PORT = process.env.PORT || 3001;

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

const hbs = exphbs.create({ helpers });
hbs.handlebars.registerHelper('get_mod', function(score) {
  let mod = Math.floor((score-10)/2);
  return mod;
});
hbs.handlebars.registerHelper('sign', function(mod) {
  let sign = ""
  if (mod > 0){
    sign = "+" + mod
  }
  return sign;
});
hbs.handlebars.registerHelper('checked', function(prof) {
  if (prof === true){
  document.getElementsByName('AvButtonAutoGames').checked = true}
});
hbs.handlebars.registerHelper('passive', function(skill) {
  let passive = "+" + (skill + 10);
  return passive;}
);
hbs.handlebars.registerHelper('checked', function(isprof) {
  if(isprof === true){
    let checked = "checked";
    return checked;
  }
  else {
    return null;
  }
}  
);
hbs.handlebars.registerHelper('proficient', function(mod) {
   let bonus = (mod + 2);
    return bonus;
  
}  
);
hbs.handlebars.registerHelper('stringify', function (Object) {
  return JSON.stringify(Object);
});
hbs.handlebars.registerHelper('tostring', function (array) {
  return array.join(" ");
});
hbs.handlebars.registerHelper('submitcharacter', function () {
  return submitCharacter()})



app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
