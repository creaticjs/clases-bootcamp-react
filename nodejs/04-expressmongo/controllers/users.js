const userModel = require("../models/user");

module.exports = {
  allUsers: async (req, res) => {
    try {
      const users = await userModel.find();
      res.send(users);
    } catch (error) {
      res.status(500).send({ msg: "Ocurrio un error en el servidor" });
    }
  }
};
