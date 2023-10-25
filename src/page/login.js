import React from "react";

import { Link } from "react-router-dom";

import "../style/login.css";

function Login() {
  return (
    <div className="row" id="register">
      <div className="col-md-8 col-xs-0 contentLeft">
        <img src="/tickitz_image/loginRegister/whiteLogo.png" alt="logo"></img>
        <span>wait, watch, wow!</span>
      </div>
      <div className="col-md-4 col-xs-12 contentRight">
        <h2>Sign In</h2>
        <span className="grayColor">Sign in with your data that you entered during your registration</span>
       
        <h6 className="mt-2">Email</h6>
        <div class="input-group flex-nowrap">
          <input
            type="text"
            class="form-control"
            placeholder="Email"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
        </div>
        <h6 className="mt-2">Password</h6>
        <div class="input-group flex-nowrap">
          <input
            type="password"
            class="form-control"
            placeholder="Password"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
        </div>
        <button className="btn btn-primary mt-3 mb-3">Sign In</button>
        <p className="text-center">
        Forgot your password?
          <Link to={"/reset-password"}>
            <span className="loginLink"> Reset now</span>
          </Link>
        </p>
        <p className="text-center">
        Don’t have an account?
          <Link to={"/register"}>
            <span className="loginLink"> Sign Up</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
