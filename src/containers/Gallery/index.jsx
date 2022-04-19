import React from "react";
import { GalleryApp } from "../../components";
// import { render } from 'react-dom';
// import { IMAGES } from "../../components";
// import Gallery  from "react-grid-gallery";
import "./index.css";


function gallerySection() {
  return (
    <div className="gallery section-margin" id="gallery">
      <h1 className="gradient-text">Gallery</h1>
      <div className="Gallery-container">
         {/* <GalleryApp /> */}
      </div>
    </div>
  );
}



export default gallerySection;
