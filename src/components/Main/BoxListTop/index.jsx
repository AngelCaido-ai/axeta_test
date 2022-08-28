import React from 'react';
import Portfolio from "./Portfolio";
import Experience from "./Experience";
import SampleCode from "./SampleCode";

const BoxListTop = () => {
  return (
    <div className="boxList">
      <Portfolio/>
      <Experience />
      <SampleCode/>
      <div className="boxListItem">
        <h2 className="titleName">Availability</h2>
        <p>Full-time</p>
        <h2 className="titleName">Preferred Environment</h2>
        <p>GitHub, Mac OSX</p>
      </div>
    </div>
  );
};

export default BoxListTop;