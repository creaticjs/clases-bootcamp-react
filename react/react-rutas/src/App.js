import React from "react";
import { Button, Container, Header } from "semantic-ui-react";
import Router from "./components/Router";
import jsonDatos from "./data/datos.json";
import "semantic-ui-css/semantic.min.css";

class App extends React.Component {
  state = { instituciones: [] };
  componentWillMount() {
    this.setState({ instituciones: jsonDatos });
  }
  render() {
    return (
      <div>
        <Container>
          <Header as="h2">App Colegios</Header>
          <Router instituciones={this.state.instituciones} />
        </Container>
      </div>
    );
  }
}

export default App;
