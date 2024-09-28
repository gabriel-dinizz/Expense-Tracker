// routes/expenseRoutes.js
const express = require("express");
const expenseController = require("../controllers/expenseController");
const router = express.Router();

// Define routes
router.post("/expenses", expenseController.createExpense); // Route to create an expense
router.get("/users/:userId/expenses", expenseController.getExpenses); // Get expenses for a user

module.exports = router;
