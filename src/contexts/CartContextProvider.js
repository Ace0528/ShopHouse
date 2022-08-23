import { createContext, useReducer } from "react";
import {
  CART_ADD_PRODUCT,
  CART_INCREMENT_PRODUCT_QUANTITY,
  CART_DECREMENT_PRODUCT_QUANTITY,
  FAVOURITE_ADD_PRODUCT,
  CART_DELETE_PRODUCT,
  FAVOURITE_DELETE_PRODUCT,
  RESET_BASKET,
} from "./constants";

const INIT_DATA = {
  basket: [],
  favorites: [],
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case CART_ADD_PRODUCT:
      const basket = [...state.basket];
      const foundProduct = basket.find((item) => item.id === payload.id);
      if (foundProduct) {
        foundProduct.quantity++;
        return { ...state, basket: [...basket] };
      }
      return { ...state, basket: [...basket, { ...payload, quantity: 1 }] };

    case CART_INCREMENT_PRODUCT_QUANTITY:
      const productToIncrement = state.basket.find(
        (product) => product.id === payload.id
      );
      if (productToIncrement.quantity < productToIncrement.rating.count) {
        productToIncrement.quantity++;
        return { ...state, basket: [...state.basket] };
      }
      return { ...state };
    case CART_DECREMENT_PRODUCT_QUANTITY:
      const productToDecrement = state.basket.find(
        (product) => product.id === payload.id
      );
      if (productToDecrement.quantity === 1) {
        return { ...state };
      }
      if (productToDecrement.quantity > 1) {
        productToDecrement.quantity--;
        return { ...state, basket: [...state.basket] };
      }
      return { ...state };
    case CART_DELETE_PRODUCT:
      const basketFiltered = state.basket.filter(
        (item) => item.id !== payload.id
      );
      return { ...state, basket: [...basketFiltered] };
    case RESET_BASKET:
      return { ...state, basket: [] };
    default:
      return state;
    case FAVOURITE_ADD_PRODUCT:
      const newFavouriteList = [...state.favorites];
      const foundFavouriteProduct = newFavouriteList.find(
        (product) => product.id === payload.id
      );
      if (foundFavouriteProduct) {
        return state;
      }
      return { ...state, favorites: [...newFavouriteList, { ...payload }] };
    case FAVOURITE_DELETE_PRODUCT:
      const favouriteFiltered = state.favorites.filter(
        (item) => item.id !== payload.id
      );
      return { ...state, favorites: [...favouriteFiltered] };
  }
};

export const CartContext = createContext(INIT_DATA);

export function CartProvider({ children }) {
  const [cartData, dispatch] = useReducer(reducer, INIT_DATA);

  const totalPrice = cartData.basket
    .reduce((acc, item) => acc + item.quantity * item.price, 0)
    .toFixed(2);

  return (
    <CartContext.Provider
      value={{
        ...cartData,
        dispatch,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
