import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../../contexts/CartContextProvider";
import { Badge } from "../Badge/Badge";
import "./HeaderBottom.css";

export default function HeaderBottom() {
  const { basket } = useContext(CartContext);
  const location = useLocation();
  return (
    <div className="bar-container">
      <div>
        <Link to="/home">
          <img
            className="img-link"
            src={
              location.pathname === "/home"
                ? require("../../assets/icons/mobile-icons/home-active.png")
                : require("../../assets/icons/mobile-icons/home.png")
            }
          />
        </Link>
      </div>
      <div>
        <Link to="/products">
          <img
            className="img-link"
            src={
              location.pathname === "/products"
                ? require("../../assets/icons/mobile-icons/offer-active.png")
                : require("../../assets/icons/mobile-icons/products.png")
            }
          />
        </Link>
      </div>
      <div>
        <Link to="/contact">
          <img
            className="img-link"
            src={
              location.pathname === "/contact"
                ? require("../../assets/icons/mobile-icons/profile-active.png")
                : require("../../assets/icons/mobile-icons/profile.png")
            }
          />
        </Link>
      </div>
      <div>
        <Link to="/checkout">
          <Badge countValue={basket.length}>
            <img
              src={require("../../assets/icons/mobile-icons/Icon shop.png")}
            />
          </Badge>
        </Link>
      </div>
    </div>
  );
}
