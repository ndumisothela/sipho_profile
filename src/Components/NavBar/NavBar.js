import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav_container">
      <NavLink className="home active" to="/home">
        HOME
      </NavLink>

      <NavLink className="about active" to="/about-me">
        ABOUT ME
      </NavLink>
      <NavLink className="things_i_do active" to="/things-i-do">
        THINGS I DO
      </NavLink>
      <NavLink className="Work_history active" to="/work-history">
        WORK HISTORY
      </NavLink>
      <NavLink className="contact_me active" to="/contact-me">
        CONTACT ME
      </NavLink>
    </nav>
  );
};

export default NavBar;
