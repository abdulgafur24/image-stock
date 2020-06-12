import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row } from "react-bootstrap";
import Appearance from "../../lib/Appearance";
import Header from "../header/";
import Result from "../result";

class Favorites extends Component {
  render() {
    const { favorites } = this.props;

    return (
      <div className="Favorites">
        <Header />
        <Container>
          <h1 className="Favorites__title">Избранное</h1>
          <Appearance />
          {Object.values(favorites).length > 0 ? (
            <Result res={Object.values(favorites)} />
          ) : (
            <div className="Result__empty">Пусто</div>
          )}
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    favorites: state.images.favorites,
  };
}

export default connect(mapStateToProps, null)(Favorites);
