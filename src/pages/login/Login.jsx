import React from "react";
import "./login.css";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form action="" className="loginForm">
        <label htmlFor="">Email</label>
        <input
          type="email"
          className="loginInput"
          name=""
          id=""
          placeholder="Enter your email"
        />
        <label htmlFor="">Password</label>
        <input
          className="loginInput"
          type="password"
          name=""
          id=""
          placeholder="Enter your password"
        />

        <button className="loginButton">
          <NavLink to="/write">Login</NavLink>
        </button>
      </form>
      <button className="loginRegisterButton">
        <NavLink to="/register">Register</NavLink>
      </button>
    </div>
  );
};

export default Login;
