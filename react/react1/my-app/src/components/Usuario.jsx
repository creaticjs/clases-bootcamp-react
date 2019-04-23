import React from "react";
import "../styles/usuarios.css";
const Usuario = props => {
  return (
    <div className="usuario">
      <h1>Soy un {props.nombre}</h1>
      <p>Mi edad es {props.edad}</p>
      <p>{props.children}</p>
    </div>
  );
};

export default Usuario;
