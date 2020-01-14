import React from "react";
import "./Logo.css";

class Logo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <img className="logo__size" src="../../logo.png" alt="logo" />
      </div>
    );
  }
}
export default Logo;
