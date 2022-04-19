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
        {aboutData.map((data) => (
          <About data={data} showMoreHandler={handleShowMore} />
        ))}
        {/* <About
          title="MOTTO OF NCC"
          text="The need for having motto for the Corps was discussed in the 11th Central Advisory Committee (CAC) meeting held on 11 Aug 1978."
        />
        <About
          title="CORE VALUES"
          text="The NCC is a responsive, learning and continuously evolving organization. Its activity is guided by certain Core Values that we endeavour to instill among all ranks of the NCC."
        />
        <About
          title="PLEDGE"
          text="WE THE CADETS OF THE NATIONAL CADET CORPS,DO SOLOEMNLY PLEDGE THAT WE SHALL ALWAYS UPHOLD THE UNITY OF INDIA."
        />
        <About
          title="FLAG"
          text="The NCC flag for various units of the NCC was first introduced in 1951. The flag was of same pattern, colour and size as was used by various regiments of the Army. "
        />
        <About
          title="NCC SONG"
          text="Hum Sab Bharatiya Hain, Hum Sab Bharatiya Hain
                Apni Manzil Ek Hai,
                Ha, Ha, Ha, Ek Hai,
                Ho, Ho, Ho, Ek Hai.
                Hum Sab Bharatiya Hain."
        /> */}
        {selectedCard && (
          <HoverCard data={selectedCard} closeHandler={handleCloseShowMore} />
        )}
      </div>
    </div>
  );
}

export default AboutNCC;
