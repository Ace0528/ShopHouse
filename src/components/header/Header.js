import React, { useContext } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { Badge } from "../Badge/Badge";
import Icon from "../Icon/Icon";
import { AppContext } from "../../contexts/AppContextProvider";
import { CartContext } from "../../contexts/CartContextProvider";

export const Header = () => {
  const navMenu = [
    { name: "Home", value: "home", url: "/home" },
    { name: "Products", value: "products", url: "/products" },
    { name: "Contact", value: "contact", url: "/contact" },
  ];
  const { currency, updateCurrency } = useContext(AppContext);
  const { basket, favorites } = useContext(CartContext);
  console.log("currency:", currency);

  const handleCurrencyChange = (e) => {
    updateCurrency(e.target.value);
  };
  return (
    <div>
      <div className="header-container">
        <Link to="/home">
          <img
            className="header-icon"
            alt="Logo"
            src={require("../../assets/images/logo.png")}
          />
        </Link>
        <div>
          {navMenu.map((menuItem) => {
            return (
              <NavLink
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#9AB080" : "",
                  };
                }}
                className="nav-link"
                to={menuItem.url}
                key={menuItem.value}
              >
                {menuItem.name}
              </NavLink>
            );
          })}
        </div>
        {/* MOBILE */}

        <div className="header-icons">
          <Link to="/checkout">
            <Badge countValue={basket.length}>
              <Icon name="basket" />
            </Badge>
          </Link>
          <Link to="/favourites">
            <Badge countValue={favorites.length}>
              <Icon name="favorite" />
            </Badge>
          </Link>
        </div>
        <div className="currency-mobile">
          <select
            className="currency-menu"
            value={currency}
            onChange={(e) => handleCurrencyChange(e)}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="MKD">MKD</option>
          </select>
          <div className="fav-mobile">
            <Link to="/favourites">
              <Badge countValue={favorites.length}>
                <img
                  src={require("../../assets/icons/mobile-icons/fav-mobile.png")}
                />
              </Badge>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
