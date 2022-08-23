import React from "react";
import "./Badge.css";

export const Badge = ({ countValue, children, color, ...rest }) => {
  const counterLabel = (counterValue) => {
    if (counterValue > 99) {
      return "99+";
    }
    return counterValue;
  };

  const isValidCounterValue = (counterValue) => {
    if (!counterValue || typeof counterValue !== "number") {
      return false;
    }
    return counterValue > 0;
  };

  return (
    <div {...rest} className="badge">
      {isValidCounterValue(countValue) && (
        <div style={{ color: color ?? "" }} className="counter-indicator">
          {counterLabel(countValue)}
        </div>
      )}
      <div className="badge-content cart-badge ">{children}</div>
    </div>
  );
};
