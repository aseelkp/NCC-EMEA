import React from "react";
import "./hovercard.css";

function hovercard(title, text) {
  return (
    <div className="container">
      <div className="card">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default hovercard;
