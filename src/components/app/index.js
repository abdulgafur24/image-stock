import React from "react";
import { Switch, Route } from "react-router-dom";

import Main from "../main";
import Favorites from "../favorites";
import Image from "../image";

function App() {
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

export default App;
