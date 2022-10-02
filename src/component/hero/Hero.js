/** @format */

import React from "react";
import Header from "../header/Header";
import "./Hero.css";
import heart from "../../assets/heart.png";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import LazyLoad from 'react-lazy-load';
import { BlurImg } from "../../component/blurImage/BlurImage";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth<=768 ?true:false
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* the_best_add */}
        <div className="the-best-add">
          <motion.div
            initial={{ left:mobile?"150px": "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>
        <div className="hero_text">
          <div>
            <span className="stroke-text">shape </span>
            <span>your</span>
          </div>
          <div>
            <span>ideal body</span>
          </div>
          <div>
            <span>
              The Fit Nation-India’s largest facility with a 360 degree solution
              to fitness and health. Whether you want to lose weight, build
              strength or just want to be fit, we will help you. Book A Free
              Trial. Visit Now. Be Fit.
            </span>
          </div>
        </div>
        {/* figurs */}
        <div className="figures">
          <div>
            <span>+100</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+900</span>
            <span>member join</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness program</span>
          </div>
        </div>
        <div className="hero_buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join now</button>
        {/* heart-rate  */}
        <motion.div
          className="heart-rate"
          transition={{ ...transition }}
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
        >
        <LazyLoad height={32}>
          <img src={heart} alt="" /></LazyLoad>
          <span>Heart Rate</span>
          <span>115 bpm</span>
        </motion.div>
        {/* hero-image  */}
        <BlurImg
        className="hero-image"
        blurhash="LGF5]+Yk^6#M@-5c,1J5@[or[Q6."
        src={hero_image}
        width={400}
        // height={300}
        punch={1}
      />
        {/* <img src={hero_image} alt="" className="hero-image" /> */}
        
        <motion.img
          transition={transition}
          initial={{ right: "13rem" }}
          whileInView={{ right: "19.8rem" }}
          src={hero_image_back}
          alt=""
          className="hero-image-back"
        />
        {/* calories  */}
        <motion.div
          className="calories"
          transition={{ ...transition }}
          initial={{ right: "39rem" }}
          whileInView={{ right: "28rem" }}
        >
          <img src={calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 Kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
