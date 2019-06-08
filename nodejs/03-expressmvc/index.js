const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routesUsers = require("./routes/users")(app); //Pasamos la instancia de express como parametro

app.listen(5000, () => {
  console.log("Servidor escuchando en el puerto 5000 😁");
});
