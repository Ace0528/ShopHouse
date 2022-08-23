import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useProductCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (!categories.length) {
      getCategories();
    }
  }, [categories]);

  async function getCategories() {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/categories/"
      );
      console.log([response.data]);
      if (response?.data?.length) {
        setCategories(response.data);
      } else {
        setCategories(["No Categories Found "]);
      }
    } catch (error) {
      console.log("error");
    }
  }

  return {
    categories,
  };
}
