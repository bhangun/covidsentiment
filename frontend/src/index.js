import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "./assets/scss/material-kit-react.scss";

// pages for this product
import Components from "./views/Components/Components.js";
import TeamUntirta from "./views/TeamUntirta";
// import LandingPage from "./views/LandingPage/LandingPage.js";
// import ProfilePage from "./views/ProfilePage/ProfilePage.js";
// import LoginPage from "./views/LoginPage/LoginPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {/* <Route path="/landing-page" component={LandingPage} /> */}
      {/* <Route path="/profile-page" component={ProfilePage} /> */}
      <Route path="/team" component={TeamUntirta} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
