import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import Appearance from "../../lib/Appearance";
import Header from "../header/";

export default class Favorites extends Component {
  render() {
    return (
      <div className="Favorites">
        {/* <Header />s */}
        <Container>
          <h1 className="Favorites__title">Избранное</h1>
          <Appearance />
          <Row></Row>
        </Container>
      </div>
    );
  }
}
