/** @format */

import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData.js";
import whiteTick from "../../assets/whiteTick.png"

const Plans = () => {
  return (
    <div className="plans-container" id="plans">
    <div className="blur plan-blur1"></div>
    <div className="blur plan-blur2"></div>
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">ready to start</span>
        <span>your journey</span>
        <span className="stroke-text">now with us</span>
      </div>
      <div className="plans">
        {plansData.map((plan, i) => {
          return (
            <div className="plan" key={i}>
              {plan.icon}
              <span>{plan.name}</span>
              <span>${plan.price}</span>
              <div className="fetures">
                {plan.features.map((feature, i) => {
                  return <div className="feture">
                    <img src={whiteTick} alt="" />
                    <span key={i}>{feature}</span>
                  </div>;
                })}
              </div>
              
              <div><span>
                see more benefits ->
              </span></div>
              <button className="btn">Join Now</button>
            </div>
          );
        })}
        
      </div>
    </div>
  );
};

export default Plans;
