

async function seedDatabase () {
  require('dotenv').config(); //-- for local variable caching

  const db = require('../config/connection_mysql2')
  // execute in parallel, next console.log in 3 seconds
  try {
    await Promise.all([
      db.query('DROP DATABASE IF EXISTS character_db'),
      db.query('select sleep(2)'),
      db.query('CREATE DATABASE character_db'),
      // db.query('use character_db'),
    ]);
    
    await db.end(); //-- Close connection
    return true; //-- return true as promise
  }
  catch (err) { 
    console.log(err);
    await db.end(); //-- Close connection
    return false; //-- return true as promise
  };

}

//------------------------------------------------------------------------------
//-- Building seed tables with Sequelize based on Model data and seed JSON data
async function seedTables() {

  //-- Used to build SQL seed data, and erase anything that may exist
  const sequelize = require('../config/connection');

  //-- Grab database Table models
  const { User, Character } = require('../models');

  //-- Grab seed data to build a seed database
  const seed_Users = require('./seed_User.json');
  const seed_Character = require('./seed_Character.json');


  await sequelize.sync({ force: true });

  // -- Grab all users and build Table based on Model
  const users = await User.bulkCreate(seed_Users, {
    individualHooks: true,
    returning: true,
  });
  
  //-- grab all roles and build Table based on Model
  for (const character of seed_Character) {
    const newCharacter = await Character.create({
    ...character,
    });
  }


 
  
};



const seed = async () => {

  seedDatabase()
    .then( results => console.log(`//-- database creation successful: ${results}`))
    .then(() => seedTables())
    .then( () => process.exit(0))
    //-- print error
    .catch(console.log)
};



seed();

// seedDatabase();

