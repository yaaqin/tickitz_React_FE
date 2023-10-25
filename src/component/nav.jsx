import React from "react";

import "../style/App.css";
import "../style/App.mobile.css";

import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="d-flex justify-content-between align-item-center">
      <div className="d-flex align-item-center gap-5">
        <img
          src="../tickitz_image/logo/Tickitz 1.png"
          alt="logo"
          className="mainLogo"
        />
        <Link to={"/"} className="d-mobile mt-3 hoverScale" href="/">
          Home
        </Link>
        <a className="d-mobile mt-3" href="/">
          List Movie
        </a>
      </div>
      <Link to={"/register"}>
        <button className="btn btn-primary d-mobile signUpBtn">Sign Up</button>
      </Link>

      {/* <!--hamburger button start--> */}
      <label
        for="checkboxForNavMobile"
        className="menuIcon"
        id="hamburgerButton"
      >
        <i className="fas fa-bars"></i>
      </label>
      {/* <!--hamburger button end--> */}
    </nav>
  );
}

export default Nav;
