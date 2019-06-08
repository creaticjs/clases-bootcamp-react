const usersController = require("../controllers/users");

module.exports = app => {
  app.get("/", (req, res) => {
    res.send("Mama estoy triunfando en ExpressJS");
  });

  app.get("/usuarios", usersController.users);
  app.get("/usuario/:id", usersController.user);
  app.post("/usuario", usersController.createUser);
};
