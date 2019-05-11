import React, { Component } from "react";
import { Segment, Header } from "semantic-ui-react";
class SingleInstitucion extends Component {
  render() {
    return (
      <div>
        <Segment>
          <Header>{this.props.institucion.nombreestablecimiento}</Header>
        </Segment>
      </div>
    );
  }
}

export default SingleInstitucion;
