import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import FormularioUsuario from "./components/FormularioUsuario";
function App() {
  const [usuarios, setUsuarios] = useState([]);

  const eventoDatos = datos => {
    setUsuarios([...usuarios, datos]);
  };
  return (
    <div className="App">
      <h1>Hola 🤮</h1>
      <button className="btn btn-success">Hacer Algo</button>
      <div className="row">
        <div className="col-md-6">
          <FormularioUsuario enviar={eventoDatos} />
        </div>
        <div className="col-md-6">
          {usuarios.map((usuario, index) => {
            return (
              <div key={index}>
                <p>{usuario.nombre}</p>
                <button className="btn btn-danger">Eliminar</button>
                <button className="btn btn-warning">Editar</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
