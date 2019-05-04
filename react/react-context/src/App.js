import React from "react";
import CreaticAcademyProvider from "./components/Context";
import Cursos from "./components/Cursos";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Creatic Academy</h1>
        <CreaticAcademyProvider>
          <Cursos />
        </CreaticAcademyProvider>
      </div>
    );
  }
}

export default App;
