const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "usuarios"
});

connection.connect(err => {
  if (err) {
    console.log("Error en Mysql: " + err.stack);
    return;
  }
  console.log("Estamos conectados en Mysql: " + connection.threadId);
});

module.exports = connection;
