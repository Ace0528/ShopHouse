import React from "react";
import "./Banner.css";

export default function Banner() {
  return (
    <div>
      <div className="banner">
        <div className="baner-offer">
          <div className="banner-title"> Special offer </div>
          <div className="banner-title-category"> Furniture </div>
          <div className="banner-tittle-description ">
            {" "}
            We have several varieties of furniture and colors, come and see our
            products!{" "}
          </div>
        </div>
        <div className="baner-offer-mobile">
          <span className="banner-title-mobile"> Special offer </span>
          <span className="banner-title-category-mobile"> Furniture </span>
        </div>
      </div>
    </div>
  );
}
