/** @format */

import React from "react";
import './Join.css';
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Join = () => {
const form = useRef();
const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wn5phhj', 'template_amh9nte', form.current, 'L4MbbV6ITRjR8bL25')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
  return (
    <div className="join" id="join-us">
      <div className="left-j">
      <hr/>
        <div>
          <span className="stroke-text">READY TO</span>
          <span> LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text"> WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} onSubmit={sendEmail} className="email-container">
            <input type="email" name="from_name" placeholder="Enter your Email Address" />
            <button  className="btn btn-j">Join Now</button>
        </form>

      </div>
    </div>
  );
};

export default Join
