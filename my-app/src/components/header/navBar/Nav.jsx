import React from "react";
import "./Nav.css";
import Logo from "../../logo/Logo.jsx";
import {
  BrowserRouter,
  Route,
  Link,
  Router,
  Switch,
  NavLink
} from "react-router-dom";

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // <BrowserRouter>
      <div className="nav__bar-wpapper">
        <NavLink exact to="/logo" className="nav__link">
          {" "}
          головна
        </NavLink>
        <NavLink to="/video" className="nav__link">
          продукцiя
        </NavLink>
        <NavLink to="/products" className="nav__link">
          виробництво
        </NavLink>
        <NavLink to="/comments" className="nav__link">
          вiдгуки
        </NavLink>
        {/* <Router exact pash="/" component={Logo} /> */}
      </div>
      // </BrowserRouter>
    );
  }
}

export default Nav;
