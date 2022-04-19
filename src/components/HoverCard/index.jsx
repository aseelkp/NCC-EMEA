import React from "react";
import "./hovercard.css";
import CloseIcon from "@mui/icons-material/Close";

function hovercard({ data,closeHandler }) {
  const { title, content } = data;
  return (
    <div className="container wrapper">
      <div className="card selectedContainer">
        <h2 className="slctTitle">
          <span className="titleTxt">{title}</span>
          <CloseIcon className="closeIcon" onClick={closeHandler}/>
        </h2>
        <p className="slctContent">{content}</p>
      </div>
    </div>
  );
}

export default hovercard;
