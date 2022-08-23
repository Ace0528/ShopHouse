import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import FooterCopyright from "../components/Footer/FooterCopyright";
import { Header } from "../components/header/Header";
import HeaderBottom from "../components/HeaderBottomMobile/HeaderBottom";
import { PageSection } from "../components/PageSection/PageSection";
import "./Applayout.css";

export default function Applayout() {
  return (
    <div>
      <Header />
      <div className="body">
        <Outlet />
        <div className="foooter-mobile">
          <FooterCopyright />
        </div>
      </div>
      <div className="footer">
        <Footer />
        <FooterCopyright />
      </div>
      <HeaderBottom />
    </div>
  );
}
