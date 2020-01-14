import React from "react";
import "./Header.css";
import Nav from "./navBar/Nav.jsx";
import SocialLink from "./socialLink/SocialLink.jsx";
import Contacts from "./contacts/Contacts.jsx";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header__wrapper">
        <Nav />
        <SocialLink />
        <Contacts />
      </div>
    );
  }
}
export default Header;
