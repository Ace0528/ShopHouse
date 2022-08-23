import React, { useEffect, useState } from "react";
import "./Products.css";
import SingleProduct from "../SingleProduct/SingleProduct";
import ReactPaginate from "react-paginate";

export default function Products({ data, categoryName }) {
  const [pageNumber, setPageNumber] = useState(0);

  const productsPerPage = 6;
  const pageVisited = pageNumber * productsPerPage;
  let displayProducts = data.filter((product) => {
    if (categoryName === "All") {
      return data;
    }
    return product.category === categoryName;
  });

  const pageCount = Math.ceil(displayProducts.length / productsPerPage);

  let filteredProducts = displayProducts
    .slice(pageVisited, pageVisited + productsPerPage)
    .map((product) => {
      return <SingleProduct key={product.id} product={{ ...product }} />;
    });

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="products-container ">
      <div className="products">{filteredProducts}</div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        activeClassName={"pagination-active"}
      />
    </div>
  );
}
