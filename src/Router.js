import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import Favorites from "./components/Favorites";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/homePage/:name?/:cityKey?" component={HomePage} />
      <Route path="/favorites" component={Favorites} />
    </Switch>
  );
};
export default Router;
