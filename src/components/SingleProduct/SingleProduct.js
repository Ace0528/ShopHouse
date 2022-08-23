import React, { useContext } from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { AppContext } from "../../contexts/AppContextProvider";
import { CartContext } from "../../contexts/CartContextProvider";
import {
  CART_ADD_PRODUCT,
  FAVOURITE_ADD_PRODUCT,
} from "../../contexts/constants";
import { currencySymbol, priceByCurrency } from "../../utils/currencyHelper";
import "./SingleProduct.css";

export default function SingleProduct({ product }) {
  const { currency } = useContext(AppContext);
  const { dispatch } = useContext(CartContext);
  const { id, price, image, description, category, rate, title, rating } =
    product;

  const handleAddToCart = () => {
    dispatch({
      type: CART_ADD_PRODUCT,
      payload: {
        id: id,
        title: title,
        image: image,
        price: price,
        category: category,
        rating: rating,
      },
    });
  };
  const handleAddToFavourites = () => {
    dispatch({
      type: FAVOURITE_ADD_PRODUCT,
      payload: {
        image,
        title,
        id,
        description,
        price,
        rating,
        rate,
      },
    });
  };
  return (
    <div className="product-card">
      <div className="single-product-container__img">
        <img className="single-product__img" src={image} alt={title} />
        <div className="img-action-container">
          <div className="img-action" onClick={() => handleAddToFavourites()}>
            <img
              className="img-action-heart"
              src={require("../../assets/icons/fav.png")}
            />
          </div>
          <div className="img-action" onClick={() => handleAddToCart()}>
            <img
              className="img-action-heart"
              src={require("../../assets/icons/basket.png")}
            />
          </div>
        </div>
      </div>
      <ReactStars
        classNames="rating"
        size={24}
        edit={false}
        isHalf={true}
        value={rating.rate}
      />
      <ReactStars
        classNames="rating-mobile"
        size={14}
        edit={false}
        isHalf={true}
        value={rating.rate}
      />
      <Link
        to={`/product/${id}`}
        key={product.id}
        product={product}
        style={{ textDecoration: "none", color: "#1C2120" }}
      >
        <div className="single-product__title "> {title} </div>
      </Link>

      <div className="single-product__title price">
        {currencySymbol(currency)} {priceByCurrency(price, currency)}{" "}
      </div>
    </div>
  );
}
