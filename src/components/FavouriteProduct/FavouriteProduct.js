import React, { useContext } from "react";
import ReactStars from "react-rating-stars-component";
import { AppContext } from "../../contexts/AppContextProvider";
import { CartContext } from "../../contexts/CartContextProvider";
import {
  CART_ADD_PRODUCT,
  FAVOURITE_DELETE_PRODUCT,
} from "../../contexts/constants";
import { currencySymbol, priceByCurrency } from "../../utils/currencyHelper";
import "./FavouriteProduct.css";

export default function FavouriteProduct({
  image,
  title,
  price,
  id,
  quantity,
  rating,
  rate,
  description,
  category,
}) {
  const { currency } = useContext(AppContext);
  const { dispatch, basket } = useContext(CartContext);
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
  return (
    <div>
      <div className="favourite-product-container">
        <img className="favourite-product-image" src={image} alt={title} />
        <div>
          <div className="category text-aling">{title}</div>
          <ReactStars
            size={24}
            edit={false}
            isHalf={true}
            value={rating.rate}
          />
          <div className="margin"> {category} </div>
          <hr className="favourite-product-line " />
          <div className="total-price ">
            {currencySymbol(currency)} {priceByCurrency(price, currency)}
          </div>
          <div className="product-fav-description">{description}</div>
          <div className="btn-container">
            {basket.find((item) => item.id === id) ? (
              <button className="add-to-cart-btn in-cart-btn">
                Already in cart list
              </button>
            ) : (
              <button className="add-to-cart-btn mr">
                <img
                  className="add-btn"
                  onClick={() => handleAddToCart()}
                  src={require("../../assets/icons/btn.png")}
                />
              </button>
            )}
            <button className="add-to-cart-btn ">
              <img
                className="remove-btn"
                src={require("../../assets/icons/trash.png")}
                onClick={() =>
                  dispatch({ type: FAVOURITE_DELETE_PRODUCT, payload: { id } })
                }
              />
            </button>
          </div>
        </div>
      </div>

      {/* mobile */}

      <div className="favourite-product-mobile-container">
        <div className="favourite-product-mobile">
          <img
            className="favourite-product-image-mobile"
            src={image}
            alt={title}
          />
          <div className="favourite-product-description-mobile">
            <div className="favourite-product-title"> {title} </div>
            <div className="favourite-rating">
              <ReactStars
                size={14}
                edit={false}
                isHalf={true}
                value={rating.rate}
              />
            </div>
            <div className="total-price fav-price">
              {currencySymbol(currency)} {priceByCurrency(price, currency)}
            </div>
          </div>
          <div className="btn-container-mobile btn-padding">
            {basket.find((item) => item.id === id) ? (
              <button className="add-to-cart-btn-product ">
                <img
                  className="add-btn btn-size"
                  src={require("../../assets/icons/mobile-icons/add-to-cart-mobile-active.png")}
                />
              </button>
            ) : (
              <button className="add-to-cart-btn-product  ">
                <img
                  className="add-btn btn-size"
                  onClick={() => handleAddToCart()}
                  src={require("../../assets/icons/mobile-icons/add-to-cart-mobile.png")}
                />
              </button>
            )}
            <button className="add-to-cart-btn-product ">
              <img
                className="remove-btn btn-size"
                src={require("../../assets/icons/trash.png")}
                onClick={() =>
                  dispatch({ type: FAVOURITE_DELETE_PRODUCT, payload: { id } })
                }
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
