import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "../header";
import Main from "../main";
import Favorites from "../favorites";

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/favorites" component={Favorites} />
      </Switch>
    </div>
  );
}

export default App;
