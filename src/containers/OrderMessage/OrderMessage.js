import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PageSection } from "../../components/PageSection/PageSection";
import { CartContext } from "../../contexts/CartContextProvider";
import "./OrderMessage.css";

export default function OrderMessage() {
  const { dispatch } = useContext(CartContext);
  return (
    <div>
      <PageSection>
        <div className="success">
          <img
            className="margin-success"
            src={require("../../assets/images/success.png")}
          />
        </div>
        <div className="productPage-title">Order Placed Successfully!</div>
        <div className="success">
          <Link to={"/home"}>
            <button
              className="checkOut-btn productPage-title margin-btn"
              onClick={() => {
                dispatch({ type: "RESET_BASKET" });
              }}
            >
              Go To Home
            </button>
          </Link>
        </div>
      </PageSection>
    </div>
  );
}
