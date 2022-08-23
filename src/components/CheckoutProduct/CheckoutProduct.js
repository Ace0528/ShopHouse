import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContextProvider";
import { CartContext } from "../../contexts/CartContextProvider";
import { CART_DELETE_PRODUCT } from "../../contexts/constants";
import { currencySymbol, priceByCurrency } from "../../utils/currencyHelper";
import NumericInput from "../NumericInput/NumericInput";
import "./CheckoutProduct.css";

export default function CheckoutProduct({ image, title, price, id, quantity }) {
  const { currency } = useContext(AppContext);
  const { dispatch } = useContext(CartContext);
  return (
    <>
      <div className="product">
        <img
          className="delete-icon"
          src={require("../../assets/icons/del.png")}
          onClick={() =>
            dispatch({ type: CART_DELETE_PRODUCT, payload: { id } })
          }
        />
        <img className="checkoutPage-product-img" src={image} alt={title} />
        <div className="checkoutPage-product-title productPage-category">
          {title}
        </div>
        <NumericInput quantity={quantity} id={id} />
        <div className="checkoutPage-product-price">
          {currencySymbol(currency)}{" "}
          {parseFloat(priceByCurrency(price, currency) * quantity)
            // .toFixed(2)
            .toLocaleString("en-US")}
        </div>
      </div>

      {/* Mobile */}

      <div className="cart-product-mobile">
        <img
          className="checkoutPage-product-img-mobile"
          src={image}
          alt={title}
        />
        <div>
          <div className="checkoutPage-product-title-mobile">{title}</div>
          <br />
          <div>
            <div className="checkoutPage-product-price-mobile">
              {" "}
              {currencySymbol(currency)}{" "}
              {parseFloat(priceByCurrency(price, currency) * quantity)
                // .toFixed(2)
                .toLocaleString("en-US")}
            </div>
            <NumericInput quantity={quantity} id={id} />
          </div>
        </div>
        <img
          className="delete-icon"
          src={require("../../assets/icons/del.png")}
          onClick={() =>
            dispatch({ type: CART_DELETE_PRODUCT, payload: { id } })
          }
        />
      </div>
    </>
  );
}
