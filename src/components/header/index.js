import React, { Component } from "react";
import { Container } from "react-bootstrap";
import logo from "../../res/images/logo.svg";
import search from "../../res/images/search.svg";
import favorite from "../../res/images/favorite.svg";
import history from "../../res/images/history.svg";

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Container>
          <div className="Header__navbar">
            <a className="Header__brand" href="/">
              <img src={logo} alt="logo" />
              <p>ImageStock</p>
            </a>

            <nav className="Header__nav">
              <div className="Header__nav-item">
                <img src={search} alt="favorite" />
                <p>Поиск</p>
              </div>

              <div className="Header__nav-item">
                <img src={favorite} alt="favorite" />
                <p>Избранное</p>
              </div>
              <div className="Header__nav-item">
                <img src={history} alt="favorite" />
                <p>История поиска</p>
              </div>
            </nav>
          </div>
        </Container>
      </div>
    );
  }
}
