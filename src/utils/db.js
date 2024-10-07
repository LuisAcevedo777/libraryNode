const { Sequelize } = require("sequelize");
require('dotenv').config();

const db = new Sequelize(process.env.DATABASE_URL,{
  database: "railway",
  port: 5432,
  host: "postgres.railway.internal",
  dialect: "postgres",
  username: "postgres",
  password: "LIQVEgnCRImBZCHCYybNUlfThsLqmphS",
  logging: false,
});

module.exports = db;
