import React, { Component } from "react";
import { Link } from "react-router-dom";

import likeActive from "../../res/images/favorite-active.svg";
import like from "../../res/images/favorite.svg";
import maximize from "../../res/images/maximize.svg";
import download from "../../res/images/download.svg";

export default class Card extends Component {
  render() {
    const { image } = this.props;
    return (
      <div className="Card">
        <img
          className="Card__image"
          src={image?.urls?.small}
          alt={image?.alt_description}
        />
        <div className="Card__hover">
          <img
            className="Card__avatar"
            src={image?.user?.profile_image?.medium}
            alt={image?.user?.username}
          />
          <p className="Card__fullname">
            {image?.user?.first_name} {image?.user?.last_name}
          </p>
          <p className="Card__username">{image?.user?.username}</p>

          <div className="Card__buttons">
            <div className="Card__button">
              <img src={like} alt="like" />
            </div>
            <div className="Card__button">
              <Link to={"/image/" + image.id}>
                <img src={maximize} alt="miximize" />
              </Link>
            </div>
            <div className="Card__button">
              <img src={download} alt="download" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
