import React from "react";
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="themeSelector">
        <span className="light"></span>
        <span className="medium"></span>
        <span className="dark"></span>
        <span className="gOne"></span>
        <span className="gTwo"></span>
        <span className="gThree"></span>
      </div>
    </header>
  );
};

export default Header;
