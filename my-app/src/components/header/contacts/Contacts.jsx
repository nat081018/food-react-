import React from "react";
import "./Contacts.css";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import PhoneIcon from "@material-ui/icons/Phone";
import { Link } from "react-router-dom";

class Contacts extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="header__phone">
        <Link className="link__phone">
          <PhoneIcon className="phone__icon" />
          +38 (097) 12 68 331
        </Link>
        {/* <Link> +38 (097) 12 68 331</Link> */}
      </div>
    );
  }
}

export default Contacts;
