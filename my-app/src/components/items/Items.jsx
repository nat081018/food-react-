import React from "react";
import "./Items.css";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import RemoveRedEyeIcon from "@material-ui/icons/RemoveRedEye";

class Items extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card__wrapper">
        <div className="card">
          <div className="card__img">
            <img
              className="product__img"
              src="../../product/product01.jpg"
              alt="product"
            />
            <a href="#">
              <span className="product__hover">
                <RemoveRedEyeIcon />
              </span>
            </a>
          </div>
          <div className="card__discription">
            <p className="discription">Яблучнi чiпси 50г </p>
            <p className="price">35грн</p>
          </div>
          <div className="card__buy">
            <button className="buy">
              {" "}
              <LocalMallIcon className="icon__bag" />
              Додати в кошик
            </button>
            <button className="quantity__items"></button>
          </div>
        </div>
      </div>
    );
  }
}

export default Items;
