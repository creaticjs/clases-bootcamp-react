import React, { Component } from "react";
const CreaticAcademyContext = React.createContext();
export { CreaticAcademyContext };

class CreaticAcademyProvider extends Component {
  state = {
    cursos: [
      { nombre: "ReactJS", tutor: "Carlos Molano", like: 5 },
      { nombre: "AR", tutor: "Carlos Molano", like: 3 },
      { nombre: "iOs", tutor: "Camilo Pedraza", like: 3 },
      { nombre: "Android", tutor: "Dario Chamorro", like: 5 }
    ]
  };

  render() {
    return (
      <CreaticAcademyContext.Provider
        value={{
          state: this.state.cursos,
          saludo: "Hola chicos",
          funcionL: () => {},
          addLike: id => {
            console.log("Click en", id);
            const cursos = this.state.cursos;
            cursos[id].like++;
            this.setState({ state: cursos });
          }
        }}
      >
        {this.props.children}
      </CreaticAcademyContext.Provider>
    );
  }
}

export default CreaticAcademyProvider;
