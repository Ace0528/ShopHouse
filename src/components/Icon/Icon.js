import React from "react";
import "./Icon.css";
import { ReactComponent as BasketIcon } from "../../assets/icons/shop.svg";
import { ReactComponent as FavoriteIcon } from "../../assets/icons/heart.svg";

const Icon = ({ name, ...rest }) => {
  return (
    <div {...rest} className="custom-icon">
      {name === "basket" && <BasketIcon />}
      {name === "favorite" && <FavoriteIcon />}
    </div>
  );
};

export default Icon;
