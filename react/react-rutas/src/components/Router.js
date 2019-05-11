import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inicio from "./Inicio";
import NoRoute from "./NoRoute";
import SingleInstitucion from "./SingleInstitucion";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/inicio"
            render={() => {
              return <Inicio instituciones={this.props.instituciones} />;
            }}
          />
          <Route
            path="/otraruta"
            component={() => {
              return (
                <div>
                  {" "}
                  <h2>Hola chicos</h2>{" "}
                </div>
              );
            }}
          />
          <Route
            exact
            path="/institucion/:id"
            render={props => {
              const { match } = props;
              let id = !isNaN(parseInt(match.params.id))
                ? parseInt(match.params.id)
                : 0;
              console.log(match.params.id);
              return (
                <SingleInstitucion institucion={this.props.instituciones[id]} />
              );
            }}
          />
          <Route component={NoRoute} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
