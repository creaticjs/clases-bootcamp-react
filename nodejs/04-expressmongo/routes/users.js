const userController = require("../controllers/users");

module.exports = app => {
  app.get("/", (req, res) => {
    res.send("Mi servidor en Express y mongo 🤮");
  });
  app.get("/usuarios", userController.allUsers);
};
