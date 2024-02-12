import React from "react";
import "../style/App.css";

import { Link } from "react-router-dom";

export default function navBar() {
  return (
    <>
      <section className="fixed-top ">
        <nav className="d-flex bg-white justify-content-between py-2 px-5 ">
          <div className="d-flex gap-5 align-items-center">
            <img
              src="../tickitz_image/logo/Tickitz 1.png"
              className="mr-5"
            ></img>
            <div></div>
            <ul className="d-flex align-items-center list-unstyled gap-4 mt-4 fs-6">
              <Link to={"/"}>
                <li className="boxShadow py-2 px-4 rounded-pill hover">Home</li>
              </Link>
              <Link to={"/movie"}>
                <li className="boxShadow py-2 px-4 rounded-pill hover">
                  All Movie
                </li>
              </Link>
            </ul>
          </div>
          <div className="d-flex align-items-center">
            <button className="rounded-pill py-2 btn btn-primary border-0 px-4 hover">
              Sign up
            </button>
          </div>
        </nav>
        <hr></hr>
      </section>
    </>
  );
}
