import React from "react";
import "./MiddleBanner.css";

export default function MiddleBanner() {
  return (
    <div className="middle-banner-container">
      <div className="middle-banner  left">
        <div className="middle-banner-description">
          <div className="middle-banner-description-heading">Bedrooms</div>
          <div className="middle-banner-description-title">
            The bedroom of your dreams is here.
          </div>
        </div>
      </div>
      <div className="middle-banner center">
        <div className="middle-banner-description">
          <div className="middle-banner-description-heading">Decoration</div>
          <div className="middle-banner-description-title">
            Various decorations for all tastes.
          </div>
        </div>
      </div>
      <div className="middle-banner right">
        <div className="middle-banner-description">
          <div className="middle-banner-description-heading">Living room</div>
          <div className="middle-banner-description-title">
            The most beautiful room that you can have.
          </div>
        </div>
      </div>
    </div>
  );
}
