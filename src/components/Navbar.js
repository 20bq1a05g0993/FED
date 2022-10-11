import React from "react";

const Navbar = () => {
  return (
    <div className="nav-menu d-flex flex-row justify-content-center">
      <div className="logo">
          <a href="">
            <img src="https://www.campusoption.com/images/colleges/logos/13_02_17_063222_VV_LL.gif" alt="VVIT LOGO" height="100px" width="100px" />
          </a>
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#work">PORTFOLIO</a>
          </li>
          <li>
            <a href="#clients">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
