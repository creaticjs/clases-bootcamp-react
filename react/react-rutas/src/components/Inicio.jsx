import React, { Component } from "react";
import { Card, Container } from "semantic-ui-react";
import Institucion from "./Institucion";
class Inicio extends Component {
  render() {
    return (
      <div>
        <h1>Estamos en inicio</h1>
        <Container>
          <Card.Group>
            {this.props.instituciones.map(institucion => {
              return <Institucion institucion={institucion} />;
            })}
          </Card.Group>
        </Container>
      </div>
    );
  }
}

export default Inicio;
