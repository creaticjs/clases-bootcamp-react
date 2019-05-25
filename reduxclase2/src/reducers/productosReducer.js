import { MOSTRAR_PRODUCTOS } from "../actions/types";

const estadoInicial = {
  productos: [
    {
      id: 0,
      nombre: "panela",
      precio: 2000
    },
    {
      id: 1,
      nombre: "arroz",
      precio: 3000
    },
    {
      id: 2,
      nombre: "azucar",
      precio: 2000
    }
  ]
};
export default function(state = estadoInicial, action) {
  switch (action.type) {
    case MOSTRAR_PRODUCTOS:
      return state;
      break;
    default:
      return state;
      break;
  }
}
