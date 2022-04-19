import React from "react";
import "./index.css";

function About({ icon, title, text,codeLink }) {
  return (
    <div className="service-grid">
      {" "}
      {/* <div className="service-grid-icon">
        <img src={icon} alt="Icon" />
      </div> */}
      <h2>{title}</h2>
      <p>{text}</p>
      <div className="btn">
        <button>More</button>
      </div>
    </div>
  );
}

export default About;
