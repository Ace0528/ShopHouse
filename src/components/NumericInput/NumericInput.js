import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContextProvider";
import {
  CART_INCREMENT_PRODUCT_QUANTITY,
  CART_DECREMENT_PRODUCT_QUANTITY,
} from "../../contexts/constants";
import "./NumericInput.css";

export default function NumericInput({ quantity, id }) {
  const { dispatch } = useContext(CartContext);

  return (
    <div className="buttons-qty-container">
      <button
        className="buttons-qty productPage-category"
        onClick={() =>
          dispatch({ type: CART_DECREMENT_PRODUCT_QUANTITY, payload: { id } })
        }
      >
        -
      </button>
      <span className="numeric-qty"> {quantity} </span>
      <button
        className="buttons-qty productPage-category"
        onClick={() =>
          dispatch({ type: CART_INCREMENT_PRODUCT_QUANTITY, payload: { id } })
        }
      >
        +
      </button>
    </div>
  );
}
