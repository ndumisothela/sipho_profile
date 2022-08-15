import React from "react";
import "./LandingPage.css";
import land from "./../../Components/Assets/land.jpg";

const LandingPage = () => {
  return (
    <div className="landing_page_container">
      <div className="greeting_container">
        <div className="welcome_text">
          <p>
            <strong>Lives</strong> in Gauteng.
          </p>
          <p>
            <strong>Works</strong> everywhere.
          </p>
        </div>
        <span>
          <p className="text">
            Experienced Business Development with almost 10 years demonstrated
            history of working in the life insurance and investment industry.
            Skilled in Business Planning, Sales, Customer Relationship
            Management, Post Sales Management, and Account Management. Driven
            and tenacious business development professional graduated from
            various institutions of higher learning with an acumen for numbers.
          </p>
          <button className="btn_contact_me">Contact Me</button>
        </span>
      </div>
      <img className="self_image" src={land} alt="self_image" />
    </div>
  );
};

export default LandingPage;
