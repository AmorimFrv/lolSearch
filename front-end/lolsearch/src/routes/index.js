import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "../pages/home";
import Summoner from "../pages/summoner";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/summoner/:id" component={Summoner} />
      </Switch>
    </BrowserRouter>
  );
}