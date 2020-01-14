import React, { Fragment } from "react";
import "./App.css";
import "./rest.css";
import Header from "./components/header/Header";
import Logo from "./components/logo/Logo";
// import Video from "./components/video/Video";
import PlayerControlExample from "./components/video/PlayerControlExample";
import Items from "./components/items/Items";

import { Route } from "react-router-dom";

function App({ children }) {
  return (
    <Fragment>
      <div className="wrapper__main">
        <Header />
        {children}
        <Logo />
        {/* <Video /> */}
        <PlayerControlExample />
        <Items />
      </div>
    </Fragment>
  );
}

export default App;
