import React from "react";

const FormularioUsuario = props => {
  let nombre = React.createRef();
  let email = React.createRef();
  let area = React.createRef();

  const hacerAlgo = () => {
    console.log(nombre.current.value, email.current.value, area.current.value);
    props.enviar({
      nombre: nombre.current.value,
      email: email.current.value,
      area: area.current.value
    });
  };

  return (
    <div>
      <h1>Formulario Usuario</h1>
      <div>
        <label htmlFor="">Nombre</label>
        <input type="text" ref={nombre} />
      </div>
      <div>
        <label htmlFor="">Email</label>
        <input type="text" ref={email} />
      </div>
      <div>
        <label htmlFor="">Area</label>
        <select ref={area} name="" id="">
          <option value="tecnica">Tecnica</option>
          <option value="comercial">Comercial</option>
        </select>
      </div>
      <button onClick={hacerAlgo}>Enviar Formulario</button>
    </div>
  );
};

export default FormularioUsuario;
