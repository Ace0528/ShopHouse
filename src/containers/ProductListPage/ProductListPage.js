import React, { useEffect, useState } from "react";
import { PageSection } from "../../components/PageSection/PageSection";
import BannerProductList from "../../components/Banner/BannerProductList";
import useProducts from "../../hooks/useProducts";
import Products from "../../components/Products/Products";
import "./ProductListPage.css";
import useProductCategories from "../../hooks/useProductCategories";
import SideBarCategory from "../../components/SideBar/SideBarCategory";

export default function ProductListPage() {
  const { products } = useProducts();
  const [categoryName, setCategoryName] = useState("All");
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(products);
  }, [products]);

  const handleBtnClick = (category) => {
    setCategoryName(category);
  };
  return (
    <div>
      <PageSection>
        <BannerProductList />
      </PageSection>
      <PageSection>
        <div className="products-list">
          <SideBarCategory handleBtnClick={handleBtnClick} />
          <Products categoryName={categoryName} data={data} />
        </div>
      </PageSection>
    </div>
  );
}
