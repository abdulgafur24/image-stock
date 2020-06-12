import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import { Formik } from "formik";
import { searchByKeyword } from "../../actions/images.action";

class Search extends Component {
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

  componentDidMount() {}

  handleKeySearch = (keyword) => {
    const { searchByKeyword, history } = this.props;
    const path = history.location.pathname;
    window.scrollTo(0, 0);
    if (path !== "/") {
      history.push("/");
    }
    searchByKeyword(keyword);
  };

  render() {
    const { keys } = this.state;

    return (
      <div className="Search">
        <Container>
          <Formik
            initialValues={{ search: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.search) {
                errors.search = "Required";
              }
              return errors;
            }}
            onSubmit={(values) => {
              const { searchByKeyword } = this.props;
              searchByKeyword(values.search);
            }}
          >
            {({ values, handleChange, handleSubmit, handleBlur }) => (
              <form onSubmit={handleSubmit}>
                <input
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.search}
                  name="search"
                  className="Search__input"
                  placeholder="Поиск"
                />
              </form>
            )}
          </Formik>

          <div className="Search__divider" />
          <div className="Search__keys">
            {keys.map((item, index) => (
              <p
                onClick={() => this.handleKeySearch(item)}
                className="Search__key"
                key={index}
              >
                {item}
              </p>
            ))}
          </div>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    images: state.images,
  };
}

export default connect(mapStateToProps, { searchByKeyword })(
  withRouter(Search)
);
