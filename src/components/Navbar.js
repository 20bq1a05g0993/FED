import React from "react";

const Navbar = () => {
  return (
    <div className="nav-menu d-flex flex-row justify-content-center">
      <div className="logo">
          <a href="">
            <img src="https://www.campusoption.com/images/colleges/logos/13_02_17_063222_VV_LL.gif" alt="VVIT LOGO" height="100px" width="100px"  />
          </a>
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href="#home"></a>
          </li>
          <li>
            <a href="#about"></a>
          </li>
          <li>
            <a href="#work"></a>
          </li>
          <li>
            <a href="#clients"></a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
