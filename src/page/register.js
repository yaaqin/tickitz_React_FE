import React from "react";

import { Link } from "react-router-dom";

import "../style/register.css";

function Register() {
//var register component
  const [fullname, setFullname] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div className="row" id="register">
      <div className="col-md-8 col-xs-0 contentLeft">
        <Link to={"/"}>
          <img src="/tickitz_image/loginRegister/whiteLogo.png" alt="logo"></img>
        </Link>
        <span>wait, watch, wow!</span>
      </div>
      <div className="col-md-4 col-xs-12 contentRight">
        <h2>Sign Up</h2>
        <span className="grayColor">Fill your additional details</span>
        <h6 className="mt-4">Full Name</h6>
        <div class="input-group flex-nowrap">
          <input
            type="text"
            class="form-control"
            placeholder="Full Name"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
        </div>
        <h6 className="mt-2">Phone Number</h6>
        <div class="input-group flex-nowrap">
          <input
            type="text"
            class="form-control"
            placeholder="Phone Number"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
        </div>
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
        <button className="btn btn-primary mt-3 mb-3">Sign Up</button>
        <p className="text-center">
          Already have account ?{" "}
          <Link to={"/login"}>
            <span className="loginLink">Sign In</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
