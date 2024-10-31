import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [showIcon, setShowIcon] = useState(true);

  function handleMenu() {
    setShowIcon(!showIcon);
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

        <div className="burger" onClick={handleMenu}>
          {showIcon ? <RxHamburgerMenu /> : <RxHamburgerMenu />}

          {!showIcon && (
            <div className="dropdown">
              <ul>
                <li>
                  <Link to="/"> Home </Link>
                  <Link to="/about"> About </Link>
                  <Link to="/services"> Services </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* { <div className="side-nav animate__animated animate__bounceInLeft">
        <ul>
          <li>
            <Link to="/"> Home </Link>
            <Link to="/about"> About </Link>
            <Link to="/services"> Services </Link>
          </li>
        </ul>
      </div>} */}
    </>
  );
};

export default Navbar;
