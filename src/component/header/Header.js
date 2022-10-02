/** @format */

import React from "react";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import "./Header.css";
import { useState } from "react";

const Header = () => {
  const hembb = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header">
      <img src={Logo} alt="header img" className="logo" />
      {hembb === true && menuOpened === false ? (
        <div
          className="hubarg"
          onClick={() => setMenuOpened(true)}
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
        >
          <img
            src={Bars}
            alt="bars"
            style={{ height: "1.5rem", width: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li onClick={() => setMenuOpened(false)} href="#home">
            <a href="#">Home</a>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <a href="#programs">Program</a>
          </li>
          <li onClick={() => setMenuOpened(false)}><a href="#reasons">Why us</a></li>
          <li onClick={() => setMenuOpened(false)}><a href="#plans">Plans</a></li>
          <li onClick={() => setMenuOpened(false)}><a href="#Testimonials">Testimonials</a></li>
        </ul>
      )}
    </div>
  );
};

export default Header;
