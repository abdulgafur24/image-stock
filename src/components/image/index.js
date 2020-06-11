import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Header from "../header";
import {
  imageById,
  collectionById,
  downloadImage,
} from "../../services/images";
import like from "../../res/images/favorite.svg";
import download from "../../res/images/download.svg";
import Result from "../result";
export default class Image extends Component {
  constructor(params) {
    super(params);
    this.state = {
      image: {},
      similar: [],
    };
  }

  componentDidMount() {
    const { image_id } = this.props.match.params;
    imageById(image_id).then((json) => {
      let col = json.related_collections.results;
      let id = col[0].id;

      this.setState({
        image: json,
      });
      console.log(json);
      collectionById(id).then((json) => {
        this.setState({
          similar: json,
        });
      });
    });
  }

  downloadHandle = () => {
    const { image } = this.state;
    console.log(image);

    downloadImage(image);
  };

  render() {
    const { image, similar } = this.state;

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
                <button className="Button__icon">
                  <img src={like} alt="like" />
                </button>

                <button
                  download
                  onClick={this.downloadHandle}
                  className="Button__download Image__download"
                >
                  <img src={download} alt="like" />
                  Скачать
                </button>
              </div>
            </div>
            <img
              className="Image__main"
              src={image?.urls?.full}
              alt={image.alt_description}
            />
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
          </Container>
          <Container>
            <div className="Image__related">
              <h3 className="Image__related-title">Похожие фотографии</h3>
              <p className="Image__related-more">Показать больше</p>
            </div>
          </Container>
          <Result res={similar} />
        </div>
      </div>
    );
  }
}
