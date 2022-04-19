import React, { useState } from "react";
import { About, HoverCard } from "../../components";
import "./index.css";
import { aboutData } from "./aboutConfig";
function AboutNCC() {
  const [selectedCard, setSelectedCard] = useState(null);
  const handleShowMore = (selectData) => (e) => setSelectedCard(selectData);

  const handleCloseShowMore = () => setSelectedCard(null);
  return (
    <div className="about section-margin" id="about">
      <h1 className="gradient-text">About</h1>
      <div className="about-container">
        {aboutData.map((data, index) => (
          <About data={data} showMoreHandler={handleShowMore} key={index} />
        ))}
        {selectedCard && (
          <HoverCard data={selectedCard} closeHandler={handleCloseShowMore} />
        )}
      </div>
    </div>
  );
}

export default AboutNCC;
