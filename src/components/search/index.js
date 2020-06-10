import React, { Component } from "react";
import { Container } from "react-bootstrap";

export default class Search extends Component {
  state = {
    keys: [
      "Wallpapers",
      "Textures & Patterns",
      "Nature",
      "Current Events",
      "Architecture",
      "Business & Work",
      "Film",
      "Animals",
      "Travel",
      "Fashion",
      "Food & Drink",
      "Spirituality",
      "Experimental",
      "People",
      "Health",
      "Arts & Culture",
    ],
  };
  render() {
    const { keys } = this.state;

    return (
      <div className="Search">
        <Container>
          <input className="Search__input" placeholder="Поиск" />
          <div className="Search__divider" />
          <div className="Search__keys">
            {keys.map((item, index) => (
              <p className="Search__key" key={index}>
                {item}
              </p>
            ))}
          </div>
        </Container>
      </div>
    );
  }
}
