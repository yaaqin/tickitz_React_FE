import React from "react";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import "../style/login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [isSuccess, setIsSuccess] = React.useState(false);
  const [errMsg, setErrMsg] = React.useState("");

  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (localStorage.getItem("token") && localStorage.getItem("profile")) {
      navigate("/");
    }
  });

  const handleLogin = async () => {
    setIsLoading(true);

    axios
      .post("https://tikitz-v2.adaptable.app/yaqin/auth/login", {
        email: email,
        password: password,
      })
      .then((respon) => {
        const token = respon?.data?.data?.token;
        const profile = respon?.data?.data?.result;

        localStorage.setItem("token", token);
        localStorage.setItem("profile", JSON.stringify(profile));

        console.log(token);
        console.log(profile);

        setIsSuccess(true);

        setTimeout(() => {
          window.location.reload()
        }, 2000);
      })
      .catch((error) => {
        const errPassword = error?.response?.data?.messages?.password?.message;
        const errEmail = error?.response?.data?.messages?.email?.message;
        const wrongPass = error?.response?.data?.messages;

        setIsSuccess(false);
        setErrMsg(
          errEmail ?? errPassword ?? wrongPass ?? "Something wrong in ur App"
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className="row" id="register">
      <div className="col-md-8 col-xs-0 contentLeft">
        <Link to={"/"}>
          <img
            src="/tickitz_image/loginRegister/whiteLogo.png"
            alt="logo"
            className="shadowFilter whiteLogo"
          ></img>
        </Link>
        <span className="shadowFilter">wait, watch, wow!</span>
      </div>
      <div className="col-md-4 col-xs-12 contentRight">
        <h2>Sign In</h2>
        <p className="grayColor mb-3">
          Sign in with your data that you entered during your registration
        </p>

        {isSuccess ? (
          <div className="alert alert-success" role="alert">
            Login success, please wait to redirect to your app
          </div>
        ) : null}

        {errMsg ? (
          <div className="alert alert-danger" role="alert">
            {errMsg}
          </div>
        ) : null}

        <h6 className="mt-2">Email</h6>
        <div class="input-group flex-nowrap">
          <input
            type="text"
            class="form-control"
            placeholder="Email"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
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
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <button
          className="btn btn-primary mt-3 mb-3"
          onClick={handleLogin}
          disabled={isLoading}
        >
          {" "}
          {isLoading ? "Loading..." : "Sign In"}
        </button>
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
