import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

import { changeAppearanceType } from "../../actions/images.action";
import Main from "../main";
import Favorites from "../favorites";
import Image from "../image";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/image/:image_id" component={Image} />
        </Switch>
      </div>
    );
  }
}

export default connect(null, { changeAppearanceType })(App);
