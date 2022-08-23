import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-section footer-section-border ">
        <img
          className="footerlogo"
          src={require("../../assets/images/logofooter.png")}
        />
        <div className="footer-adress-container">
          <div> Address: </div>
          <div className="footer-addres-color">
            Rua Duque de Caxias, 1023, Porto Alegre - RS
          </div>
          <div> Telephone: </div>
          <div className="footer-addres-color"> (51) 3423-XXXX </div>
        </div>
      </div>
      <div className="footer-section footer-section-border">
        <div className="footer-followUs">
          <div className="FollowUs-NewsLatter"> Follow Us </div>
          <div className="footer-addres-color">
            Follow us on social networks
          </div>
          <div className="social-networks">
            <img
              className="social-networks-icons"
              src={require("../../assets/icons/instagram.png")}
            />
            <img
              className="social-networks-icons"
              src={require("../../assets/icons/twitter.png")}
            />
            <img
              className="social-networks-icons"
              src={require("../../assets/icons/facebook.png")}
            />
            <img
              className="social-networks-icons"
              src={require("../../assets/icons/tiktok.png")}
            />
          </div>
        </div>
      </div>
      <div className="footer-section">
        <div className="footer-newsletter">
          <div className="FollowUs-NewsLatter">Newsletter</div>
          <div className="footer-addres-color">
            Always stay tuned for store promotions and news!
          </div>
        </div>
      </div>
    </div>
  );
}
