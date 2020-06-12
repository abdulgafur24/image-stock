import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import likeActive from "../../res/images/favorite-active.svg";
import like from "../../res/images/favorite.svg";
import maximize from "../../res/images/maximize.svg";
import download from "../../res/images/download.svg";

import { likeImage, unlikeImage } from "../../actions/images.action";

class Card extends Component {
  render() {
    const { image, favorites, likeImage, unlikeImage, isColumn } = this.props;

    return (
      <div className="Card">
        <img
          className="Card__image"
          src={isColumn ? image?.urls?.regular : image?.urls?.small}
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
            {favorites[image?.id] ? (
              <div onClick={() => unlikeImage(image)} className="Card__button">
                <img src={likeActive} alt="like" />
              </div>
            ) : (
              <div onClick={() => likeImage(image)} className="Card__button">
                <img src={like} alt="like" />
              </div>
            )}

            <div className="Card__button">
              <Link to={"/image/" + image?.id}>
                <img src={maximize} alt="miximize" />
              </Link>
            </div>
            <div className="Card__button">
              <a
                href={image?.links?.download + "?force=true"}
                download
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={download} alt="download" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    favorites: state.images.favorites,
  };
}

export default connect(mapStateToProps, { likeImage, unlikeImage })(Card);
