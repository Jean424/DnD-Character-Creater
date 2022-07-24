//------------------------------------------------------------------------------
//-- Modules for Sequelize ORM

const User = require('./user');
const Character = require('./character');
const Ability = require('./ability')

//------------------------------------------------------------------------------
//-- Associations between tables

//-- Create associations between User and character column values user_id
User.hasMany(Character, {
  foreignKey: 'user_id'
});

Character.belongsTo(User, {
  foreignKey: 'user_id',
});

//-- Create associations between Character and Ability
Character.hasMany(Ability, {
  foreignKey: 'character_id'
});

Ability.belongsTo(Character, {
  foreignKey: 'character_id',
});

//-----------------------------------------------------------------------------
//-- EXPORTS

module.exports = { User, Character, Ability };
