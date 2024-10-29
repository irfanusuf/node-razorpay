import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [showSideNav, setShowSideNav] = useState(false);

  function handleSideNav() {
    setShowSideNav(!showSideNav);
  }

  return (
    <>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/"> Home </Link>
            <Link to="/about"> About </Link>
            <Link to="/services"> Services </Link>
          </li>
        </ul>

        <div onClick={handleSideNav}>
          {!showSideNav ? <RxHamburgerMenu /> : <RxCross1 />}
        </div>
      </div>

     {showSideNav && <div className="side-nav animate__animated animate__bounceInLeft">
        <ul>
          <li>
            <Link to="/"> Home </Link>
            <Link to="/about"> About </Link>
            <Link to="/services"> Services </Link>
          </li>
        </ul>
      </div>}
    </>
  );
};

export default Navbar;
