import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContextProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";

export default function Checkout() {
  const { basket } = useContext(CartContext);
  const renderAllBaskets = () => {
    return basket.map((basket) => {
      return <CheckoutProduct key={basket.id} {...basket} />;
    });
  };
  return <div>{renderAllBaskets()}</div>;
}
