// models/Expense.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");
const Category = require("./Category");

const Expense = sequelize.define("Expense", {
  amount: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  description: { type: DataTypes.TEXT },
  expense_date: { type: DataTypes.DATEONLY, allowNull: false },
});

Expense.belongsTo(User);
Expense.belongsTo(Category);

module.exports = Expense;
