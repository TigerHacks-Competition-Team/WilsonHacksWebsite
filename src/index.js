import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Competition from "./Competition";
import * as serviceWorker from "./serviceWorker";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter,
} from "react-router-dom";

ReactDOM.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
    <Router>
      <Switch>
        <Route path="/competition" component={Competition}>
          <Competition />
        </Route>
        <Route
          path="/cshs"
          render={() => {
            window.location.href = "/site/cshs.html";
          }}
        />
        <Route component={App} />
      </Switch>
    </Router>
  </HashRouter>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
