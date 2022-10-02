/** @format */

import React from "react";
import "./Program.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png"

const Program = () => {
  return (
    <div className="programs" id="programs">
      {/* header  */}
      <div className="programs-header">
        <span className="stroke-text">Explore Our</span>
        <span>Programs</span>
        <span className="stroke-text">To Shape you </span>
      </div>
      <div className="program-catogries">
        {programsData.map((program) => {
          return (
            <div className="category">
               {program.image}
              <span>{program.heading} </span>
              <span>{program.details}</span>
              <div className="join-now"><span className="">Join Now</span><img src={RightArrow} alt="" /></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Program;
