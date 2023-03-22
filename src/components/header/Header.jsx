// import React, { useEffect, useState } from "react";
import HamburgerNav from "../hamburgerNav/HamburgerNav";
// import { Link, NavLink } from "react-router-dom";
// import logo from "../../img/logo.png";
// import telephone from "../../img/telephone.svg";

const Header = () => {
  return (
          <header className="header">
            <div className="container-header">
              <HamburgerNav />
            </div>
          </header>
  )
};

export default Header;
