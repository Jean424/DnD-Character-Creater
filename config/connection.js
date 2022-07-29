const Sequelize = require("sequelize");
require("dotenv").config();

let sequelize;

const db = {};

// const DB = "users";
// const USER = "user";
// const PASSWORD = "password";
// const HOST = "host";
// const DIALECT = "postgres";
// const PORT = 5432;

// sequelize = new Sequelize(DB, USER, PASSWORD, {
//   host: HOST,
//   dialect: DIALECT,
//   port: PORT,
// });

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    }
  );
}

module.exports = sequelize;
