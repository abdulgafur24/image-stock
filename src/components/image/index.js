import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import Header from "../header";
import {
  imageById,
  collectionById,
  downloadImage,
} from "../../services/images";
import { likeImage, unlikeImage } from "../../actions/images.action";

import likeActive from "../../res/images/favorite-active.svg";
import like from "../../res/images/favorite.svg";
import download from "../../res/images/download.svg";
import Result from "../result";
class Image extends Component {
  constructor(params) {
    super(params);
    this.state = {
      image: {},
      similar: [],
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const { image_id } = this.props.match.params;
    imageById(image_id).then((json) => {
      let col = json.related_collections.results;
      let id = col[0].id;

      this.setState({
        image: json,
      });

      collectionById(id).then((json) => {
        this.setState({
          similar: json,
        });
      });
    });
  }

  downloadHandle = () => {
    const { image } = this.state;
    downloadImage(image);
  };

  likeHandle = () => {
    const { image } = this.state;
    const { likeImage } = this.props;
    likeImage(image);
  };
  unlikeHandle = () => {
    const { image } = this.state;
    const { unlikeImage } = this.props;
    unlikeImage(image);
  };

  render() {
    const { image, similar } = this.state;
    const { favorites } = this.props;

    return (
      <div className="Image">
        <Header />
        <div className="Image__jumbotron">
          <img
            className="Image__background"
            src={image?.urls?.regular}
            alt={image.alt_description}
          />
          <div className="Image__background--overlay" />
          <Container>
            <div className="Image__header">
              <div className="Image__user">
                <img
                  className="Image__avatar"
                  src={image?.user?.profile_image?.medium}
                  alt={image?.user?.username}
                />
                <div>
                  <p className="Image__fullname">
                    {image?.user?.first_name} {image?.user?.last_name}
                  </p>
                  <p className="Image__username">{image?.user?.username}</p>
                </div>
              </div>
              <div className="Image__buttons">
                {favorites[image.id] ? (
                  <button
                    onClick={this.unlikeHandle}
                    className="Button__icon Button__icon--active"
                  >
                    <img src={likeActive} alt="like" />
                  </button>
                ) : (
                  <button onClick={this.likeHandle} className="Button__icon">
                    <img src={like} alt="like" />
                  </button>
                )}

                <button
                  onClick={this.downloadHandle}
                  className="Button__download Image__download"
                >
                  <img src={download} alt="like" />
                  <p>Скачать</p>
                </button>
              </div>
            </div>
            <img
              className="Image__main"
              src={image?.urls?.full}
              alt={image.alt_description}
            />
            {image?.tags?.length > 0 ? (
              <div className="Image__similar">
                <p className="Image__similar-title">Похожии теги</p>
                <div className="Image__similar-tags">
                  {image?.tags?.map((item, index) => {
                    if (index < 15)
                      return (
                        <button className="Button__tag">{item.title}</button>
                      );
                  })}
                </div>
              </div>
            ) : (
              ""
            )}
          </Container>
        </div>
        <Container>
          <div className="Image__related">
            <h3 className="Image__related-title">Похожие фотографии</h3>
            <p className="Image__related-more">Показать больше</p>
          </div>
        </Container>
        <Result res={similar} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    favorites: state.images.favorites,
  };
}

export default connect(mapStateToProps, { likeImage, unlikeImage })(Image);
