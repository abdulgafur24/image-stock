import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";

import logo from "../../res/images/logo.svg";
import favoriteIcon from "../../res/images/favorite-active.svg";
import historyIcon from "../../res/images/history.svg";
import Header from "../header";
import Search from "../search";
import Result from "../result";

class Main extends Component {
  constructor(params) {
    super(params);
    this.state = {
      pageYOffset: 0,
      history: false,
    };
  }
  collapseHistory = () => {
    const { history } = this.state;
    this.setState({
      history: !history,
    });
  };
  handleScroll = () => {
    this.setState({
      pageYOffset: window.pageYOffset,
    });
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", () => this.handleScroll);
  }
  goToFavorites = () => {
    this.props.history.push("/favorites");
  };

  render() {
    const { pageYOffset, history } = this.state;
    const { images } = this.props;
    return (
      <div>
        <header className="Main__header">
          <Container>
            <div className="Header__navbar">
              <a className="Header__brand" href="/">
                <img src={logo} alt="logo" />
                <p>ImageStock</p>
              </a>

              <nav className="Header__nav">
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
          <Search />
        </header>
        <Collapse in={history}>
          <div className="Main__collapse">
            <div className="Header__collapse">history</div>
          </div>
        </Collapse>
        {pageYOffset >= 400 ? <Header /> : ""}
        <Result res={images} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    images: state.images,
  };
}

export default connect(mapStateToProps, null)(Main);
