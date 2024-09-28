// config/database.js
const { Sequelize } = require("sequelize");

// Initialize the Sequelize instance with PostgreSQL
const sequelize = new Sequelize(
  "expense_tracker_db",
  "gabriel_diniz",
  "Gabi2304",
  {
    host: "localhost",
    dialect: "postgres",
  }
);

module.exports = sequelize;
