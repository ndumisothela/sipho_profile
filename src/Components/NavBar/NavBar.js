import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav_container">
      <span className="about_me active">
        <p>ABOUT ME</p>
      </span>
      <span className="things_i_do  active">
        <p>THINGS I DO </p>
      </span>
      <span className="work_history active">
        <p>WORK HISTORY</p>
      </span>
      <span className="my_work active">
        <p>MY WORK</p>
      </span>
      <span className="contact_me active">
        <p>CONTACT ME</p>
      </span>
      <span className="find_me active">
        <p>FIND ME</p>
      </span>
    </div>
  );
};

export default NavBar;
