import React, { Component } from "react";
import { CreaticAcademyContext } from "./Context";

class Curso extends Component {
  render() {
    return (
      <CreaticAcademyContext.Consumer>
        {value => {
          console.log(value);
          return (
            <div>
              {value.state.map((curso, index) => {
                return (
                  <ul
                    key={index}
                    className="list-group-item d-flex justify-content-between"
                  >
                    <p>{curso.nombre}</p>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        value.addLike(index);
                      }}
                    >
                      👍 {curso.like}
                    </button>
                  </ul>
                );
              })}
            </div>
          );
        }}
      </CreaticAcademyContext.Consumer>
    );
  }
}

export default Curso;
