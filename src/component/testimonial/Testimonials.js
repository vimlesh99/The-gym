/** @format */

import React from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import { useState } from "react";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import {motion} from "framer-motion"

const Testimonials = () => {

  const transition = {typr: "spring", duration:3}
  const [selecte, setSelected] = useState(0);
  const tLength = testimonialsData.length;

  return (
    <div className="testimonials" id="Testimonials">
      <div className="left-t">
        <span> Testimonials</span>
        <span className="stroke-text"> What they</span>
        <span> Say about us</span>
        <motion.span
         key={selecte}
          initial={{opacity:0,x:100}}
          animate={{opacity:1,x:0}}
          exit={{opacity:0,x:-100}}
          transition={transition}
        >{testimonialsData[selecte].review}</motion.span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {" "}
            {testimonialsData[selecte].name}
          </span>{" "}
          - {testimonialsData[selecte].status}
        </span>
      </div>
      <div className="right-t">
        <motion.div  initial={{opacity:"0" , x:-100}}
        transition={{...transition,duration:2}}
        whileInView={{opacity:1,x:0}}></motion.div>
        <motion.div initial={{opacity:"0" , x:100}}
        transition={{...transition,duration:2}}
        whileInView={{opacity:1,x:0}}></motion.div>
        <motion.img 
          key={selecte}
          initial={{opacity:0,x:100}}
          animate={{opacity:1,x:0}}
          exit={{opacity:0,x:-100}}
          transition={transition}
          src={testimonialsData[selecte].image} alt="" />
        <div className="arrows">
          <img 
          onClick={()=>{
            selecte===0?setSelected((tLength-1)):setSelected(prev=>prev-1)
          }}
          src={leftArrow} alt="" />
          <img
           onClick={()=>{
            selecte===tLength-1?setSelected(0):setSelected(prev=>prev+1)
          }}
          
           src={rightArrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
