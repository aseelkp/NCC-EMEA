import React from "react";
import {CarouselApp} from "../../components/index";
import "./index.css";


function gallerySection() {
  return (
    <div className="gallery section-margin" id="gallery">
      <h1 className="gradient-text">Gallery</h1>
      <div className="Gallery-container">
        <CarouselApp />
      </div>
    </div>
  );
}



export default gallerySection;
