import React, { Component } from "react";
import Curso from "./Curso";
class Cursos extends Component {
  render() {
    return (
      <div className="container">
        <h2>Cursos</h2>
        <Curso />
      </div>
    );
  }
}

export default Cursos;
