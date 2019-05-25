import { MOSTRAR_PRODUCTOS } from "./types";

//axios

export const mostrarProductos = () => {
  return { type: MOSTRAR_PRODUCTOS };
};
