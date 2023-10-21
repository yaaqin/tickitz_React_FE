import "./style/App.css";
import "./style/App.mobile.css";

import React from "react";
import axios from "axios";

import MovieComp from "./component/posterBanner";
import SosmedIcon from "./component/sosmedIcon";

function App() {
  //mounted / mounting

  const date = new Date();
  const Month = date.toLocaleDateString("default", { month: "short" });

  const [result, setResult] = React.useState([]);

  const [slcMonth, setslcMonth] = React.useState([Month.toLowerCase()]);

  console.log(slcMonth[0]);

  //lifeCycle
  React.useEffect(() => {
    axios
      .get("http://localhost:3000/api/movie.json")
      .then((response) => {
        console.log(`success :`);
        if (response.status === 200) {
          setResult(response.data);
        }
      })
      .catch((error) => console.log(`error : ${error}`));
  }, []);

  return (
    <div>
      {/* <!--start header--> */}
      <header className="container pt-4">
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
        {/* <!--checkbox for navbar start--> */}
        <input type="checkbox" name="" id="checkboxForNavMobile"></input>
        {/* <!--checkbox for navbar end--> */}

        {/* <!--Navbar mobile start--> */}
        <div className="mobileNav">
          <section className="navMbl" id="navbarMobile">
            <div className="d-flex justify-content-center hoverScale">
              <a className=" mt-3" href="/">
                Home
              </a>
            </div>
            <div className="d-flex justify-content-center hoverScale">
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
      {/* <!--end header--> */}
      {/* <!--now showing start--> */}
      <section id="now-showing">
        <div className="container py-5">
          {/* <!--header--> */}
          <div className="d-flex justify-content-between">
            <h2 className="text-primary">Now Showing</h2>
            <a className="text-primary" href="/#">
              View All
            </a>
          </div>

          {/* <!--content--> */}
          <div
            className="d-flex mt-md-5 mt-xs-4 contentNowShowing"
            id="nowShowingContent"
          >
            {result
              .filter((item) => item.isShowing)
              .slice(0, 5)
              .map((item) => (
                <MovieComp
                  poster={item.poster}
                  title={item.title}
                  genres={item.genres}
                  desc={item.desc}
                />
              ))}
          </div>
        </div>
      </section>
      {/* <!--now showing end--> */}
      {/* <!--upComing start--> */}
      <section id="upcoming" className="mt-5">
        <div className="container py-5">
          {/* <!--header title--> */}
          <div className="d-flex justify-content-between align-item-center">
            <h2>Upcoming Movies</h2>
            <a className="text-primary mt-md-3 mt-xs-2" href="/#">
              View All
            </a>
          </div>

          {/* <!--MonthList--> */}
          <div className="d-flex justify-content-arround mt-4 gap-2 listMonthMobile">
            {[
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Des",
            ].map((item) => (
              <button
                className={
                  slcMonth[0] === item.toLowerCase()
                    ? "btn btnPrimary px-4"
                    : "btn btn-outline-primary px-4"
                }
                onClick={() => {
                  setslcMonth(item.toLowerCase());
                }}
              >
                {item}
              </button>
            ))}
          </div>

          {/* <!--content--> */}
          <div
            className="d-flex mt-5 listBannerUpcoming"
            id="nowShowingContent"
          >
            {result
              .filter((item) => !item.isShowing)
              .filter((item) => item.showingMonth === slcMonth)
              .slice(0, 5)
              .map((item) => (
                <MovieComp
                  poster={item.poster}
                  title={item.title}
                  genres={item.genres}
                  desc={item.desc}
                />
              ))}

            {/* Movie not Found*/}
            {result
              .filter((item) => !item.isShowing)
              .filter((item) => item.showingMonth === slcMonth).length === 0 ? (
              <span className="text-center">
                Movie not found <br />
                Please Select any Month
              </span>
            ) : null}
          </div>
        </div>
      </section>
      {/* <!--upComing end--> */}
      {/* <!--CTA start--> */}
      <section id="CTA" className="mt-5 pt-5 pb-5 cta">
        <div className="container">
          <div className="d-flex justify-content-center">
            <span className="text-muted text-center">
              Be the vanguard of the
            </span>
          </div>
          <h1 className="text-primary text-center">Moviegoers</h1>

          <div className="d-flex gap-2 justify-content-center mt-4">
            <input
              className="emailInput"
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Type Your Email"
              style={{ width: "300px" }}
            />
            <button className="btn btn-primary">Join Now</button>
          </div>

          <p className="text-center mt-4">
            By joining you as a Tickitz member,
            <br />
            we will always send you the latest updates via email .
          </p>
        </div>
      </section>
      {/* <!--CTA end--> */}
      {/* <!--Footer Start--> */}
      <footer className="container pb-3 pt-5 mt-md-10 mt-xs-5" id="footer">
        <div className="row">
          <div className="col-md-3 col-xs-12">
            <div className="d-flex justify-content-center">
              <img
                className="mb-4"
                src="./tickitz_image/logo/Tickitz 1.png"
                alt="logo"
              />
            </div>
            <div className="d-flex text-center justify-content-center">
              <p style={{ color: "#6d727a" }}>
                Stop waiting in line. Buy tickets
                <br />
                conveniently, watch movies quietly.
              </p>
            </div>
          </div>
          <div className="col-md-3 col-xs-12 footerExplore">
            <h6 className="mb-4 pt-4">Explore</h6>
            <a style={{ display: "block", fontWeight: "300" }} href="/#">
              Home
            </a>
            <a style={{ display: "block", fontWeight: "300" }} href="/#">
              List Movie
            </a>
          </div>
          <div className="col-md-3 col-xs-12">
            <h6 className="mb-4 pt-4 sponsorFooter">Our Sponsor</h6>

            <div className="cinemasLogo footerSponsor">
              <div className="cinemasFooter">
                <img
                  className="mb-3"
                  src="./tickitz_image/cinemas/hiflix 2.png"
                  alt="hiflix cinemas"
                />
              </div>
              <div className="cinemasFooter">
                <img
                  className="mb-3"
                  src="./tickitz_image/cinemas/ebv.id 2.png"
                  alt="cinemas"
                />
              </div>
              <div className="cinemasFooter">
                <img
                  className="mb-3"
                  src="./tickitz_image/cinemas/CineOne21 2.png"
                  alt="cinemas"
                />
              </div>
            </div>
          </div>
          <div className="col-md-3 col-xs-12">
            <h6 className="mb-4 pt-4 footerFollow">Follow Us</h6>

            <SosmedIcon />
            <SosmedIcon />
            <SosmedIcon />
            <SosmedIcon />
          </div>
        </div>

        <p className="text-center mt-5 mb-3">
          © 2020 Tickitz. All Rights Reserved.
        </p>
      </footer>
      {/* <!--Footer End--> */}
    </div>
  );
}

export default App;
