import { MOSTRAR_PRODUCTOS, GUARDAR_PRODUCTO } from "./types";

//axios
import axios from "axios";

//

export const mostrarProductos = () => async dispatch => {
  const respuesta = await axios.get("http://localhost:5000/productos");
  console.log(respuesta);

  dispatch({
    type: MOSTRAR_PRODUCTOS,
    payload: respuesta.data
  });
  //return { type: MOSTRAR_PRODUCTOS };
};

export const guardarProducto = producto => async dispatch => {
  const respuesta = await axios.post(
    "http://localhost:5000/productos",
    producto
  );
  console.log(respuesta);

  dispatch({
    type: GUARDAR_PRODUCTO,
    payload: respuesta.data
  });
  //return { type: MOSTRAR_PRODUCTOS };
};
