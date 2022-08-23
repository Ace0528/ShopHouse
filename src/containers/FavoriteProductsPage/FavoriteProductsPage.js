import React, { useContext } from "react";
import FavouriteProduct from "../../components/FavouriteProduct/FavouriteProduct";
import { PageSection } from "../../components/PageSection/PageSection";
import { CartContext } from "../../contexts/CartContextProvider";
import "./FavoriteProductsPage.css";

export const FavoriteProductsPage = () => {
  const { favorites } = useContext(CartContext);

  const renderAllFavourites = () => {
    return favorites.map((favorite) => {
      return <FavouriteProduct key={favorite.id} {...favorite} />;
    });
  };
  if (favorites.length === 0) {
    return (
      <div className="checkout-page-empty">
        <img
          className="fav-empty"
          src={require("../../assets/images/dada.png")}
        />
      </div>
    );
  }
  return (
    <PageSection>
      <div className="mobile-page-fav">
        <div className="favourite-page-mobile">{renderAllFavourites()}</div>
      </div>
    </PageSection>
  );
};
