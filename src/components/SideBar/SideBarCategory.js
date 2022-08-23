import React from "react";
import useProductCategories from "../../hooks/useProductCategories";
import "./SideBarCategory.css";

export default function SideBarCategory({ handleBtnClick, category }) {
  const { categories } = useProductCategories();

  const renderAllCategories = () => {
    return categories.map((category) => {
      return (
        <div key={category}>
          <button
            className="categoryBtn "
            onClick={() => handleBtnClick(category)}
            key={category}
          >
            {category}
          </button>
        </div>
      );
    });
  };
  return (
    <>
      <div className="side-bar-categories">
        <div className="category">CATEGORY</div>
        <div>
          <button
            className="categoryBtn "
            onClick={() => handleBtnClick("All")}
          >
            All
          </button>
          <div className="categoryBtn-mobile">{renderAllCategories()}</div>
        </div>
      </div>

      {/* MOBILE */}

      <div className="bar-categories">
        <div className="category">CATEGORY</div>
        <div className="categories-bar-container">
          <button
            className="categoryBtn "
            onClick={() => handleBtnClick("All")}
          >
            All
          </button>
          {renderAllCategories()}
        </div>
      </div>
    </>
  );
}
