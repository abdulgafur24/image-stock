import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import Card from "../../lib/Card";
import InfiniteScroll from "react-infinite-scroller";
import { getImagesByKeywordAndPage } from "../../actions/images.action";
import spinner from "../../res/images/spinner.svg";

class Infinite extends Component {
  constructor(params) {
    super(params);
    this.state = {
      hasMore: true,
    };
  }

  handleLoadMore = () => {
    const { keyword, page, getImagesByKeywordAndPage } = this.props;
    getImagesByKeywordAndPage(keyword, page + 1);
  };

  render() {
    const { list, appearance } = this.props;
    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={this.handleLoadMore}
        hasMore={this.state.hasMore}
        loader={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "50px 0",
            }}
            key={0}
          >
            <img src={spinner} alt="spinner" />
          </div>
        }
      >
        <div className="Result">
          <Container>
            {appearance === "GRID" ? (
              <div className="Result__grid">
                <div>
                  {list
                    .filter((image, index) => ((index + 1) % 3) - 1 === 0)
                    .map((image) => (
                      <Card key={image.id} image={image} />
                    ))}
                </div>
                <div>
                  {list
                    .filter((image, index) => ((index + 1) % 3) - 2 === 0)
                    .map((image) => (
                      <Card key={image.id} image={image} />
                    ))}
                </div>
                <div>
                  {list
                    .filter((image, index) => (index + 1) % 3 === 0)
                    .map((image) => (
                      <Card key={image.id} image={image} />
                    ))}
                </div>
              </div>
            ) : (
              <div className="Result__column">
                <div>
                  {list.map((image) => (
                    <Card key={image.id} image={image} />
                  ))}
                </div>
              </div>
            )}
          </Container>
        </div>
      </InfiniteScroll>
    );
  }
}

function mapStateToProps(state) {
  return {
    keyword: state.images.request,
    page: state.images.page,
    list: state.images.list,
    appearance: state.images.appearance,
  };
}

export default connect(mapStateToProps, { getImagesByKeywordAndPage })(
  Infinite
);
