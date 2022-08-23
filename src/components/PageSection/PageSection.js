import React from "react";
import "./PageSection.css";
export const PageSection = ({ children, ...rest }) => {
  return (
    <div {...rest} className="page-section">
      {children}
    </div>
  );
};
