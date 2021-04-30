const _env = require("dotenv").config();

module.exports = {
  // host: process.env.DATABASE_HOST,
  // username: process.env.DATABASE_USERNAME,
  // password: process.env.DATABASE_PASSWORD,
  // database: process.env.DATABASE_NAME,
  // dialect: "postgres",
  // port: process.env.DATABASE_PORT,
  // ssl: true,
  // define: {
  //   timestamps: true,
  // },
  host: "localhost",
  username: "postgres",
  password: "docker",
  database: "postgres",
  dialect: "postgres",
  port: 5432,
  define: {
    timestamps: false,
  },
};
