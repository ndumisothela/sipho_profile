import React from "react";
import "./Header.css";
import siphoN from "./../../Components/Assets/siphoN.png";

const Header = () => {
  return (
    <div className="header_container">
      <div>
        <h1 className="header_name">Sipho Nhlapo</h1>
        <h3 className="header_title">Fund specialist | Asset management</h3>
      </div>
      <div>
        <img className="profile_picture" src={siphoN} alt="profile_image" />
      </div>
    </div>
  );
};

export default Header;
