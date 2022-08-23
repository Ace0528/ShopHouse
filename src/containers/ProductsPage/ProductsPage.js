import React, { useContext } from "react";
import ReactStars from "react-rating-stars-component";
import { useParams } from "react-router-dom";
import { PageSection } from "../../components/PageSection/PageSection";
import { AppContext } from "../../contexts/AppContextProvider";
import { CartContext } from "../../contexts/CartContextProvider";
import {
  CART_ADD_PRODUCT,
  FAVOURITE_ADD_PRODUCT,
} from "../../contexts/constants";
import useProducts from "../../hooks/useProducts";
import { currencySymbol, priceByCurrency } from "../../utils/currencyHelper";
import "./ProductsPage.css";

export default function ProductsPage() {
  const { currency } = useContext(AppContext);
  const { products } = useProducts();
  const params = useParams();
  const product = products.find((item) => item.id == params.id);
  const { id, price, image, description, category, rate, title, rating } =
    product || {};
  console.log(product);
  const { dispatch, basket, favorites } = useContext(CartContext);
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
        rate: rate,
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
    <PageSection>
      <div className="page-container-product-detail">
        <div>
          <img className="productPage_img" src={image} alt={title} />
        </div>
        <div className="productPage-description">
          <div className="productPage-title"> {title} </div>
          <div className="productPage-category mt mb">Category: {category}</div>
          <div className="product-description mb"> Availability: In stock </div>
          <div className="product-description">Free shipping</div>
          <div className="productPage-price mt">
            {currencySymbol(currency)} {priceByCurrency(price, currency)}
          </div>
          <div className="product-description mt">{description}</div>
          <div className="btn-container">
            {basket.find((item) => item.id === id) ? (
              <button className="add-to-cart-btn in-cart-btn">
                Already in cart list
              </button>
            ) : (
              <button className="add-to-cart-btn">
                <img
                  className="add-btn"
                  onClick={() => handleAddToCart()}
                  src={require("../../assets/icons/btn.png")}
                />
              </button>
            )}
            {favorites.find((item) => item.id === id) ? (
              <button className="add-to-cart-btn">
                <img
                  className="add-btn"
                  src={require("../../assets/icons/heart-disabled.png")}
                />
              </button>
            ) : (
              <button className="add-to-fav-btn">
                <img
                  className="add-btn"
                  onClick={() => handleAddToFavourites()}
                  src={require("../../assets/icons/hearts.png")}
                />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE */}

      <div className="page-container-product-detail-mobile">
        <div className="center-img">
          <img className="productPage_img-mobile" src={image} alt={title} />
        </div>
        <div>
          <div className="productPage-title"> {title} </div>
          <div>
            <div className="productPage-category mt mb">
              Category: {category}
            </div>
            <div className="product-description mb">Availability: In stock</div>
            <div className="product-description mb">Free shipping</div>
          </div>
          <div className="productPage-price mt">
            {currencySymbol(currency)} {priceByCurrency(price, currency)}
          </div>
          <div className="product-description mt description-mobile">
            {description}
          </div>
          <div className="btn-container-mobile">
            {basket.find((item) => item.id === id) ? (
              <button className="add-to-cart-btn-mobile in-cart-btn">
                Already in cart list
              </button>
            ) : (
              <button className="add-to-cart-btn-mobile">
                <img
                  className="add-btn"
                  onClick={() => handleAddToCart()}
                  src={require("../../assets/icons/btn.png")}
                />
              </button>
            )}
            {favorites.find((item) => item.id === id) ? (
              <button className="add-to-cart-btn-mobile">
                <img
                  className="add-btn"
                  src={require("../../assets/icons/heart-disabled.png")}
                />
              </button>
            ) : (
              <button className="add-to-fav-btn">
                <img
                  className="add-btn"
                  onClick={() => handleAddToFavourites()}
                  src={require("../../assets/icons/hearts.png")}
                />
              </button>
            )}
          </div>
        </div>
      </div>
    </PageSection>
  );
}
