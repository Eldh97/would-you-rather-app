import React, { Component } from "react";
import { Container, Menu, Button, Card, Image } from "semantic-ui-react";

class Home extends Component {
  render() {
    return (
      <Container textAlign="center">
        <Menu fluid widths={2} style={{ width: "50%" }}>
          <Menu.Item
            name="Unansewred Questions"
            onClick={this.handleItemClick}
            active={false}
          />
          <Menu.Item
            name="Answered Questuions"
            onClick={this.handleItemClick}
          />
        </Menu>
      </Container>
    );
  }
}

export default Home;
