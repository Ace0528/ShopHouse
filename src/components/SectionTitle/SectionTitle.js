import React from "react";
import "./SectionTitle.css";

export const SectionTitle = ({ children }) => {
  return (
    <div className="section-title">
      <h1 className="section-title-mobile">{children?.toUpperCase()}</h1>
    </div>
  );
};
