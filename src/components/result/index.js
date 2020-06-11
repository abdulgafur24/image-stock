import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Card from "../../lib/Card";

export default class Result extends Component {
  componentDidMount() {}

  render() {
    const { res } = this.props;
    return (
      <div className="Result">
        <Container>
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
        </Container>
      </div>
    );
  }
}
