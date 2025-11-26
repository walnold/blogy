import React from "react";
import "./register.css";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form action="" className="registerForm">
        <label>Username</label>
        <input className="registerInput" placeholder="Enter your username" />

        <label>Email</label>
        <input
          type="email"
          className="registerInput"
          placeholder="Enter your email"
        />
        <label htmlFor="">Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password"
        />

        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">
        <NavLink to="/login">Login</NavLink>
      </button>
    </div>
  );
};

export default Register;
