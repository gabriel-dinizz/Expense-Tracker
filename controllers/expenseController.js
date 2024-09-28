// controllers/expenseController.js
const Expense = require("../models/Expense");

// Create a new expense
exports.createExpense = async (req, res) => {
  try {
    const { amount, description, expense_date, userId, categoryId } = req.body;
    const newExpense = await Expense.create({
      amount,
      description,
      expense_date,
      UserId: userId,
      CategoryId: categoryId,
    });
    res.status(201).json(newExpense);
  } catch (error) {
    res.status(400).json({ error: "Failed to create expense" });
  }
};

// Get all expenses for a user
exports.getExpenses = async (req, res) => {
  try {
    const userId = req.params.userId;
    const expenses = await Expense.findAll({ where: { UserId: userId } });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch expenses" });
  }
};
