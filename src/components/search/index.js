import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Formik } from "formik";

import { toJson } from "unsplash-js";
import { unsplash } from "../../unsplash";

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
              unsplash.search
                .photos(values.search)
                .then(toJson)
                .then((json) => {
                  console.log(json);
                });
            }}
          >
            {({ values, handleChange, handleSubmit, handleBlur }) => (
              <form onSubmit={handleSubmit}>
                <input
                  autocomplete="off"
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
