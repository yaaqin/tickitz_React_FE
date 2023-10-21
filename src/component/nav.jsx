import React from 'react'

function Nav() {
  return (
    <nav className="d-flex justify-content-between align-item-center">
    <div className="d-flex align-item-center gap-5">
      <img
        src="tickitz_image/logo/Tickitz 1.png"
        alt="logo"
        className="mainLogo"
      />
      <a className="d-mobile mt-3" href="/">
        Home
      </a>
      <a className="d-mobile mt-3" href="/">
        List Movie
      </a>
    </div>

    <button className="btn btn-primary d-mobile">Sign Up</button>

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
  )
}


export default Nav;