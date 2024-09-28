const express = require("express");
const sequelize = require("./config/database");
const userRoutes = require("./routes/userRoutes");
const expenseRoutes = require("./routes/expenseRoutes");

const app = express();
const port = 3000;

app.use(express.json()); // Parse JSON body
app.use(userRoutes); // Load user routes
app.use(expenseRoutes); // Load expense routes

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected...");
    return sequelize.sync(); // Sync all models
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => console.error("Error connecting to the database:", err));
