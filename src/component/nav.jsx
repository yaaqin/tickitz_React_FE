import React from "react";

import "../style/App.css";
import "../style/App.mobile.css";

import { Link } from "react-router-dom";

function Nav() {
  const [profile, setProfile] = React.useState(
    JSON.parse(localStorage.getItem("profile"))
  );

  return (
    <nav className="d-flex justify-content-between align-item-center">
      <div className="d-flex align-item-center gap-5">
        <img
          src="../tickitz_image/logo/Tickitz 1.png"
          alt="logo"
          className="mainLogo"
        />
        <Link to={"/"} className="d-mobile navButton mt-3 hoverScale boxShadow" href="/">
          Home
        </Link>
        <a className="d-mobile mt-3 navButton hoverScale boxShadow" href="/">
          List Movie
        </a>
      </div>

      {profile ? (
        <img
          src={"https://i.pinimg.com/564x/34/40/26/34402696f8c1e6041d4031da15eca2d1.jpg"}
          width="50px"
          height="50px"
          className="boxShadow"
          style={{ background: "gray", borderRadius: "50%" }}
          alt="logo"
        ></img>
      ) : (
        <Link to={"/register"}>
          <button className="btn btn-primary d-mobile signUpBtn">
            Sign Up
          </button>
        </Link>
      )}

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
