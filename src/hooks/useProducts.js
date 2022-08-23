import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!products.length) {
      getProducts();
    }
  }, [products]);

  async function getProducts() {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log([response.data]);
      if (response?.data?.length) {
        setProducts(response.data);
      } else {
        setProducts(["No Products Found "]);
      }
    } catch (error) {
      console.log("error");
    }
  }
  return {
    products,
  };
}
