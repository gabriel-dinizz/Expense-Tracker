// routes/userRoutes.js
const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

// Define routes
router.post("/users", userController.createUser);
router.get("/users", userController.getUsers);

module.exports = router;
