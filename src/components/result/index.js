import React, { Component } from "react";
import { connect } from "react-redux";

import { Container } from "react-bootstrap";
import Card from "../../lib/Card";

class Result extends Component {
  render() {
    const { res, appearance } = this.props;
    return (
      <div className="Result">
        <Container>
          {appearance === "GRID" ? (
            <div className="Result__grid">
              <div>
                {res
                  .filter((image, index) => ((index + 1) % 3) - 1 === 0)
                  .map((image) => (
                    <Card key={image.id} image={image} />
                  ))}
              </div>
              <div>
                {res
                  .filter((image, index) => ((index + 1) % 3) - 2 === 0)
                  .map((image) => (
                    <Card key={image.id} image={image} />
                  ))}
              </div>
              <div>
                {res
                  .filter((image, index) => (index + 1) % 3 === 0)
                  .map((image) => (
                    <Card key={image.id} image={image} />
                  ))}
              </div>
            </div>
          ) : (
            <div className="Result__column">
              <div>
                {res.map((image) => (
                  <Card key={image.id} image={image} isColumn />
                ))}
              </div>
            </div>
          )}
        </Container>
      </div>
    );
  }
}

function mapStateToPtops(state) {
  return {
    appearance: state.images.appearance,
  };
}

export default connect(mapStateToPtops, null)(Result);
