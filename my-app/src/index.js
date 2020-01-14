import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Logo from "./components/logo/Logo";
// import Video from "./components/video/Video";
// import Items from "./components/items/Items";
// import Comments from "./components/comments/Comments";

ReactDOM.render(
  <BrowserRouter>
    <App>
      {/* <Switch>
        <Route exact pash="/" component={Logo} />
        <Route pash="/video" component={Video} />
        <Route pash="/Items" component={Items} />
        <Route pash="/comments" component={Comments} />
      </Switch> */}
    </App>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
