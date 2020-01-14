import React from "react";
import "./SocialLink.css";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import {
  BrowserRouter,
  Route,
  Link,
  Router,
  Switch,
  NavLink
} from "react-router-dom";

class SocialLink extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const linkStyle = {
      color: "#000",
      fontSize: "30px"
    };
    return (
      <div className="sociale__links">
        {/* <a href="https://www.instagram.com/kondratenko_food/?hl=ru" target="_blank">
						</a> */}
        {/* <Route pash="https://www.instagram.com/kondratenko_food/?hl=ru">
          {" "}
          <InstagramIcon />{" "}
        </Route> */}
        <ul className="sociale__links">
          <li className="link">
            <Link to="https://www.instagram.com/kondratenko_food/?hl=ru">
              {" "}
              <InstagramIcon />{" "}
            </Link>
          </li>
          <li className="link">
            <Link>
              {" "}
              <FacebookIcon />{" "}
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
export default SocialLink;
