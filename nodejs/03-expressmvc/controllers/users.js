const dbjson = require("../db/dbjson");
module.exports = {
  users: (req, res) => {
    console.log("Get usuarios");

    res.send(dbjson);
  },
  user: (req, res) => {
    console.log("Un solo usuario");
    const { id } = req.params;

    res.send(dbjson[id]);
  },
  createUser: (req, res) => {
    const datosUser = req.body;
    console.log("Creando el usuario", datosUser);

    res.send(datosUser);
  }
};
