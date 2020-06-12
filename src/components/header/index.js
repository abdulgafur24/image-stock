import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { Container } from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";

import logo from "../../res/images/logo.svg";
import searchIcon from "../../res/images/search.svg";
import favoriteIcon from "../../res/images/favorite-active.svg";
import historyIcon from "../../res/images/history.svg";
import Search from "../search";
import History from "../history";

class Header extends Component {
  constructor(params) {
    super(params);
    this.state = {
      search: false,
      history: false,
    };
  }

  collapseSearch = () => {
    const { search } = this.state;
    this.setState({
      search: !search,
      history: false,
    });
  };

  collapseHistory = () => {
    const { history } = this.state;
    this.setState({
      history: !history,
      search: false,
    });
  };

  goToFavorites = () => {
    this.props.history.push("/favorites");
  };

  render() {
    const { search, history } = this.state;
    return (
      <>
        <header className="Header">
          <Container>
            <div className="Header__navbar">
              <a className="Header__brand" href="/">
                <img src={logo} alt="logo" />
                <p>ImageStock</p>
              </a>

              <nav className="Header__nav">
                <div
                  onClick={this.collapseSearch}
                  className={`Header__nav-item${
                    search ? " Header__nav-item--active" : ""
                  }`}
                >
                  <img src={searchIcon} alt="favorite" />
                  <p>Поиск</p>
                </div>

                <div onClick={this.goToFavorites} className="Header__nav-item">
                  <img src={favoriteIcon} alt="favorite" />
                  <p>Избранное</p>
                </div>
                <div
                  onClick={this.collapseHistory}
                  className={`Header__nav-item${
                    history ? " Header__nav-item--active" : ""
                  }`}
                >
                  <img src={historyIcon} alt="favorite" />
                  <p>История поиска</p>
                </div>
              </nav>
            </div>
          </Container>
        </header>

        <Collapse in={search}>
          <div className="Header__collapse--absolute">
            <div className="Header__collapse">
              <Search />
            </div>
          </div>
        </Collapse>
        <Collapse in={history}>
          <div className="Header__collapse--absolute">
            <div className="Header__collapse">
              <History />
            </div>
          </div>
        </Collapse>
      </>
    );
  }
}

export default withRouter(Header);
