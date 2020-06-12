import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";

class History extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <Container>
          <p className="History__title">Ваши запросы</p>
          {history ? (
            <div className="History__items">
              {history.reverse().map((item, index) => (
                <div className="History__item" key={index}>
                  {item}
                </div>
              ))}
            </div>
          ) : (
            <div className="History__404">История пуста :\</div>
          )}
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    history: state.images.history,
  };
}

export default connect(mapStateToProps, null)(History);
