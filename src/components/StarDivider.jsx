import React from "react";

export default function StarDivider({ color = "white" }) {
  return (
    <div className="star-divider" style={{ color }}>
      <div className="star-line"></div>
      <div className="star-icon">
        <i className="fas fa-star"></i>
      </div>
      <div className="star-line"></div>
    </div>
  );
}
