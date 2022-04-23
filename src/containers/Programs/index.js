import "./index.css";

import React, { useEffect } from "react";
import { Programs } from "../../components";

// Images
import CleanlinessDrive from "../../assets/ProgramImg/CleanlinessDrive.jpg";
import EnrolmentDay from "../../assets/ProgramImg/EnrolmentDay.jpg";
import IndependanceDay from "../../assets/ProgramImg/IndependanceDay.jpg";
import RepublicDay from "../../assets/ProgramImg/RepublicDay.jpg";
import RIPBibinRawat from "../../assets/ProgramImg/RIPBibinRawat.jpg";
import Startup from "../../assets/ProgramImg/StartUp.jpg";
import useApiCall from "../../utils/useApiCall";

function ProgramSection() {
  const [event] = useApiCall("event");
  return (
    <div className="program section-margin" id="Programs">
      <h1 className="gradient-text">Programs</h1>
      <div className="program-container">
      {
          event.map((event, index) => (<Programs key={event.id} event={event} />))
      }
      </div>
    </div>
  );
}

export default ProgramSection;
