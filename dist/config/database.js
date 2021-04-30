"use strict";

var _env = require("dotenv").config();

module.exports = {
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  dialect: process.env.DATABASE_DIALECT,
  port: process.env.DATABASE_PORT,
  define: {
    timestamps: true,
  }, // host: "localhost",
  // username: "postgres",
  // password: "docker",
  // database: "postgres",
  // dialect: "postgres",
  // port: 5432,
  // define: {
  //   timestamps: false,
  // },
};
