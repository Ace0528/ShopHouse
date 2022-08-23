import React from "react";
import Banner from "../../components/Banner/Banner";
import MiddleBanner from "../../components/MiddleBanner/MiddleBanner";
import { PageSection } from "../../components/PageSection/PageSection";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import SingleProduct from "../../components/SingleProduct/SingleProduct";
import useProducts from "../../hooks/useProducts";
import "./HomePage.css";

export default function HomePage() {
  const { products } = useProducts();
  const renderNewsProducts = () => {
    return products.slice(11, 16)?.map((product) => {
      return <SingleProduct key={product.id} product={{ ...product }} />;
    });
  };

  const renderBestDealsProducts = () => {
    return products.slice(5, 10)?.map((product) => {
      return <SingleProduct key={product.id} product={{ ...product }} />;
    });
  };
  return (
    <div>
      <PageSection>
        <Banner />
      </PageSection>
      <PageSection>
        <SectionTitle>news</SectionTitle>
        <div className="home-news-product">{renderNewsProducts()}</div>
      </PageSection>
      <PageSection>
        <MiddleBanner />
      </PageSection>
      <PageSection>
        <SectionTitle> best deals </SectionTitle>
        <div className="home-news-product">{renderBestDealsProducts()}</div>
      </PageSection>
    </div>
  );
}
