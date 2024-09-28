// routes/userRoutes.js
const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

// Define routes
router.post("/users", userController.createUser); // Route to create a user
router.get("/users", userController.getUsers); // Route to get all users

module.exports = router;
