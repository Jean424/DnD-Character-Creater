const Sequelize = require("sequelize");
require("dotenv").config();

let sequelize;

const db = {};

const DB = "users";
const USER = "user";
const PASSWORD = "password";
const HOST = "host";
const DIALECT = "postgres";
const PORT = 5432;

sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: DIALECT,
  port: PORT,
});

module.exports = sequelize;
