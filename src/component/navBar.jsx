import React from 'react'
import "../style/App.css";

import Nav from './nav';

function navigasi() {
  return (
    // {/* <!--start header--> */}
    <header className="container pt-4">
        <Nav />
    {/* <!--checkbox for navbar start--> */}
    <input type="checkbox" name="" id="checkboxForNavMobile"></input>
    {/* <!--checkbox for navbar end--> */}

    {/* <!--Navbar mobile start--> */}
    <div className="mobileNav">
      <section className="navMbl" id="navbarMobile"> 
        <div className="d-flex justify-content-center hoverScale boxShadow">
          <a className=" mt-3" href="/">
            Home
          </a>
        </div>
        <div className="d-flex justify-content-center hoverScale boxShadow">
          <a className=" mt-3" href="/">
            List Movie
          </a>
        </div>
        <div className=" mt-3 d-flex justify-content-center hoverScale signBtn">
          <a className="signBtnText" href="/#">
            Sign Up
          </a>
        </div>
      </section>
    </div>
    {/* <!--Navbar mobile end--> */}
    {/* <!--content start--> */}
    <section className="mt-md-10">
      <div className="row">
        <div className="col-md-6 col-xs-12 pt-title-10 text-center">
          <span className="text-muted">Nearest Cinema, Newest Movie,</span>
          <h1 className="text-primary">Find out now!</h1>
        </div>
        <div className="col-md-6 col-xs-12">
          <img
            className="bannerFilm"
            src="/tickitz_image/etc/Group 14.png"
            alt="banner"
          />
        </div>
      </div>
    </section>
    {/* <!--content end--> */}
  </header>
//   {/* <!--end header--> */}
  )
}


export default navigasi;