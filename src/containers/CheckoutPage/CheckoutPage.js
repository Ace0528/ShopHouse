import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Checkout from "../../components/Checkout/Checkout";
import { PageSection } from "../../components/PageSection/PageSection";
import { AppContext } from "../../contexts/AppContextProvider";
import { CartContext } from "../../contexts/CartContextProvider";
import { currencySymbol, priceByCurrency } from "../../utils/currencyHelper";
import "./CheckoutPage.css";

export const CheckoutPage = () => {
  const { currency } = useContext(AppContext);
  const { basket, totalPrice } = useContext(CartContext);

  if (basket.length === 0) {
    return (
      <div className="checkout-page-empty">
        <img
          className="empty-img"
          src={require("../../assets/images/empty-cart.png")}
        />{" "}
      </div>
    );
  }
  return (
    <PageSection>
      <div className="checkout-page-container">
        <Checkout />
        <div className="price-container ">
          <div className="title-margin productPage-title "> Order Summary </div>
          <hr className="line" />
          <div className="checkout-page-total">
            <div className="productPage-category">Subtotal</div>
            <div className="productPage-category">
              {" "}
              {currencySymbol(currency)}{" "}
              {parseFloat(priceByCurrency(totalPrice, currency))
                // .toFixed(2)
                .toLocaleString("en-US")}
            </div>
          </div>
          <div className="checkout-page-total">
            <div className="productPage-category">Shipping</div>
            <div className="productPage-category"> Free </div>
          </div>
          <div className="checkout-page-total">
            <div className=" productPage-title">TOTAL</div>
            <div className=" productPage-title total-price">
              {" "}
              {currencySymbol(currency)}{" "}
              {parseFloat(priceByCurrency(totalPrice, currency))
                // .toFixed(2)
                .toLocaleString("en-US")}
            </div>
          </div>
          <Link to="/payment">
            <button className="productPage-price checkOut-btn">
              {" "}
              Check out{" "}
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile */}

      <div className="mobile-page">
        <div className="price-container-mobile">
          <div className="price-flex">
            <div> Subtotal </div>
            <div>
              {currencySymbol(currency)}{" "}
              {parseFloat(priceByCurrency(totalPrice, currency))
                // .toFixed(2)
                .toLocaleString("en-US")}
            </div>
          </div>
          <div className="price-flex">
            <div> Shipping </div>
            <div> Free </div>
          </div>
          <div className="price-flex">
            <div className=" productPage-title"> Price </div>
            <div className=" productPage-title total-price">
              {" "}
              {currencySymbol(currency)}{" "}
              {parseFloat(priceByCurrency(totalPrice, currency))
                // .toFixed(2)
                .toLocaleString("en-US")}
            </div>
          </div>
        </div>
        <div className="price-flex">
          <Link to="/payment">
            <button className="productPage-price checkOut-btn">
              {" "}
              Check out{" "}
            </button>
          </Link>
        </div>
      </div>
    </PageSection>
  );
};
