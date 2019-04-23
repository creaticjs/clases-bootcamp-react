import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Usuario from "./components/Usuario";
function App() {
  return (
    <div className="App">
      <h1>Hola Mundo 🤮</h1>
      <Usuario nombre="Carlos" edad="20">
        Saludando 🗿
      </Usuario>
      <Usuario nombre="Veronica" edad="21" />
      <Usuario nombre="Veronica" edad="21" />
      <Usuario nombre="Veronica" edad="21" />
      <Usuario nombre="Veronica" edad="21" />
      <Usuario nombre="Veronica" edad="21" />
    </div>
  );
}

export default App;
