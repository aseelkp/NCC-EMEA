import React from "react";
import "./index.css";

function About({ data, showMoreHandler }) {
  const { title, brief } = data;
  return (
    <div className="service-grid">
      <h2>{title}</h2>
      <p>{brief}</p>
      <div className="btn">
        <button onClick={showMoreHandler(data)}>More</button>
      </div>
    </div>
  );
}

export default About;
