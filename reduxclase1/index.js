const redux = require("redux");

console.log("Hola desde nodejs 👍");

const createStore = redux.createStore;

const estadoInicial = {
  usuarios: []
};

const rootReducer = (state = estadoInicial, action) => {
  if (action.type == "AGREGAR_USUARIO") {
    console.log("Ejecuto AGREGAR USUARIO 🍉");
    return { ...state, usuarios: action.nombre };
  }
  if (action.type == "GET_USUARIOS") {
    console.log("Ejecuto GET_USUARIOS 🧠");
    return state;
  }
  return state;
};

const store = createStore(rootReducer);
//console.log(store.getState());

store.subscribe(() => {
  console.log("Subscribe 🤮");
  console.log(store.getState());
});
store.dispatch({ type: "AGREGAR_USUARIO", nombre: "Carlos Molano" });
store.dispatch({ type: "GET_USUARIOS" });
store.dispatch({ type: "AGREGAR_USUARIO", nombre: "Veronica Aza" });
